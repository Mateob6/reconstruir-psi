import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Reconstruir Psi — Guía basada en evidencia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          backgroundColor: "#faf8f5",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              backgroundColor: "#0d9488",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: "36px",
              fontWeight: "bold",
            }}
          >
            ψ
          </div>
          <span style={{ fontSize: "24px", color: "#57534e" }}>Reconstruir Psi</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h1
            style={{
              fontSize: "56px",
              fontWeight: "bold",
              color: "#1c1917",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Guía basada en evidencia
          </h1>
          <p
            style={{
              fontSize: "28px",
              color: "#57534e",
              lineHeight: 1.4,
              margin: 0,
              maxWidth: "800px",
            }}
          >
            Respuesta psicosocial y educativa en escuelas tras el terremoto de agosto 2026 en
            Colombia
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <span style={{ fontSize: "18px", color: "#a8a29e" }}>
            129 recursos · 3 meta-análisis · 13 síntesis temáticas
          </span>
          <span style={{ fontSize: "18px", color: "#0d9488" }}>Colombia, agosto 2026</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
