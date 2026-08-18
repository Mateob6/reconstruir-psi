import { cn } from "@/components/ui/cn";

export interface IASCPyramidProps {
  caption?: string;
  className?: string;
}

export function IASCPyramid({ caption, className }: IASCPyramidProps) {
  const levels = [
    {
      num: "Nivel 4",
      title: "Servicios Especializados",
      desc: "Apoyo psiquiátrico o psicológico clínico",
      color: "#25395E",
      width: "w-[85%] sm:w-[45%]",
    },
    {
      num: "Nivel 3",
      title: "Apoyos Focalizados",
      desc: "Atención individual o grupal por personal capacitado",
      color: "#334B77",
      width: "w-[90%] sm:w-[60%]",
    },
    {
      num: "Nivel 2",
      title: "Apoyos Comunitarios",
      desc: "Fortalecimiento de redes familiares y comunitarias",
      color: "#4E6288",
      width: "w-[95%] sm:w-[80%]",
    },
    {
      num: "Nivel 1",
      title: "Servicios Básicos",
      desc: "Provisión de necesidades esenciales con enfoque psicosocial",
      color: "#6A7C9E",
      width: "w-full",
    },
  ];

  return (
    <div className={cn("flex flex-col items-center w-full my-8", className)}>
      <div className="flex flex-col items-center w-full gap-1.5 sm:gap-2">
        {levels.map((level) => (
          <div
            key={level.num}
            className={cn(
              "flex flex-col items-center justify-center text-center py-4 px-4 sm:px-6 rounded-lg transition-all shadow-sm",
              level.width
            )}
            style={{ backgroundColor: level.color }}
          >
            <div className="text-[10px] sm:text-xs font-mono font-medium text-white/70 mb-1 uppercase tracking-widest">
              {level.num}
            </div>
            <div className="font-bold text-[14px] sm:text-[16px] text-white leading-tight mb-1">
              {level.title}
            </div>
            <div className="text-[12px] sm:text-[13px] text-white/80 leading-snug">
              {level.desc}
            </div>
          </div>
        ))}
      </div>
      {caption && (
        <p className="mt-5 text-[13px] text-[var(--muted)] italic text-center max-w-[500px]">
          {caption}
        </p>
      )}
    </div>
  );
}
