import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowLeft, Briefcase, Code2, FolderOpen, Cpu, X } from "lucide-react";
import cityHero from "@/assets/city-hero.jpg";

interface ProfessionalWorldProps {
  onBack: () => void;
}

const sections = [
  {
    id: "about",
    sign: "About Street",
    icon: Briefcase,
    title: "Who I Am",
    content: "A passionate software engineer and creative thinker based in New York City. I build digital experiences that blend technology with art, bringing ideas to life through clean code and thoughtful design.",
    details: ["Full-Stack Developer", "UI/UX Enthusiast", "Problem Solver", "Team Leader"],
  },
  {
    id: "experience",
    sign: "Experience Avenue",
    icon: Code2,
    title: "Where I've Been",
    content: "Years of crafting software solutions across industries — from startups to enterprise, building products that matter.",
    details: [
      "Senior Software Engineer — Tech Corp (2022–Present)",
      "Full-Stack Developer — Creative Agency (2020–2022)",
      "Frontend Developer — Startup Inc (2018–2020)",
      "Junior Developer — Digital Studio (2016–2018)",
    ],
  },
  {
    id: "projects",
    sign: "Projects Boulevard",
    icon: FolderOpen,
    title: "What I've Built",
    content: "A curated collection of projects that showcase technical depth and creative vision.",
    details: [
      "🏗️ Architecture Platform — Real-time collaboration tool",
      "🎮 GameHub — Multiplayer gaming platform",
      "📊 DataViz — Interactive data visualization suite",
      "🤖 AI Assistant — Natural language processing app",
    ],
  },
  {
    id: "skills",
    sign: "Skills Park",
    icon: Cpu,
    title: "What I Know",
    content: "A constantly evolving toolkit of technologies, frameworks, and methodologies.",
    details: [
      "React • TypeScript • Next.js • Node.js",
      "Python • Go • Rust • SQL",
      "AWS • Docker • Kubernetes • CI/CD",
      "System Design • Agile • Leadership",
    ],
  },
];

const ProfessionalWorld = ({ onBack }: ProfessionalWorldProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePanel, setActivePanel] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  const activeSection = sections.find((s) => s.id === activePanel);

  return (
    <motion.div
      ref={containerRef}
      className="relative min-h-[400vh]"
      style={{ background: `hsl(var(--city-bg))` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Parallax background */}
      <motion.div
        className="fixed inset-0 z-0"
        style={{ x: backgroundX }}
      >
        <img
          src={cityHero}
          alt=""
          className="w-[130%] h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
      </motion.div>

      {/* Fixed progress */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
        {sections.map((s, i) => {
          const threshold = i / sections.length;
          return (
            <ProgressDot key={s.id} progress={scrollYProgress} threshold={threshold} />
          );
        })}
      </div>

      <button className="back-button" onClick={onBack}>
        <ArrowLeft className="inline w-4 h-4 mr-1" /> Back
      </button>

      {/* Bicycle rider - fixed */}
      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 text-4xl animate-bicycle-bob pointer-events-none"
      >
        🚴
      </motion.div>

      {/* Sections */}
      {sections.map((section, i) => (
        <WorldSection
          key={section.id}
          section={section}
          index={i}
          onOpen={() => setActivePanel(section.id)}
          theme="city"
        />
      ))}

      {/* Info Panel Overlay */}
      {activeSection && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setActivePanel(null)}
        >
          <motion.div
            className="info-panel max-w-lg w-full mx-4 border-city-accent/30"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-display font-bold text-city-accent">{activeSection.title}</h3>
              <button onClick={() => setActivePanel(null)} className="text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-muted-foreground font-body mb-6">{activeSection.content}</p>
            <ul className="space-y-3">
              {activeSection.details.map((d, i) => (
                <motion.li
                  key={i}
                  className="font-body text-sm text-foreground/80 pl-3 border-l-2 border-city-accent/40"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {d}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

function WorldSection({
  section,
  index,
  onOpen,
  theme,
}: {
  section: (typeof sections)[0];
  index: number;
  onOpen: () => void;
  theme: "city" | "nature";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const accentClass = theme === "city" ? "text-city-accent" : "text-nature-accent";
  const borderClass = theme === "city" ? "border-city-accent/30" : "border-nature-accent/30";

  return (
    <div ref={ref} className="world-section px-6 md:px-16">
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className={`street-sign mb-6 ${accentClass} ${borderClass}`}>
          <section.icon className="inline w-5 h-5 mr-2" />
          {section.sign}
        </div>

        <h2 className={`text-4xl md:text-5xl font-display font-bold mb-4 ${accentClass}`}>
          {section.title}
        </h2>

        <p className="text-muted-foreground font-body text-lg mb-8 leading-relaxed">
          {section.content}
        </p>

        <motion.button
          className={`px-6 py-3 rounded-lg font-body font-medium border ${borderClass} ${accentClass} hover:bg-primary/10 transition-colors`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onOpen}
        >
          Explore →
        </motion.button>
      </motion.div>
    </div>
  );
}

function ProgressDot({ progress, threshold }: { progress: any; threshold: number }) {
  const opacity = useTransform(progress, [threshold - 0.05, threshold, threshold + 0.2], [0.3, 1, 0.3]);
  const scale = useTransform(progress, [threshold - 0.05, threshold, threshold + 0.2], [1, 1.5, 1]);

  return (
    <motion.div
      className="progress-dot"
      style={{ opacity, scale, background: "hsl(var(--city-accent))" }}
    />
  );
}

export default ProfessionalWorld;
export { WorldSection };
