import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowLeft, Mountain, Plane, Palette, Star, X } from "lucide-react";
import natureHero from "@/assets/nature-hero.jpg";

interface PersonalWorldProps {
  onBack: () => void;
}

const sections = [
  {
    id: "fitness",
    sign: "Fitness Peak",
    icon: Mountain,
    title: "Health & Endurance",
    content: "A practitioner of Karate since childhood, earning a bronze belt at the Warangal Karate Club. Resilience forged through adversity — overcoming two right-hand fractures just months before high school finals, teaching himself to write left-handed to finish with a 95% score.",
    details: [
      "🥋 Karate — Bronze belt, Warangal Karate Club",
      "💪 Resilience — Overcame major accident, adapted & excelled",
      "✍️ Ambidextrous — Learned left-hand writing under pressure",
      "🎯 Current Goal — Strength, flexibility, and endurance lifestyle",
    ],
  },
  {
    id: "travel",
    sign: "Travel Valley",
    icon: Plane,
    title: "Wanderlust",
    content: "A love for exploring different cultures and trying new foods. The world is a classroom, and every destination is a lesson.",
    details: [
      "🇬🇷 Santorini, Greece — Dream destination #1",
      "🌌 Northern Lights — Chasing the aurora",
      "🇫🇷 Paris, France — Art, culture, and cuisine",
      "🏝️ The Maldives — Turquoise paradise",
      "🗾 Japan — Tradition meets innovation",
    ],
  },
  {
    id: "interests",
    sign: "Interests Island",
    icon: Palette,
    title: "Passions & Play",
    content: "The Strategist meets the Cinema Enthusiast — a mind shaped by chess, investigation, and stories of resilience.",
    details: [
      "♟️ Chess & Strategy — The analytical mind at play",
      "🔍 Investigation & Industry Research — Curious by nature",
      "🎬 Favorite Films — Shawshank Redemption, Ford vs Ferrari, Major, Batman Begins, The Terminal",
      "🐕 Nature Connection — Childhood among 15+ dogs & animals",
      "🧠 Human Behavior & Consumerism — Understanding what drives people",
    ],
  },
  {
    id: "goals",
    sign: "Goals Horizon",
    icon: Star,
    title: "The Dream Ahead",
    content: "Yad Bhavam Thad Bhavathi — 'As you think, so you become.' The vision of becoming a 'Business Magnet,' staying grounded as a lifelong learner while driving innovation in genetics and finance.",
    details: [
      "🧲 The Vision — Becoming a 'Business Magnet'",
      "📖 Philosophy — Yad Bhavam Thad Bhavathi",
      "🧬 Innovation — Driving change in genetics & finance",
      "🌱 Commitment — Lifelong learner, forever grounded",
    ],
  },
];

const PersonalWorld = ({ onBack }: PersonalWorldProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePanel, setActivePanel] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const activeSection = sections.find((s) => s.id === activePanel);

  return (
    <motion.div
      ref={containerRef}
      className="relative min-h-[400vh]"
      style={{ background: `hsl(var(--nature-bg))` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Parallax background */}
      <motion.div className="fixed inset-0 z-0" style={{ x: backgroundX }}>
        <img src={natureHero} alt="" className="w-[130%] h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
      </motion.div>

      {/* Fixed progress */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
        {sections.map((_, i) => {
          const threshold = i / sections.length;
          return <NatureProgressDot key={i} progress={scrollYProgress} threshold={threshold} />;
        })}
      </div>

      <button className="back-button" onClick={onBack}>
        <ArrowLeft className="inline w-4 h-4 mr-1" /> Back
      </button>

      {/* Bicycle rider */}
      <motion.div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 text-4xl animate-bicycle-bob pointer-events-none">
        🚴
      </motion.div>

      {/* Sections */}
      {sections.map((section, i) => (
        <div key={section.id} className="world-section px-6 md:px-16">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="street-sign mb-6 text-nature-accent border-nature-accent/30">
              <section.icon className="inline w-5 h-5 mr-2" />
              {section.sign}
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-nature-accent">
              {section.title}
            </h2>

            <p className="text-muted-foreground font-body text-lg mb-8 leading-relaxed">
              {section.content}
            </p>

            <motion.button
              className="px-6 py-3 rounded-lg font-body font-medium border border-nature-accent/30 text-nature-accent hover:bg-nature-accent/10 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActivePanel(section.id)}
            >
              Explore →
            </motion.button>
          </motion.div>
        </div>
      ))}

      {/* Info Panel */}
      {activeSection && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setActivePanel(null)}
        >
          <motion.div
            className="info-panel max-w-lg w-full mx-4 border-nature-accent/30"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-display font-bold text-nature-accent">{activeSection.title}</h3>
              <button onClick={() => setActivePanel(null)} className="text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-muted-foreground font-body mb-6">{activeSection.content}</p>
            <ul className="space-y-3">
              {activeSection.details.map((d, i) => (
                <motion.li
                  key={i}
                  className="font-body text-sm text-foreground/80 pl-3 border-l-2 border-nature-accent/40"
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

function NatureProgressDot({ progress, threshold }: { progress: any; threshold: number }) {
  const opacity = useTransform(progress, [threshold - 0.05, threshold, threshold + 0.2], [0.3, 1, 0.3]);
  const scale = useTransform(progress, [threshold - 0.05, threshold, threshold + 0.2], [1, 1.5, 1]);

  return (
    <motion.div
      className="progress-dot"
      style={{ opacity, scale, background: "hsl(var(--nature-accent))" }}
    />
  );
}

export default PersonalWorld;
