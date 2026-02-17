import { Briefcase, Database, Workflow, ShieldCheck, BarChart3 } from "lucide-react";

export interface TimelineEntry {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  accomplishments: string[];
  skills: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: typeof Briefcase;
  tooltip: string;
  skills: string[];
  relatedCaseStudies: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  challenge: string;
  solution: string;
  results: string[];
  skillsUsed: string[];
  technologies: string[];
  impact: string;
  gradient: string;
}

export const timelineEntries: TimelineEntry[] = [
  {
    id: "pace",
    title: "Graduate Assistant",
    company: "Pace University",
    location: "New York, USA",
    period: "Jan 2024 – May 2024",
    accomplishments: [
      "Analyzed financial performance across 150+ equity instruments and multiple ETF portfolios using Bloomberg data within Excel",
      "Reduced financial data preparation time by automating data cleaning, validation, and transformation using Python and VBA",
      "Improved data accuracy and accessibility for 430+ faculty records with structured Excel databases",
      "Simplified data retrieval for non-technical stakeholders via VBA-based tools and conditional logic",
    ],
    skills: ["SQL", "Excel", "Python", "VBA", "Bloomberg Terminal", "Financial Analysis"],
  },
  {
    id: "cardiocare",
    title: "Product Analyst & Business Analyst",
    company: "Cardiocare Genetics",
    location: "Hyderabad, India",
    period: "Jun 2021 – Dec 2022",
    accomplishments: [
      "Improved customer retention by 12 percentage points (30% → 42%) by analyzing customer engagement patterns and identifying behaviors linked to long-term product usage that informed marketing and product adjustments",
      "Increased funnel conversion rates by approximately 35% by conducting step-by-step acquisition funnel analysis, identifying key drop-off points, and supporting landing page testing initiatives",
      "Reduced reporting turnaround time from multiple days to same-day analysis by building SQL-based reporting pipelines and Tableau dashboards that provided centralized KPI visibility for cross-functional teams",
      "Strengthened marketing efficiency through higher lifetime value tracking and improved campaign ROI by performing customer segmentation analysis that identified high-value user groups and informed budget allocation decisions",
      "Supported faster business decision-making through weekly KPI alignment across teams by partnering with Sales, Marketing, and Finance to standardize metric definitions and review performance insights",
    ],
    skills: ["SQL", "Tableau", "A/B Testing", "Customer Segmentation", "Cohort Analysis", "KPI Reporting", "Funnel Analysis", "CRM Analytics"],
  },
  {
    id: "genething",
    title: "Sales Operations Analyst",
    company: "Genething Healthyways",
    location: "Hyderabad, India",
    period: "May 2019 – May 2021",
    accomplishments: [
      "Raised signup conversion by about 18% by analyzing onboarding journey data, identifying abandonment points, and supporting design improvements during account creation",
      "Improved retention visibility across leadership through tracking early engagement behaviors linked to 3x stronger retention by developing Tableau dashboards focused on customer activity patterns",
      "Enhanced sales pipeline accuracy by maintaining 50,000+ CRM records by improving data quality practices and standardizing data entry and segmentation processes",
      "Enabled more targeted outreach and performance tracking through consistent KPI reporting by preparing recurring sales and marketing analytics used in weekly strategic reviews",
      "Aligned cross-functional reporting through shared metric definitions and consistent dashboards by collaborating with Sales, Marketing, Product, and Finance stakeholders",
    ],
    skills: ["CRM Analytics", "HubSpot", "Tableau", "Pipeline Tracking", "Data Quality", "Sales Operations"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "crm-sales-ops",
    name: "CRM & Sales Operations",
    icon: Briefcase,
    tooltip: "Pipeline tracking, lead analysis, and KPI reporting",
    skills: [
      "HubSpot CRM",
      "Salesforce (basic exposure)",
      "Pipeline Tracking & Lead Analysis",
      "KPI Reporting & Dashboarding",
      "Conversion & Retention Analysis",
      "Forecast Support",
    ],
    relatedCaseStudies: ["funnel-analysis", "etl-crm"],
  },
  {
    id: "data-financial",
    name: "Data & Financial Analysis",
    icon: Database,
    tooltip: "SQL, Python, Bloomberg, and advanced Excel",
    skills: [
      "SQL (BigQuery, PostgreSQL — complex queries, joins)",
      "Python (data cleaning & transformation)",
      "Bloomberg Terminal",
      "Excel (Pivot Tables, INDEX-MATCH, VBA)",
      "ETF & Equity Dataset Analysis",
      "Financial Reporting & Validation",
    ],
    relatedCaseStudies: ["financial-recon", "etf-analysis", "patient-risk"],
  },
  {
    id: "visualization",
    name: "Visualization & Reporting",
    icon: BarChart3,
    tooltip: "Tableau, GA4, and dashboard development",
    skills: [
      "Tableau Dashboard Development",
      "Google Analytics 4",
      "Business Reporting & Storytelling",
      "Executive-Style Summaries",
      "Data Visualization Best Practices",
    ],
    relatedCaseStudies: ["etl-crm", "funnel-analysis", "patient-risk"],
  },
  {
    id: "analytics-methods",
    name: "Analytics Methods",
    icon: Workflow,
    tooltip: "A/B testing, segmentation, and cohort tracking",
    skills: [
      "A/B Testing Support",
      "Customer Segmentation",
      "CAC/LTV Analysis",
      "Trend Analysis & Forecasting",
      "Cohort Tracking",
      "Funnel Performance Analysis",
    ],
    relatedCaseStudies: ["funnel-analysis", "etl-crm", "patient-risk"],
  },
  {
    id: "product-customer",
    name: "Product & Customer Analytics",
    icon: ShieldCheck,
    tooltip: "Customer journey, funnel, and product performance",
    skills: [
      "Customer Journey Analysis",
      "Funnel Performance Tracking",
      "Product Performance Tracking",
      "Experiment Analysis",
      "Cohort & Segmentation Analysis",
    ],
    relatedCaseStudies: ["funnel-analysis", "etl-crm", "patient-risk"],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "funnel-analysis",
    title: "Customer Retention & Funnel Optimization — Healthcare D2C",
    category: "Product & Sales Analytics",
    challenge:
      "Cardiocare Genetics faced low customer retention (30%) and significant drop-offs in the acquisition funnel, limiting growth in a competitive D2C healthcare market.",
    solution:
      "Analyzed customer engagement patterns to identify behaviors linked to long-term usage. Conducted step-by-step funnel analysis, identified key drop-off points, and supported landing page A/B testing. Built SQL-based reporting pipelines and Tableau dashboards for centralized KPI visibility.",
    results: [
      "Improved customer retention by 12 percentage points (30% → 42%)",
      "Increased funnel conversion rates by approximately 35%",
      "Reduced reporting turnaround from multiple days to same-day analysis",
      "Higher lifetime value tracking and improved campaign ROI",
    ],
    skillsUsed: ["SQL", "Tableau", "A/B Testing", "Customer Segmentation", "Funnel Analysis", "KPI Reporting"],
    technologies: ["SQL", "Tableau", "Google Analytics"],
    impact: "Significant revenue uplift through improved retention and conversion",
    gradient: "from-blue-600/20 via-cyan-500/10 to-transparent",
  },
  {
    id: "etl-crm",
    title: "Sales Operations & CRM Pipeline Optimization",
    category: "Sales Operations",
    challenge:
      "Genething Healthyways had inconsistent CRM data across 50,000+ records, manual reporting processes, and lack of visibility into sales pipeline health and onboarding conversion.",
    solution:
      "Improved data quality practices, standardized data entry and segmentation. Built Tableau dashboards tracking customer activity patterns and early engagement behaviors. Prepared recurring sales and marketing analytics for weekly strategic reviews.",
    results: [
      "Raised signup conversion by ~18% through onboarding journey optimization",
      "Identified engagement behaviors linked to 3x stronger retention",
      "Enhanced pipeline accuracy across 50,000+ CRM records",
      "Aligned cross-functional reporting through shared metric definitions",
    ],
    skillsUsed: ["HubSpot CRM", "Tableau", "Data Quality", "Pipeline Analysis", "Sales Operations"],
    technologies: ["HubSpot", "Tableau", "Excel"],
    impact: "Improved sales efficiency and cross-functional alignment",
    gradient: "from-emerald-600/20 via-teal-500/10 to-transparent",
  },
  {
    id: "financial-recon",
    title: "Financial Data Analysis & Automation — Graduate Assistant",
    category: "Finance & Analytics",
    challenge:
      "Pace University needed analysis across 150+ equity instruments and multiple ETF portfolios, with manual data preparation consuming significant analyst time. 430+ faculty records required improved accuracy.",
    solution:
      "Extracted and organized Bloomberg data within Excel for comparative evaluation. Automated data cleaning, validation, and transformation using Python and VBA. Built structured Excel databases with advanced lookup and validation formulas.",
    results: [
      "Analyzed 150+ equity instruments and multiple ETF portfolios",
      "Reduced financial data preparation time through Python/VBA automation",
      "Improved data accuracy for 430+ faculty records",
      "Simplified data retrieval for non-technical stakeholders via VBA tools",
    ],
    skillsUsed: ["Python", "VBA", "Excel", "Bloomberg Terminal", "Financial Analysis", "Data Validation"],
    technologies: ["Bloomberg Terminal", "Excel", "Python"],
    impact: "Significant time savings and improved data accuracy",
    gradient: "from-amber-600/20 via-yellow-500/10 to-transparent",
  },
  {
    id: "patient-risk",
    title: "Predictive Patient Risk Stratification Platform",
    category: "Advanced Analytics",
    challenge:
      "Healthcare organization needed to identify high-risk patients early for intervention. Existing risk flagging was reactive and lacked predictive power.",
    solution:
      "Designed production-ready ETL pipeline, engineered behavioral/utilization-based features using PySpark, trained predictive models (logistic regression + ensemble), visualized outputs in executive-ready BI dashboards.",
    results: [
      "Improved risk identification accuracy by 18% lift over baseline",
      "Enabled risk-tier monitoring via BI dashboards with trend indicators",
      "Designed compliant, production-ready ETL pipeline for large-scale datasets",
    ],
    skillsUsed: ["PySpark", "Scikit-learn", "SQL", "Snowflake", "Power BI", "Predictive Modeling"],
    technologies: ["PySpark", "Scikit-learn", "Snowflake", "SQL", "Power BI"],
    impact: "Enabled proactive patient care and reduced manual risk assessment",
    gradient: "from-purple-600/20 via-violet-500/10 to-transparent",
  },
  {
    id: "etf-analysis",
    title: "Marketing Finance & ETF Performance Analysis",
    category: "Finance & Data Analytics",
    challenge:
      "Understanding ETF cost-efficiency and performance requires analyzing expense ratios, tracking error, volatility, and benchmark variance. Manual analysis was time-consuming.",
    solution:
      "Leveraged Bloomberg data, built Excel financial models incorporating pricing history, indices, and macro indicators. Conducted comparative analysis across ETFs and translated findings into executive-style summaries.",
    results: [
      "Improved investment and valuation interpretation accuracy by 36.2%",
      "Identified 14.7% cost-efficiency differences across comparable ETFs",
      "Built reusable Excel-based financial and market models",
      "Delivered executive-style summaries strengthening client communication",
    ],
    skillsUsed: ["Excel", "Financial Analysis", "Bloomberg Terminal", "Data Modeling", "Business Communication"],
    technologies: ["Bloomberg Terminal", "Excel"],
    impact: "Supported investment decision-making and cost optimization",
    gradient: "from-rose-600/20 via-pink-500/10 to-transparent",
  },
];
