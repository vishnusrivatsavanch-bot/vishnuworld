import { useMemo } from "react";

interface Particle {
  id: number;
  left: string;
  size: number;
  duration: string;
  delay: string;
  color: string;
}

const ParticleField = ({ count = 50, colors }: { count?: number; colors?: string[] }) => {
  const defaultColors = [
    "hsl(270 80% 65% / 0.6)",
    "hsl(220 80% 60% / 0.5)",
    "hsl(45 90% 60% / 0.4)",
    "hsl(270 60% 55% / 0.3)",
  ];

  const particleColors = colors || defaultColors;

  const particles: Particle[] = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 4 + 1,
        duration: `${Math.random() * 10 + 6}s`,
        delay: `${Math.random() * 10}s`,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
      })),
    [count, particleColors]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-float-particle"
          style={{
            left: p.left,
            bottom: "-10px",
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            "--duration": p.duration,
            "--delay": p.delay,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default ParticleField;
