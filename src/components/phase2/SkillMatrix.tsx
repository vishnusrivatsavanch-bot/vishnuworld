import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { skillCategories } from "./data";

interface SkillMatrixProps {
  activeFilter: string | null;
  onFilterChange: (categoryId: string | null) => void;
}

const SkillMatrix = ({ activeFilter, onFilterChange }: SkillMatrixProps) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section className="py-10 sm:py-20 px-4 sm:px-6 md:px-16" id="skills">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-8 sm:mb-16">
          <div>
            <motion.h2
              className="text-xl sm:text-3xl md:text-5xl font-display font-bold mb-2 sm:mb-4"
              style={{ color: "hsl(var(--glow-gold))" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Skill Matrix
            </motion.h2>
            <motion.p
              className="text-muted-foreground font-body text-sm sm:text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Click a category to see connected case studies
            </motion.p>
          </div>
          <AnimatePresence>
            {activeFilter && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full font-body text-xs sm:text-sm border cursor-pointer min-h-[44px]"
                style={{
                  borderColor: "hsl(var(--glow-gold) / 0.4)",
                  color: "hsl(var(--glow-gold))",
                  background: "hsl(var(--glow-gold) / 0.1)",
                }}
                onClick={() => onFilterChange(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset Filters
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, catIndex) => {
            const isActive = activeFilter === category.id;
            const Icon = category.icon;

            return (
              <motion.div
                key={category.id}
                className="rounded-xl border p-4 sm:p-6 cursor-pointer transition-all duration-300"
                style={{
                  background: isActive
                    ? "hsl(var(--city-accent) / 0.12)"
                    : "hsl(var(--card) / 0.5)",
                  backdropFilter: "blur(20px)",
                  borderColor: isActive
                    ? "hsl(var(--city-accent) / 0.5)"
                    : "hsl(var(--border) / 0.2)",
                  boxShadow: isActive
                    ? "0 0 30px hsl(var(--city-accent) / 0.15)"
                    : "none",
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.08 }}
                whileHover={{ y: -6, borderColor: "hsl(var(--city-accent) / 0.4)" }}
                onClick={() =>
                  onFilterChange(isActive ? null : category.id)
                }
              >
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: isActive
                        ? "hsl(var(--city-accent) / 0.2)"
                        : "hsl(var(--primary) / 0.15)",
                    }}
                  >
                    <Icon
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      style={{
                        color: isActive
                          ? "hsl(var(--city-accent))"
                          : "hsl(var(--primary))",
                      }}
                    />
                  </div>
                  <div>
                    <h3
                      className="text-xs sm:text-sm font-display font-bold"
                      style={{
                        color: isActive
                          ? "hsl(var(--city-accent))"
                          : "hsl(var(--foreground))",
                      }}
                    >
                      {category.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-muted-foreground font-body mt-0.5">
                      {category.tooltip}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-2 py-0.5 sm:py-1 rounded text-[11px] sm:text-xs font-body transition-colors duration-200 relative"
                      style={{
                        background: "hsl(var(--muted) / 0.5)",
                        color: "hsl(var(--foreground) / 0.7)",
                      }}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      whileHover={{
                        background: "hsl(var(--glow-gold) / 0.15)",
                        color: "hsl(var(--glow-gold))",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-border/10">
                  <span className="text-[11px] sm:text-xs font-body text-muted-foreground">
                    {category.relatedCaseStudies.length} linked case{" "}
                    {category.relatedCaseStudies.length === 1 ? "study" : "studies"}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillMatrix;
