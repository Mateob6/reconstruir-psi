export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-surface/50 mt-16">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-60 hover:opacity-100 transition-opacity">
            <a href="https://www.univalle.edu.co/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:scale-105 transition-transform">
              <img src="/logos/logo1.png" alt="Universidad del Valle" className="h-8 object-contain" />
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-foreground uppercase tracking-wider leading-none">Universidad</span>
                <span className="text-[11px] font-bold text-foreground uppercase tracking-wider">del Valle</span>
              </div>
            </a>
            
            <div className="h-8 w-px bg-border hidden sm:block"></div>
            
            <a href="https://psicologia.univalle.edu.co/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:scale-105 transition-transform">
              <img src="/logos/logo2.png" alt="Facultad de Psicología" className="h-8 object-contain" />
              <span className="text-[11px] font-bold text-foreground uppercase tracking-wider">Facultad de Psicología</span>
            </a>
            
            <div className="h-8 w-px bg-border hidden sm:block"></div>
            
            <a href="https://psicologia.univalle.edu.co/?id=834" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:scale-105 transition-transform">
              <span className="text-[11px] font-bold text-primary uppercase tracking-wider">Instituto CIDEAS</span>
            </a>
          </div>
          
          <div className="text-xs text-muted text-center md:text-right">
            <p className="font-medium text-foreground">Reconstruir Psi</p>
            <p className="mt-1">Guía basada en evidencia — Agosto 2026</p>
            <a
              href="https://recursos-psi.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-2 text-accent hover:underline"
            >
              Directorio de recursos →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
