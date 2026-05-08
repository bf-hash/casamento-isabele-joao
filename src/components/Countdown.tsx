"use client";

import { useState, useEffect } from "react";

const TARGET = new Date("2027-07-01T15:00:00");

function calc() {
  const diff = Math.max(0, TARGET.getTime() - Date.now());
  return {
    d: Math.floor(diff / 864e5),
    h: Math.floor((diff % 864e5) / 36e5),
    m: Math.floor((diff % 36e5) / 6e4),
    s: Math.floor((diff % 6e4) / 1e3),
  };
}

const UNITS: [keyof ReturnType<typeof calc>, string][] = [
  ["d", "dias"],
  ["h", "horas"],
  ["m", "min"],
  ["s", "seg"],
];

export default function Countdown() {
  const [t, setT] = useState<ReturnType<typeof calc> | null>(null);

  useEffect(() => {
    setT(calc());
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="ij-countdown">
      {UNITS.map(([k, lbl]) => (
        <div className="ij-countdown-unit" key={k}>
          <div className="ij-countdown-val">
            {t ? pad(t[k]) : "--"}
          </div>
          <div className="ij-countdown-lbl">{lbl}</div>
        </div>
      ))}
    </div>
  );
}
