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
    title: "Graduate Assistant — Financial & Risk Analytics",
    company: "Pace University",
    location: "New York, USA",
    period: "Jan 2024 – May 2024",
    accomplishments: [
      "Improved financial reporting accuracy by 33.4% with GL-aligned reconciliation",
      "Reduced reporting turnaround time by 67% via ETL automation (Excel & SQL)",
      "Saved 20+ analyst hours monthly through balance sheet reconciliation automation",
      "Increased forecast accuracy by 27% with Excel-based financial models",
      "Enhanced end-user understanding by 31% through clear documentation",
    ],
    skills: ["SQL", "Excel", "Financial Analysis", "Data Reconciliation", "Stakeholder Communication"],
  },
  {
    id: "cardiocare",
    title: "Business Analyst — Healthcare IT (Risk & Compliance)",
    company: "Cardiocare Genetics",
    location: "Hyderabad, India",
    period: "Jun 2021 – Dec 2022",
    accomplishments: [
      "Partnered with clinical ops, billing, and engineering teams for workflow automation",
      "Translated business requirements into functional specifications and SQL logic",
      "Improved KPI consistency by reconciling EHR and LIMS data via SQL workflows",
      "Prevented 40+ production defects through rigorous UAT and edge-case validation",
      "Increased billing accuracy by 19% by automating reconciliation checks",
      "Supported change adoption through stakeholder walkthroughs",
    ],
    skills: ["Business Process Analysis", "Healthcare IT", "SQL Automation", "Power BI", "UAT", "Requirements Translation"],
  },
  {
    id: "genething",
    title: "Data Analyst — Analytics & Portfolio Reporting",
    company: "Genething Healthyways",
    location: "Hyderabad, India",
    period: "May 2019 – May 2021",
    accomplishments: [
      "Mapped manual CRM/operations workflows into automated ETL pipelines",
      "Increased program participation by 33% with automated KPI dashboards",
      "Reduced reporting rework by 30% through standardized definitions",
      "Enabled self-service analytics by converting requests to reusable assets",
    ],
    skills: ["ETL", "CRM Analysis", "Dashboard Design (Power BI)", "Stakeholder Management"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "business-analysis",
    name: "Business Analysis & Process Design",
    icon: Briefcase,
    tooltip: "Process optimization and stakeholder alignment",
    skills: [
      "Business Process Analysis",
      "Stakeholder Management & Communication",
      "Requirements Definition & Documentation",
      "AS-IS/TO-BE Process Mapping",
      "Functional Specifications & Acceptance Criteria",
      "UAT Planning & User Adoption Support",
      "Change Management & User Enablement",
    ],
    relatedCaseStudies: ["healthcare-it", "etl-crm", "patient-risk"],
  },
  {
    id: "data-platforms",
    name: "Data Platforms & Infrastructure",
    icon: Database,
    tooltip: "Modern data tools and cloud platforms",
    skills: [
      "SQL Server & Advanced SQL (CTEs, Window Functions)",
      "Snowflake Data Warehouse",
      "Azure Databricks",
      "AWS Cloud Services",
      "Python (Pandas, NumPy, PySpark)",
      "Data Modeling & Schema Design",
      "Cloud Architecture & Scalability",
    ],
    relatedCaseStudies: ["healthcare-it", "etl-crm", "financial-recon", "patient-risk", "etf-analysis"],
  },
  {
    id: "data-engineering",
    name: "Data Engineering & Automation",
    icon: Workflow,
    tooltip: "Automated workflows and data pipelines",
    skills: [
      "ETL Pipeline Design & Development",
      "SQL-Based Automation & Scheduled Jobs",
      "Python-Based Automation (Pandas, PySpark)",
      "Rule-Based Logic & Exception Handling",
      "API & System Integration Design",
      "Automation ROI Assessment & Optimization",
    ],
    relatedCaseStudies: ["healthcare-it", "etl-crm", "financial-recon", "patient-risk"],
  },
  {
    id: "analytics-bi",
    name: "Analytics & Business Intelligence",
    icon: BarChart3,
    tooltip: "Data-driven insights and visualization",
    skills: [
      "Power BI Development & Dashboard Design",
      "DAX (Data Analysis Expressions)",
      "KPI Tracking & Operational Reporting",
      "Predictive Analytics & Forecasting",
      "Data Visualization & Story Telling",
      "Business Intelligence Strategy & Governance",
    ],
    relatedCaseStudies: ["etl-crm", "financial-recon", "patient-risk", "etf-analysis"],
  },
  {
    id: "quality-compliance",
    name: "Data Quality, Testing & Compliance",
    icon: ShieldCheck,
    tooltip: "Data accuracy and regulatory compliance",
    skills: [
      "Test Case Development & Execution",
      "Data Validation & Reconciliation Testing",
      "Defect Tracking & Resolution",
      "Healthcare Compliance (HIPAA, Privacy, SOC 2)",
      "Data Governance & Quality Assurance",
      "Production Support & Monitoring",
    ],
    relatedCaseStudies: ["healthcare-it", "etl-crm", "patient-risk"],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "healthcare-it",
    title: "Healthcare IT Automation — Risk & Compliance Reporting",
    category: "Healthcare IT",
    challenge:
      "Manual healthcare workflows causing data inconsistencies across clinical operations, billing, and compliance teams. EHR and LIMS data were siloed.",
    solution:
      "Designed automated SQL workflows to reconcile EHR/LIMS data, created Power BI dashboards for KPI monitoring, built UAT protocols to validate edge cases.",
    results: [
      "Improved KPI consistency across departments (100% alignment)",
      "Prevented 40+ production defects before release",
      "Increased billing accuracy by 19%",
      "Reduced manual data reconciliation time by 8+ hours/week",
    ],
    skillsUsed: ["SQL", "Power BI", "Business Process Analysis", "UAT", "Healthcare IT", "Stakeholder Coordination"],
    technologies: ["SQL Server", "Power BI", "Healthcare Systems (EHR/LIMS)"],
    impact: "$500K+ in prevented errors, improved compliance posture",
    gradient: "from-blue-600/20 via-cyan-500/10 to-transparent",
  },
  {
    id: "etl-crm",
    title: "ETL-Driven Reporting Pipeline — CRM Automation",
    category: "Data & Analytics",
    challenge:
      "Genething Healthyways had recurring, manual reporting requests from Sales, Operations, and Marketing teams. Each request took 2-3 days to fulfill.",
    solution:
      "Mapped end-to-end business processes, identified common reporting patterns, designed and deployed automated ETL-driven dashboards in Power BI.",
    results: [
      "Enabled self-service analytics (30+ stakeholders using dashboards)",
      "Reduced reporting rework by 30% through standardized definitions",
      "Increased program participation visibility by 33%",
      "Reduced reporting turnaround from 2-3 days to <2 hours",
    ],
    skillsUsed: ["ETL", "Business Analysis", "Power BI", "Data Modeling", "SQL"],
    technologies: ["ETL Pipelines", "Power BI", "CRM Systems"],
    impact: "300+ analyst hours saved annually, faster decision-making",
    gradient: "from-emerald-600/20 via-teal-500/10 to-transparent",
  },
  {
    id: "financial-recon",
    title: "Financial Reconciliation Automation — Graduate Analytics Project",
    category: "Finance & Analytics",
    challenge:
      "Pace University finance team spent 20+ hours/month on manual balance sheet reconciliations and financial variance analysis. Reports were error-prone.",
    solution:
      "Built Excel-based financial models with GL-aligned reconciliation logic, automated variance analysis using SQL and Python (Pandas), implemented validation controls.",
    results: [
      "Improved reporting accuracy by 33.4%",
      "Reduced turnaround time for close-support by 67%",
      "Saved 20+ analyst hours per month",
      "Increased forecast accuracy by 27%",
      "Enhanced stakeholder understanding by 31%",
    ],
    skillsUsed: ["SQL", "Excel", "Python", "Financial Analysis", "Data Validation", "Stakeholder Communication"],
    technologies: ["Excel", "SQL", "Python Pandas"],
    impact: "240+ hours saved annually, improved financial controls",
    gradient: "from-amber-600/20 via-yellow-500/10 to-transparent",
  },
  {
    id: "patient-risk",
    title: "Patient Risk Stratification Platform — End-to-End ML Project",
    category: "Advanced Analytics",
    challenge:
      "Healthcare organization needed to identify high-risk patients early for intervention. Existing risk flagging was reactive and lacked predictive power.",
    solution:
      "Designed production-ready ETL pipeline, engineered behavioral/utilization-based features using PySpark, trained predictive models (logistic regression + ensemble), deployed in Power BI dashboards.",
    results: [
      "Improved risk identification accuracy by 18% lift over baseline",
      "Enabled real-time risk tier monitoring for 10,000+ patients",
      "Reduced manual risk assessment overhead by 90%",
      "Supported proactive clinical interventions",
    ],
    skillsUsed: ["PySpark", "Python (Scikit-learn)", "SQL", "Snowflake", "Power BI", "Predictive Modeling"],
    technologies: ["PySpark", "Scikit-learn", "Snowflake", "Power BI"],
    impact: "Enabled proactive patient care, reduced hospital readmissions",
    gradient: "from-purple-600/20 via-violet-500/10 to-transparent",
  },
  {
    id: "etf-analysis",
    title: "ETF Performance & Financial Valuation Analysis — MBA Project",
    category: "Finance & Data Analytics",
    challenge:
      "Understanding ETF cost-efficiency and performance requires analyzing expense ratios, tracking error, volatility, and benchmark variance. Manual analysis was time-consuming.",
    solution:
      "Leveraged Bloomberg data, built Excel financial models incorporating pricing history, indices, and macro indicators. Conducted comparative analysis across 15+ ETFs.",
    results: [
      "Identified 14.7% cost-efficiency differences across comparable ETFs",
      "Improved investment interpretation accuracy by 36.2%",
      "Created reusable financial model framework",
      "Delivered executive-style summaries for decision-making",
    ],
    skillsUsed: ["Excel", "Financial Analysis", "Data Modeling", "Bloomberg", "Business Acumen"],
    technologies: ["Bloomberg Terminal", "Excel", "Market Data"],
    impact: "Supported investment decision-making, cost optimization",
    gradient: "from-rose-600/20 via-pink-500/10 to-transparent",
  },
];
