import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bolsa Costa Brava — Isabele & João",
  description: "Mockup da bolsa Costa Brava (45 x 40).",
};

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
          maxWidth: 720,
          width: "100%",
          aspectRatio: "45 / 40",
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
          {/* Layer 1: Coastline */}
          <div
            style={{
              position: "absolute",
              top: "-2%",
              left: "8%",
              width: "88%",
              height: "104%",
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

          {/* Layer 2: El Convent illustration (land side, left of coast) */}
          <div
            style={{
              position: "absolute",
              top: "22%",
              left: "2%",
              width: "48%",
              mixBlendMode: "multiply",
              pointerEvents: "none",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/bolsa/el-convent-crop.png"
              alt="El Convent de Blanes"
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          {/* Layer 3: SVG overlay — labels, icons, monogram */}
          <svg
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
            }}
            viewBox="0 0 450 400"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* City labels */}
            {/* Cadaqués — peninsula */}
            <circle cx="338" cy="75" r="2" fill="#8FA3B5" />
            <text
              x="328"
              y="70"
              fill="#8FA3B5"
              fontFamily="'Cormorant Garamond', serif"
              fontSize="8"
              fontWeight="500"
              letterSpacing="2"
              textAnchor="end"
            >
              CADAQUÉS
            </text>

            {/* Perelada Winery — inland */}
            <circle cx="220" cy="42" r="2" fill="#8FA3B5" />
            <text
              x="210"
              y="37"
              fill="#8FA3B5"
              fontFamily="'Cormorant Garamond', serif"
              fontSize="7.5"
              fontWeight="500"
              letterSpacing="1.8"
              textAnchor="end"
            >
              PERELADA
            </text>
            <path
              d="M 275 42 C 258 40, 240 40, 220 42"
              stroke="#8FA3B5"
              strokeWidth="0.5"
              strokeDasharray="2.5 2.5"
              fill="none"
            />

            {/* Begur */}
            <circle cx="282" cy="155" r="2" fill="#8FA3B5" />
            <text
              x="272"
              y="150"
              fill="#8FA3B5"
              fontFamily="'Cormorant Garamond', serif"
              fontSize="8"
              fontWeight="500"
              letterSpacing="2"
              textAnchor="end"
            >
              BEGUR
            </text>

            {/* El Convent de Blanes — highlighted */}
            <circle cx="265" cy="238" r="2.5" fill="#8FA3B5" />
            <circle
              cx="265"
              cy="238"
              r="5.5"
              fill="none"
              stroke="#8FA3B5"
              strokeWidth="0.6"
            />
            <text
              x="255"
              y="233"
              fill="#8FA3B5"
              fontFamily="'Cormorant Garamond', serif"
              fontSize="9"
              fontWeight="600"
              letterSpacing="2"
              textAnchor="end"
            >
              EL CONVENT
            </text>
            <text
              x="255"
              y="244"
              fill="#8FA3B5"
              fontFamily="'Cormorant Garamond', serif"
              fontSize="7"
              fontWeight="400"
              letterSpacing="1.5"
              textAnchor="end"
            >
              DE BLANES
            </text>

            {/* Barcelona */}
            <circle cx="138" cy="352" r="2" fill="#8FA3B5" />
            <text
              x="128"
              y="347"
              fill="#8FA3B5"
              fontFamily="'Cormorant Garamond', serif"
              fontSize="8"
              fontWeight="500"
              letterSpacing="2"
              textAnchor="end"
            >
              BARCELONA
            </text>

            {/* Wine glass (Perelada) */}
            <g
              transform="translate(232, 50) scale(0.8)"
              stroke="#8FA3B5"
              strokeWidth="0.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            >
              <path d="M -6 -7 C -6 -1, -4 4, 0 5.5 C 4 4, 6 -1, 6 -7" />
              <ellipse cx="0" cy="-7" rx="6" ry="1.3" strokeWidth="0.6" />
              <path
                d="M -5 -4 C -3 -3, 3 -3, 5 -4"
                strokeWidth="0.4"
                opacity="0.5"
              />
              <line x1="0" y1="5.5" x2="0" y2="12" strokeWidth="0.6" />
              <ellipse cx="0" cy="12" rx="4.5" ry="1" strokeWidth="0.5" />
            </g>

            {/* Beach umbrella (Begur) */}
            <g
              transform="translate(256, 162) scale(1)"
              stroke="#8FA3B5"
              strokeWidth="0.7"
              strokeLinecap="round"
              fill="none"
            >
              <line x1="-1" y1="-14" x2="1" y2="10" strokeWidth="0.8" />
              <path
                d="M -12 -12 C -12 -22, 12 -22, 12 -12"
                fill="#8FA3B5"
                fillOpacity="0.04"
                strokeWidth="0.8"
              />
              <path
                d="M -12 -12 C -9 -10, -6 -10, -3 -12 C 0 -10, 3 -10, 6 -12 C 9 -10, 11 -10, 12 -12"
                strokeWidth="0.5"
              />
              <path d="M 0 -21 L -4 -12" strokeWidth="0.35" opacity="0.4" />
              <path d="M 0 -21 L 4 -12" strokeWidth="0.35" opacity="0.4" />
              <path d="M 0 -21 L -9 -13" strokeWidth="0.35" opacity="0.4" />
              <path d="M 0 -21 L 9 -13" strokeWidth="0.35" opacity="0.4" />
              <path
                d="M -5 10 L 8 9 L 9 12 L -4 13 Z"
                fill="#8FA3B5"
                fillOpacity="0.03"
                strokeWidth="0.4"
              />
            </g>

            {/* Sailboat (sea side, right of coast) */}
            <g
              transform="translate(370, 170) scale(1.5)"
              stroke="#8FA3B5"
              strokeWidth="0.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            >
              <path
                d="M -14 8 C -12 14, -4 17, 0 18 C 4 17, 12 14, 16 8 L 12 8 L -12 8 Z"
                fill="#8FA3B5"
                fillOpacity="0.06"
              />
              <path
                d="M -10 12 C -6 15, 6 15, 12 11"
                strokeWidth="0.4"
              />
              <line x1="1" y1="-24" x2="1" y2="8" strokeWidth="0.8" />
              <path
                d="M 2 -22 C 10 -14, 15 -4, 14 6 L 2 6 Z"
                fill="#8FA3B5"
                fillOpacity="0.03"
                strokeWidth="0.6"
              />
              <path
                d="M 3 -15 C 8 -10, 11 -2, 10 5"
                strokeWidth="0.3"
                opacity="0.4"
              />
              <path
                d="M 3 -8 C 6 -4, 8 1, 8 5"
                strokeWidth="0.3"
                opacity="0.4"
              />
              <path
                d="M 0 -20 C -7 -12, -10 -2, -9 5 L 0 5 Z"
                fill="#8FA3B5"
                fillOpacity="0.02"
                strokeWidth="0.55"
              />
              <line x1="1" y1="-24" x2="1" y2="-28" strokeWidth="0.5" />
              <path
                d="M 1 -28 L 5 -26.5 L 1 -25"
                fill="#8FA3B5"
                fillOpacity="0.12"
                strokeWidth="0.4"
              />
              <path
                d="M -18 20 C -15 18, -12 18, -9 20"
                strokeWidth="0.35"
                opacity="0.35"
              />
              <path
                d="M 6 21 C 9 19, 12 19, 15 21"
                strokeWidth="0.35"
                opacity="0.35"
              />
            </g>

            {/* Seagulls */}
            <g
              stroke="#8FA3B5"
              strokeWidth="0.6"
              fill="none"
              strokeLinecap="round"
            >
              <path d="M 360 105 C 362 103, 364 102.5, 365 103 C 366 102.5, 368 103, 370 105" />
              <path
                d="M 390 130 C 391.5 128.5, 393 128, 394 128.5 C 395 128, 396.5 128.5, 398 130"
                transform="scale(0.9)"
              />
              <path d="M 345 80 C 346.5 79, 348 78.5, 349 79 C 350 78.5, 351.5 79, 353 80" />
            </g>

            {/* Small waves */}
            <g
              stroke="#8FA3B5"
              strokeWidth="0.4"
              fill="none"
              strokeLinecap="round"
              opacity="0.3"
            >
              <path d="M 350 215 C 353 213, 356 213, 359 215" />
              <path d="M 320 280 C 323 278, 326 278, 329 280" />
              <path d="M 380 260 C 383 258, 386 258, 389 260" />
              <path d="M 300 340 C 303 338, 306 338, 309 340" />
            </g>

            {/* Monogram IJ + date — bottom right */}
            <g
              fill="#8FA3B5"
              fontFamily="'Cormorant Garamond', serif"
              textAnchor="middle"
            >
              <text x="398" y="342" fontSize="48" fontWeight="400" letterSpacing="-1">
                <tspan dx="-5">I</tspan>
              </text>
              <text x="412" y="358" fontSize="48" fontWeight="400" letterSpacing="-1">
                <tspan dx="-5">J</tspan>
              </text>
            </g>
            <text
              x="405"
              y="380"
              fill="#8FA3B5"
              fontFamily="'Cormorant Garamond', serif"
              fontSize="8.5"
              fontWeight="400"
              letterSpacing="2.5"
              textAnchor="middle"
            >
              01.07.2027
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
