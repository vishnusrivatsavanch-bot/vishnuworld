import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, Download, FileText, Check } from "lucide-react";
import ParticleField from "@/components/ParticleField";
import ProfessionalTimeline from "./ProfessionalTimeline";
import SkillMatrix from "./SkillMatrix";
import CaseStudies from "./CaseStudies";
import { generateResumePDF } from "./pdfGenerator";

interface ResumePageProps {
  onBack: () => void;
}

const ResumePage = ({ onBack }: ResumePageProps) => {
  const [skillFilter, setSkillFilter] = useState<string | null>(null);
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadResume = async () => {
    setDownloading(true);
    await new Promise((r) => setTimeout(r, 600));
    generateResumePDF();
    setDownloading(false);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000);
  };

  return (
    <motion.div
      className="relative min-h-screen"
      style={{ background: "hsl(var(--background))" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Ambient background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleField count={35} />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, hsl(var(--glow-purple) / 0.15), transparent 60%), radial-gradient(ellipse at 80% 30%, hsl(var(--glow-blue) / 0.1), transparent 50%)",
          }}
        />
      </div>

      {/* Fixed Header - mobile-first, responsive */}
      <div
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 h-14 sm:h-16"
        style={{
          background: "hsl(var(--background) / 0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid hsl(var(--border) / 0.15)",
        }}
      >
        <button
          className="flex items-center gap-1 text-sm font-body text-muted-foreground hover:text-foreground transition-colors min-h-[44px] min-w-[44px] justify-center sm:justify-start"
          onClick={onBack}
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Back</span>
        </button>

        <h2 className="text-sm sm:text-base font-display font-bold truncate px-2" style={{ color: "hsl(var(--foreground) / 0.8)" }}>
          Resume & Case Studies
        </h2>

        <motion.button
          className="flex items-center gap-2 px-3 sm:px-5 py-2 rounded-full font-body font-medium text-xs sm:text-sm border cursor-pointer min-h-[44px] min-w-[44px] justify-center"
          style={{
            background: downloaded
              ? "hsl(var(--glow-gold) / 0.2)"
              : "hsl(var(--card) / 0.7)",
            backdropFilter: "blur(10px)",
            borderColor: downloaded
              ? "hsl(var(--glow-gold) / 0.5)"
              : "hsl(var(--border) / 0.3)",
            color: downloaded
              ? "hsl(var(--glow-gold))"
              : "hsl(var(--foreground))",
          }}
          onClick={handleDownloadResume}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={downloading}
        >
          {downloading ? (
            <motion.div
              className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
            />
          ) : downloaded ? (
            <>
              <Check className="w-4 h-4" />
              <span className="hidden sm:inline">Downloaded</span>
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Resume</span>
            </>
          )}
        </motion.button>
      </div>

      {/* Hero */}
      <div className="relative z-10 pt-20 sm:pt-28 pb-6 sm:pb-10 px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6"
            style={{
              background: "hsl(var(--city-accent) / 0.1)",
              border: "1px solid hsl(var(--city-accent) / 0.2)",
            }}
          >
            <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: "hsl(var(--city-accent))" }} />
            <span className="font-body text-xs sm:text-sm" style={{ color: "hsl(var(--city-accent))" }}>
              Phase 2 — Interactive Resume
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold dream-glow mb-3 sm:mb-4">
            The <span style={{ color: "hsl(var(--glow-gold))" }}>Professional</span> Journey
          </h1>

          <p className="text-muted-foreground font-body text-sm sm:text-lg max-w-2xl mx-auto">
            4+ years of driving automation, analytics, and business impact across healthcare and finance
          </p>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="relative z-10">
        <ProfessionalTimeline />

        <div
          className="w-full h-px my-4"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(var(--glow-gold) / 0.3), transparent)",
          }}
        />

        <SkillMatrix activeFilter={skillFilter} onFilterChange={setSkillFilter} />

        <div
          className="w-full h-px my-4"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(var(--city-accent) / 0.3), transparent)",
          }}
        />

        <CaseStudies activeFilter={skillFilter} />
      </div>

      {/* Footer */}
      <div className="relative z-10 py-8 sm:py-12 text-center">
        <p className="text-muted-foreground font-body text-xs sm:text-sm">
          Vishnu's Dream World — Phase 2
        </p>
      </div>
    </motion.div>
  );
};

export default ResumePage;
