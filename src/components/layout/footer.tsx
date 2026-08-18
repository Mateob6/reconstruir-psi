export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-surface/50 mt-16">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-60 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2">
              {/* Univalle abstract icon */}
              <div className="w-8 h-10 bg-accent/20 rounded flex items-center justify-center border border-accent/30">
                <div className="w-4 h-6 bg-accent/40 rounded-sm"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-foreground uppercase tracking-wider leading-none">Universidad</span>
                <span className="text-[11px] font-bold text-foreground uppercase tracking-wider">del Valle</span>
              </div>
            </div>
            <div className="h-8 w-px bg-border hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-foreground uppercase tracking-wider">Facultad de Psicología</span>
            </div>
            <div className="h-8 w-px bg-border hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-foreground uppercase tracking-wider">Instituto CIDEAS</span>
            </div>
          </div>
          
          <div className="text-xs text-muted text-center md:text-right">
            <p className="font-medium text-foreground">Reconstruir Psi</p>
            <p className="mt-1">Guía basada en evidencia — Agosto 2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
