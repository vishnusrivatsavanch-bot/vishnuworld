import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MapPin, Calendar, ChevronDown } from "lucide-react";
import { timelineEntries } from "./data";

const ProfessionalTimeline = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="py-10 sm:py-20 px-4 sm:px-6 md:px-16" id="timeline">
      <motion.div
        className="max-w-4xl mx-auto"
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
          Career Journey
        </motion.h2>
        <motion.p
          className="text-muted-foreground font-body text-center mb-8 sm:mb-16 text-sm sm:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          4+ years of driving automation, analytics, and business impact
        </motion.p>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-glow-gold/40 to-transparent md:-translate-x-px" />

          {timelineEntries.map((entry, index) => {
            const isExpanded = expandedId === entry.id;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={entry.id}
                className={`relative flex items-start mb-10 sm:mb-16 last:mb-0 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline node */}
                <motion.div
                  className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 cursor-pointer"
                  style={{
                    borderColor: "hsl(var(--glow-gold))",
                    background: isExpanded
                      ? "hsl(var(--glow-gold))"
                      : "hsl(var(--background))",
                  }}
                  whileHover={{
                    scale: 1.8,
                    boxShadow: "0 0 20px hsl(45 90% 60% / 0.6)",
                  }}
                  animate={
                    isExpanded
                      ? { scale: 1.4, boxShadow: "0 0 25px hsl(45 90% 60% / 0.5)" }
                      : {}
                  }
                />

                {/* Content card */}
                <div
                  className={`ml-10 sm:ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isEven ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <motion.div
                    className="rounded-xl border border-border/20 p-4 sm:p-6 cursor-pointer group"
                    style={{
                      background: "hsl(var(--card) / 0.6)",
                      backdropFilter: "blur(20px)",
                    }}
                    onClick={() =>
                      setExpandedId(isExpanded ? null : entry.id)
                    }
                    whileHover={{
                      y: -4,
                      borderColor: "hsl(45 90% 60% / 0.4)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start justify-between mb-2 sm:mb-3">
                      <div className="flex items-center gap-1.5 sm:gap-2 text-xs font-body text-muted-foreground">
                        <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        {entry.period}
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="min-w-[44px] min-h-[44px] flex items-center justify-center -mr-2 -mt-2"
                      >
                        <ChevronDown className="w-4 h-4 text-muted-foreground" />
                      </motion.div>
                    </div>

                    <h3
                      className="text-base sm:text-lg font-display font-bold mb-1"
                      style={{ color: "hsl(var(--glow-gold))" }}
                    >
                      {entry.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-body text-muted-foreground mb-3 sm:mb-4">
                      <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                      <span className="truncate">{entry.company}, {entry.location}</span>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 sm:pt-4 border-t border-border/20">
                            <p className="text-xs font-display font-bold uppercase tracking-wider text-muted-foreground mb-2 sm:mb-3">
                              Key Accomplishments
                            </p>
                            <ul className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-5">
                              {entry.accomplishments.map((a, i) => (
                                <motion.li
                                  key={i}
                                  className="font-body text-xs sm:text-sm text-foreground/80 pl-3 border-l-2"
                                  style={{
                                    borderColor: "hsl(var(--glow-gold) / 0.4)",
                                  }}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.08 }}
                                >
                                  {a}
                                </motion.li>
                              ))}
                            </ul>

                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                              {entry.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-body font-medium border"
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
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default ProfessionalTimeline;
