import { motion } from "framer-motion";
import { X, Download } from "lucide-react";
import type { CaseStudy } from "./data";
import { generateCaseStudyPDF } from "./pdfGenerator";

interface CaseStudyModalProps {
  study: CaseStudy;
  onClose: () => void;
}

const CaseStudyModal = ({ study, onClose }: CaseStudyModalProps) => {
  const handleDownload = () => {
    generateCaseStudyPDF(study);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-background/70 backdrop-blur-md p-0 sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="w-full sm:w-[95%] md:w-[85%] lg:max-w-3xl max-h-[95vh] sm:max-h-[85vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl border border-border/20 relative"
        style={{
          background: "hsl(var(--card) / 0.95)",
          backdropFilter: "blur(40px)",
        }}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky top bar with close & download */}
        <div
          className="sticky top-0 z-10 flex items-center justify-end gap-2 p-3 sm:p-4"
          style={{
            background: "hsl(var(--card) / 0.9)",
            backdropFilter: "blur(12px)",
          }}
        >
          <motion.button
            className="p-2.5 rounded-full border border-border/30 text-muted-foreground hover:text-foreground transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            style={{ background: "hsl(var(--card) / 0.8)" }}
            onClick={handleDownload}
            whileHover={{ scale: 1.1, color: "hsl(var(--glow-gold))" }}
            whileTap={{ scale: 0.9 }}
            aria-label="Download case study PDF"
          >
            <Download className="w-4 h-4" />
          </motion.button>
          <motion.button
            className="p-2.5 rounded-full border border-border/30 text-muted-foreground hover:text-foreground transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            style={{ background: "hsl(var(--card) / 0.8)" }}
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Close case study"
          >
            <X className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Hero gradient */}
        <div className={`h-24 sm:h-32 bg-gradient-to-r ${study.gradient} relative`}>
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
          <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6">
            <span
              className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-body font-medium"
              style={{
                background: "hsl(var(--city-accent) / 0.2)",
                color: "hsl(var(--city-accent))",
                border: "1px solid hsl(var(--city-accent) / 0.3)",
              }}
            >
              {study.category}
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-6 md:p-8">
          <h3
            className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-4 sm:mb-6"
            style={{ color: "hsl(var(--glow-gold))" }}
          >
            {study.title}
          </h3>

          {/* Challenge */}
          <div className="mb-4 sm:mb-6">
            <h4 className="text-xs sm:text-sm font-display font-bold uppercase tracking-wider text-muted-foreground mb-2">
              The Challenge
            </h4>
            <p className="font-body text-sm sm:text-base text-foreground/80 leading-relaxed">
              {study.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="mb-4 sm:mb-6">
            <h4 className="text-xs sm:text-sm font-display font-bold uppercase tracking-wider text-muted-foreground mb-2">
              The Solution
            </h4>
            <p className="font-body text-sm sm:text-base text-foreground/80 leading-relaxed">
              {study.solution}
            </p>
          </div>

          {/* Results */}
          <div className="mb-4 sm:mb-6">
            <h4 className="text-xs sm:text-sm font-display font-bold uppercase tracking-wider text-muted-foreground mb-3">
              Key Results
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {study.results.map((result, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-2 p-2.5 sm:p-3 rounded-lg"
                  style={{ background: "hsl(var(--muted) / 0.3)" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                >
                  <span className="shrink-0" style={{ color: "hsl(var(--glow-gold))" }}>✦</span>
                  <span className="font-body text-xs sm:text-sm text-foreground/80">
                    {result}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Impact */}
          <motion.div
            className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl border"
            style={{
              borderColor: "hsl(var(--glow-gold) / 0.3)",
              background: "hsl(var(--glow-gold) / 0.05)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h4
              className="text-xs sm:text-sm font-display font-bold mb-1"
              style={{ color: "hsl(var(--glow-gold))" }}
            >
              Impact
            </h4>
            <p className="font-body text-sm sm:text-base text-foreground/80">{study.impact}</p>
          </motion.div>

          {/* Skills & Tech */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h4 className="text-xs sm:text-sm font-display font-bold uppercase tracking-wider text-muted-foreground mb-2 sm:mb-3">
                Skills Used
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {study.skillsUsed.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-body border"
                    style={{
                      borderColor: "hsl(var(--city-accent) / 0.3)",
                      color: "hsl(var(--city-accent))",
                      background: "hsl(var(--city-accent) / 0.1)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-display font-bold uppercase tracking-wider text-muted-foreground mb-2 sm:mb-3">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {study.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-body border"
                    style={{
                      borderColor: "hsl(var(--glow-purple) / 0.3)",
                      color: "hsl(var(--glow-purple))",
                      background: "hsl(var(--glow-purple) / 0.1)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CaseStudyModal;
