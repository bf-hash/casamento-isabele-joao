import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bolsa Costa Brava — Isabele & João",
  description: "Mockup da bolsa Costa Brava (45 x 40).",
};

const INK = "#8FA3B5";

export default function BolsaPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#e8e4dc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
      }}
    >
      <div
        style={{
          maxWidth: 640,
          width: "100%",
          aspectRatio: "45 / 50",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#FAF7F0",
            border: "1px solid #e0d8ca",
            borderRadius: 3,
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          }}
        >
          {/* Coast image — right side, full height */}
          <div
            style={{
              position: "absolute",
              top: "4%",
              right: "4%",
              width: "55%",
              height: "92%",
              mixBlendMode: "multiply",
              pointerEvents: "none",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/bolsa/coast-v3.png"
              alt="Costa Brava coastline"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "right center",
              }}
            />
          </div>

          {/* SVG overlay — monogram + text only */}
          <svg
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
            }}
            viewBox="0 0 450 500"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* IJ Monogram */}
            <g
              fill={INK}
              fontFamily="'Cormorant Garamond', serif"
              fontWeight={400}
              textAnchor="middle"
            >
              <text x="148" y="230" fontSize="140" letterSpacing="-3">
                I
              </text>
              <text x="188" y="258" fontSize="140" letterSpacing="-3">
                J
              </text>
            </g>

            {/* Text block — left aligned */}
            <g fill={INK} fontFamily="'Cormorant Garamond', serif" textAnchor="start">
              <text x="98" y="320" fontSize="20" fontWeight={500} letterSpacing="6">
                COSTA BRAVA
              </text>
              <text x="98" y="350" fontSize="17" fontWeight={400} letterSpacing="5">
                ESPANHA
              </text>
              <text x="98" y="378" fontSize="17" fontWeight={400} letterSpacing="5">
                JULHO 2027
              </text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
