import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { caseStudies, skillCategories } from "./data";
import CaseStudyModal from "./CaseStudyModal";
import type { CaseStudy } from "./data";

interface CaseStudiesProps {
  activeFilter: string | null;
}

const CaseStudies = ({ activeFilter }: CaseStudiesProps) => {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const filteredStudies = activeFilter
    ? caseStudies.filter((cs) => {
        const category = skillCategories.find((sc) => sc.id === activeFilter);
        return category?.relatedCaseStudies.includes(cs.id);
      })
    : caseStudies;

  return (
    <section className="py-10 sm:py-20 px-4 sm:px-6 md:px-16" id="case-studies">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-xl sm:text-3xl md:text-5xl font-display font-bold mb-2 sm:mb-4 text-center"
          style={{ color: "hsl(var(--glow-gold))" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Case Studies
        </motion.h2>
        <motion.p
          className="text-muted-foreground font-body text-center mb-8 sm:mb-16 text-sm sm:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Deep dives into impactful projects
          {activeFilter && (
            <span style={{ color: "hsl(var(--city-accent))" }}>
              {" "}— filtered by skill category
            </span>
          )}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                layout
                className="rounded-xl border border-border/20 overflow-hidden cursor-pointer group"
                style={{
                  background: "hsl(var(--card) / 0.5)",
                  backdropFilter: "blur(20px)",
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 60px hsl(var(--city-accent) / 0.15)",
                  borderColor: "hsl(var(--city-accent) / 0.4)",
                }}
                onClick={() => setSelectedStudy(study)}
              >
                {/* Gradient hero */}
                <div className={`h-24 sm:h-28 bg-gradient-to-r ${study.gradient} relative`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <span
                    className="absolute bottom-2 sm:bottom-3 left-3 sm:left-4 px-2 sm:px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-body font-medium"
                    style={{
                      background: "hsl(var(--card) / 0.8)",
                      color: "hsl(var(--city-accent))",
                      border: "1px solid hsl(var(--city-accent) / 0.3)",
                    }}
                  >
                    {study.category}
                  </span>
                </div>

                <div className="p-4 sm:p-5">
                  <h3
                    className="text-sm sm:text-base font-display font-bold mb-1.5 sm:mb-2 line-clamp-2"
                    style={{ color: "hsl(var(--glow-gold))" }}
                  >
                    {study.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-2">
                    {study.challenge}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {study.technologies.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs font-body"
                          style={{
                            background: "hsl(var(--muted) / 0.5)",
                            color: "hsl(var(--foreground) / 0.6)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 2 && (
                        <span
                          className="px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs font-body"
                          style={{
                            background: "hsl(var(--muted) / 0.5)",
                            color: "hsl(var(--foreground) / 0.6)",
                          }}
                        >
                          +{study.technologies.length - 2}
                        </span>
                      )}
                    </div>

                    <motion.div
                      className="text-muted-foreground group-hover:text-city-accent transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                      whileHover={{ x: 4 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedStudy && (
          <CaseStudyModal
            study={selectedStudy}
            onClose={() => setSelectedStudy(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default CaseStudies;
