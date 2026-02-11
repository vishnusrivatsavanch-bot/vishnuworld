import { motion } from "framer-motion";
import ParticleField from "./ParticleField";
import cityHero from "@/assets/city-hero.jpg";
import natureHero from "@/assets/nature-hero.jpg";
import { Building2, Trees } from "lucide-react";

interface PathSelectionProps {
  onSelect: (path: "professional" | "personal") => void;
}

const PathSelection = ({ onSelect }: PathSelectionProps) => {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center z-40 px-4"
      style={{ background: "var(--dream-gradient)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <ParticleField count={30} />

      <motion.h2
        className="text-3xl md:text-5xl font-display font-bold dream-glow mb-4 text-center relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Choose Your Path
      </motion.h2>

      <motion.p
        className="text-muted-foreground font-body mb-12 text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Two worlds, one journey. Where will you go?
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full relative z-10">
        {/* Professional Portal */}
        <motion.div
          className="portal-card portal-city group"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onClick={() => onSelect("professional")}
        >
          <div className="relative h-48 md:h-56 rounded-xl overflow-hidden mb-6">
            <img src={cityHero} alt="NYC Cityscape" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
            <Building2 className="absolute bottom-4 left-4 w-8 h-8 text-city-accent" />
          </div>
          <h3 className="text-2xl font-display font-bold text-city-accent mb-2">Professional</h3>
          <p className="text-muted-foreground font-body text-sm">
            Explore the city streets — experience, projects, and skills await around every corner.
          </p>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-city-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>

        {/* Personal Portal */}
        <motion.div
          className="portal-card portal-nature group"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={() => onSelect("personal")}
        >
          <div className="relative h-48 md:h-56 rounded-xl overflow-hidden mb-6">
            <img src={natureHero} alt="Nature Landscape" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
            <Trees className="absolute bottom-4 left-4 w-8 h-8 text-nature-accent" />
          </div>
          <h3 className="text-2xl font-display font-bold text-nature-accent mb-2">Personal</h3>
          <p className="text-muted-foreground font-body text-sm">
            Wander through valleys and peaks — fitness, travel, interests, and dreams.
          </p>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-nature-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PathSelection;
