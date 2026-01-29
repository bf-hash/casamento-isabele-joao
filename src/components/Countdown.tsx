"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown({ date }: { date: Date }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const calc = () => {
      const now = new Date().getTime();
      const target = date.getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    calc();
    const t = setInterval(calc, 1000);
    return () => clearInterval(t);
  }, [date]);

  if (!timeLeft) return null;

  const items = [
    { label: "dias", value: timeLeft.days },
    { label: "horas", value: timeLeft.hours },
    { label: "min", value: timeLeft.minutes },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
      {items.map(({ label, value }) => (
        <div key={label} className="text-center">
          <div className="font-serif text-4xl sm:text-5xl font-semibold text-charcoal tabular-nums">
            {String(value).padStart(2, "0")}
          </div>
          <div className="text-xs uppercase tracking-[0.2em] text-charcoal/60 mt-2">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
