'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import type { ReactNode, CSSProperties } from 'react'
import { glossary } from '@/data/glossary'

interface TermProps {
  id: string
  children: ReactNode
}

export function Term({ id, children }: TermProps) {
  const [open, setOpen] = useState(false)
  const [style, setStyle] = useState<CSSProperties>({})
  const [arrowStyle, setArrowStyle] = useState<CSSProperties>({})
  const [above, setAbove] = useState(true)
  const [mounted, setMounted] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const popoverRef = useRef<HTMLDivElement>(null)

  const entry = glossary[id]

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!open) return
    const onClickOutside = (e: MouseEvent) => {
      if (
        triggerRef.current && !triggerRef.current.contains(e.target as Node) &&
        popoverRef.current && !popoverRef.current.contains(e.target as Node)
      ) {
        close()
      }
    }
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    const onScroll = () => close()
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onEscape)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onEscape)
      window.removeEventListener('scroll', onScroll)
    }
  }, [open, close])

  useEffect(() => {
    if (!open || !triggerRef.current) return

    const rect = triggerRef.current.getBoundingClientRect()
    const pad = 16
    const pw = 288

    const showAbove = rect.top > 130
    setAbove(showAbove)

    let left = rect.left + rect.width / 2 - pw / 2
    if (left + pw > window.innerWidth - pad) left = window.innerWidth - pad - pw
    if (left < pad) left = pad

    const arrowX = rect.left + rect.width / 2 - left

    setStyle({
      position: 'fixed',
      left: `${left}px`,
      top: showAbove ? undefined : `${rect.bottom + 10}px`,
      bottom: showAbove ? `${window.innerHeight - rect.top + 10}px` : undefined,
      width: `${pw}px`,
    })
    setArrowStyle({ left: `${arrowX}px`, transform: 'translateX(-50%)' })
  }, [open])

  if (!entry) return <>{children}</>

  const toggle = () => setOpen(prev => !prev)

  const triggerClass =
    'cursor-help underline decoration-dotted underline-offset-2 decoration-current/40'

  const popover = open && mounted ? createPortal(
    <div
      ref={popoverRef}
      id={`term-${id}`}
      role="tooltip"
      style={style}
      className="z-[100] rounded-xl border border-border bg-surface p-3.5 shadow-lg"
    >
      <span
        className={`absolute ${above ? 'term-arrow-down' : 'term-arrow-up'}`}
        style={arrowStyle}
      />
      <span className="block text-sm font-semibold text-foreground leading-snug">
        {entry.nombre}
      </span>
      <span className="mt-1.5 block text-xs leading-relaxed text-muted">
        {entry.definicion}
      </span>
    </div>,
    document.body
  ) : null

  return (
    <>
      {entry.sigla ? (
        <span className="inline">
          {children}
          {' ('}
          <button
            ref={triggerRef}
            type="button"
            onClick={toggle}
            className={triggerClass}
            aria-expanded={open}
            aria-describedby={open ? `term-${id}` : undefined}
          >
            {entry.sigla}
          </button>
          {')'}
        </span>
      ) : (
        <button
          ref={triggerRef}
          type="button"
          onClick={toggle}
          className={triggerClass}
          aria-expanded={open}
          aria-describedby={open ? `term-${id}` : undefined}
        >
          {children}
        </button>
      )}
      {popover}
    </>
  )
}
