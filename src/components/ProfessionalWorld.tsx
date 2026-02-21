import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowLeft, Briefcase, Code2, FolderOpen, Cpu, X, FileText } from "lucide-react";
import cityHero from "@/assets/city-hero.jpg";

interface ProfessionalWorldProps {
  onBack: () => void;
  onResume?: () => void;
}

const sections = [
  {
    id: "about",
    sign: "About Street",
    icon: Briefcase,
    title: "The Vision",
    content: "Business Analyst with 4+ years of experience in healthcare operations, genetic screening analytics, and financial data analysis. Skilled in SQL, Python, Power BI, Bloomberg Terminal, HL7/FHIR, and regulatory compliance. Seeking opportunities in Healthcare IT, Business Analysis, or Data Analytics roles.",
    details: [
      "🎓 MBA in Marketing Analytics — Pace University, NYC (Jan 2023 – May 2025)",
      "🏗️ B.Tech in Civil Engineering — S R University, India",
      "🌐 McKinsey Forward Program Alumni — Structured thinking, digital transformation & stakeholder communication",
      "📊 4+ Years: Sales Operations Analyst → Business Analyst (Healthcare IT) → Graduate Assistant",
      "🏆 BCG Simulation (Forage) • EA Product Management Simulation • ML for Marketing Certification",
    ],
  },
  {
    id: "experience",
    sign: "Experience Avenue",
    icon: Code2,
    title: "Where I've Been",
    content: "Background spans healthcare IT compliance, genetic test data platforms, sales operations analytics, and financial data automation — with a consistent focus on turning complex datasets into actionable insights.",
    details: [
      "🏛️ Pace University (Graduate Assistant) — Processed 14+ ETF portfolios (387+ rows, 69+ cols) via Bloomberg, automated workflows with Python + VBA reducing manual processing by 40%+, extracted metrics across 150+ equity instruments",
      "🏥 Cardiocare Genetics (Business Analyst — Healthcare IT) — Reduced requirement rework by 42%, improved genetic test accuracy to 98%, 89% cardiologist adoption via HL7/FHIR, 56% faster clinical decisions with Power BI (6,000+ tests), 100% UAT pass rate, zero CAP/CLIA findings",
      "📈 Genething Healthyways (Sales Ops Analyst) — 27% quote-to-close improvement, $1.2M quarterly revenue increase, 91% forecast accuracy, 18% deal size increase, quota attainment 72%→90%, 55% fewer reporting discrepancies",
    ],
  },
  {
    id: "projects",
    sign: "Projects Boulevard",
    icon: FolderOpen,
    title: "What I've Built",
    content: "A portfolio of 6 impactful projects spanning healthcare platforms, financial automation, predictive analytics, sales optimization, and international research.",
    details: [
      "🏥 Cardiocare Genetics Platform — SQL validation, HL7/FHIR mapping, Power BI dashboards for 6,000+ cardiac tests, 85+ BRD/FRD requirements",
      "💰 Bloomberg ETF Analysis — Python + VBA automation for 14+ portfolios, 40%+ manual processing reduction",
      "🔬 Predictive Patient Risk Platform — PySpark, Scikit-learn, Snowflake ETL — 18% accuracy lift over baseline",
      "📈 Sales Pipeline Optimization — $1.2M revenue increase, 27% conversion improvement, 91% forecast accuracy",
      "🏥 Open EMR — Functional requirements & clinical workflows for simulated EMR system",
      "🌍 Oncology Imaging Analysis — PET/CT utilization across 5 Scandinavian countries, 8% efficiency variance identified",
    ],
  },
  {
    id: "skills",
    sign: "Skills Park",
    icon: Cpu,
    title: "The Toolkit",
    content: "A comprehensive stack spanning business analysis, data platforms, automation, analytics, and healthcare compliance systems.",
    details: [
      "📋 Business Analysis: BRDs, FRDs, UAT, RTM, Process Mapping, Gap Analysis, CAP/CLIA",
      "🗄️ Data Platforms: SQL (BigQuery, PostgreSQL) • Snowflake • Python (Pandas, NumPy) • Bloomberg Terminal • Excel (VBA)",
      "⚡ Automation: ETL Pipelines • PySpark • VBA Macros • HL7/FHIR API Integration",
      "📊 Analytics & BI: Power BI • DAX • Predictive Analytics • Salesforce CRM • Forecasting",
      "🏥 Healthcare: HL7/FHIR • LIMS • Epic/Cerner • CAP/CLIA • HIPAA • Genetic Test Data",
    ],
  },
];

const ProfessionalWorld = ({ onBack, onResume }: ProfessionalWorldProps) => {
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

      {/* Resume & Case Studies button */}
      {onResume && (
        <motion.button
          className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-body font-medium cursor-pointer"
          style={{
            background: "hsl(var(--card) / 0.7)",
            backdropFilter: "blur(10px)",
            border: "1px solid hsl(var(--glow-gold) / 0.3)",
            color: "hsl(var(--glow-gold))",
          }}
          onClick={onResume}
          whileHover={{ scale: 1.05, borderColor: "hsl(45 90% 60% / 0.6)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <FileText className="w-4 h-4" />
          Resume & Case Studies
        </motion.button>
      )}

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
