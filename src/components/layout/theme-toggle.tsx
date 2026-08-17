"use client";

import { Button } from "@/components/ui";

export function ThemeToggle() {
  function alternar() {
    const raiz = document.documentElement;
    const actual =
      raiz.dataset.theme ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const siguiente = actual === "dark" ? "light" : "dark";
    raiz.dataset.theme = siguiente;
    window.localStorage.setItem("theme", siguiente);
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={alternar}
      aria-label="Cambiar tema"
      title="Cambiar tema"
    >
      <span
        aria-hidden="true"
        className="hidden dark:inline [:root[data-theme='dark']_&]:inline [:root[data-theme='light']_&]:hidden"
      >
        ☀
      </span>
      <span
        aria-hidden="true"
        className="inline dark:hidden [:root[data-theme='dark']_&]:hidden [:root[data-theme='light']_&]:inline"
      >
        ☾
      </span>
    </Button>
  );
}
