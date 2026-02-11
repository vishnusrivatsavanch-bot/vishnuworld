import { motion } from "framer-motion";
import ParticleField from "./ParticleField";

interface WelcomeScreenProps {
  onComplete: () => void;
}

const WelcomeScreen = ({ onComplete }: WelcomeScreenProps) => {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center z-50"
      style={{ background: "var(--dream-gradient)" }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <ParticleField count={60} />

      {/* Central glow orb */}
      <div className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(270 80% 65%), hsl(220 80% 60% / 0.3), transparent)" }}
      />

      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold dream-glow mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Welcome to
          <br />
          <span className="text-accent">Vishnu's</span> Dream World
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl font-body text-muted-foreground mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Choose Your Journey
        </motion.p>

        <motion.button
          className="px-8 py-3 rounded-full font-body font-medium text-accent-foreground bg-accent hover:bg-accent/90 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={onComplete}
        >
          Enter the Dream
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeScreen;
