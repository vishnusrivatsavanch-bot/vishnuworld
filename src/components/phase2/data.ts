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
      "Processed 14+ ETF portfolios (387+ rows, 69+ columns) using Bloomberg Terminal",
      "Developed automated workflows (Python scripts + VBA macros) reducing manual processing by 40%+",
      "Extracted key performance metrics across 150+ equity instruments",
      "Executed complex equity analysis across diverse ETF categories",
      "Organized 10-fund groupings with systematic tagging for comparative analysis",
    ],
    skills: ["Bloomberg Terminal", "Python", "VBA", "Excel", "Financial Analysis", "Data Cleaning"],
  },
  {
    id: "cardiocare",
    title: "Business Analyst — Healthcare IT (Risk & Compliance)",
    company: "Cardiocare Genetics",
    location: "Hyderabad, India",
    period: "Jun 2021 – Dec 2022",
    accomplishments: [
      "Reduced requirement rework by 42% by documenting 85+ requirements in BRDs/FRDs",
      "Improved genetic test data accuracy to 98% with SQL validation",
      "Increased cardiologist adoption of risk reports to 89% via HL7/FHIR mapping",
      "Reduced time-to-clinical-decision by 56% with Power BI dashboards (6,000+ cardiac tests)",
      "Achieved 100% UAT pass rate (150+ test scenarios) with zero CAP/CLIA audit findings",
      "Improved cross-functional delivery timelines by 35% with process mapping & Jira coordination",
    ],
    skills: ["SQL", "Power BI", "DAX", "HL7/FHIR", "BRD/FRD", "UAT", "CAP/CLIA", "LIMS", "Epic/Cerner", "Jira", "Confluence"],
  },
  {
    id: "genething",
    title: "Sales Operations Analyst — Analytics & Portfolio Reporting",
    company: "Genething Healthyways",
    location: "Hyderabad, India",
    period: "May 2019 – May 2021",
    accomplishments: [
      "Improved quote-to-close conversion by 27% and increased quarterly revenue by $1.2M",
      "Built Excel and Power BI dashboards for pipeline visibility and conversion tracking",
      "Achieved 91% forecast accuracy using SQL aggregations and Excel regression models",
      "Increased average deal size by 18% through margin analysis and discount restructuring",
      "Improved quota attainment from 72% to 90% with market segmentation",
      "Reduced reporting discrepancies by 55% via Salesforce data standardization",
    ],
    skills: ["SQL", "CRM Analysis (Salesforce)", "Power BI", "Excel", "Sales Analytics", "Forecasting"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "ba-documentation",
    name: "Business Analysis & Documentation",
    icon: Briefcase,
    tooltip: "BRDs, FRDs, UAT, stakeholder workshops & compliance",
    skills: [
      "Business Requirements Documents (BRDs)",
      "Functional Requirements Documents (FRDs)",
      "User Stories & Acceptance Criteria",
      "Requirement Traceability Matrix (RTM)",
      "Process Flow Diagrams & Mapping",
      "UAT Planning & Execution",
      "Stakeholder Workshops & Interviews",
      "Gap Analysis",
      "Regulatory Documentation (CAP/CLIA)",
    ],
    relatedCaseStudies: ["cardiocare", "open-emr", "patient-risk"],
  },
  {
    id: "data-platforms",
    name: "Data Platforms & Infrastructure",
    icon: Database,
    tooltip: "SQL, Snowflake, Bloomberg, Python & Excel",
    skills: [
      "SQL (Joins, Aggregations, Validation, Reconciliation)",
      "Snowflake Data Warehouse",
      "Azure Databricks",
      "AWS Cloud Services",
      "Python (Pandas, NumPy, Data Cleaning)",
      "Data Modeling & Schema Design",
      "Bloomberg Terminal Integration",
      "Advanced Excel (Pivot Tables, Complex Formulas)",
    ],
    relatedCaseStudies: ["cardiocare", "patient-risk", "bloomberg", "sales-pipeline", "oncology"],
  },
  {
    id: "data-engineering",
    name: "Data Engineering & Automation",
    icon: Workflow,
    tooltip: "ETL pipelines, Python/VBA automation & API integration",
    skills: [
      "ETL Pipeline Design & Development",
      "SQL-Based Automation & Scheduled Jobs",
      "Python-Based Automation (Pandas, PySpark)",
      "VBA Macro Development & Excel Automation",
      "Rule-Based Logic & Exception Handling",
      "API Integration (HL7/FHIR Data Payloads)",
      "Integration with Upstream/Downstream Systems",
      "Automation ROI Assessment",
    ],
    relatedCaseStudies: ["cardiocare", "bloomberg", "patient-risk", "sales-pipeline"],
  },
  {
    id: "analytics-bi",
    name: "Analytics & Business Intelligence",
    icon: BarChart3,
    tooltip: "Power BI, DAX, predictive analytics & sales reporting",
    skills: [
      "Power BI Development & Dashboard Design",
      "DAX (Data Analysis Expressions)",
      "KPI Tracking & Operational Reporting",
      "Predictive Analytics & Forecasting (Scikit-learn, Regression)",
      "Data Visualization & Storytelling",
      "Sales Analytics & Pipeline Reporting",
      "CRM Analytics (Salesforce)",
      "Business Intelligence Strategy",
    ],
    relatedCaseStudies: ["cardiocare", "sales-pipeline", "patient-risk", "bloomberg"],
  },
  {
    id: "healthcare-compliance",
    name: "Healthcare & Compliance Systems",
    icon: ShieldCheck,
    tooltip: "HL7/FHIR, LIMS, EHR, CAP/CLIA & HIPAA compliance",
    skills: [
      "HL7 & FHIR (Requirement Definition & API Mapping)",
      "LIMS Data Validation & Lab Integration",
      "EHR Systems (Epic, Cerner – Functional Exposure)",
      "Clinical Workflow Mapping",
      "Healthcare Data Accuracy & Validation",
      "CAP/CLIA Regulatory Compliance",
      "HIPAA-Compliant Data Handling",
      "Genetic Test Data Management",
    ],
    relatedCaseStudies: ["cardiocare", "patient-risk", "open-emr"],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "cardiocare",
    title: "Cardiocare Genetics — Genetic Test Data Platform",
    category: "Healthcare IT",
    challenge:
      "Genetic test lab had manual processes with 98% target accuracy. Data discrepancies across LIMS and reporting systems. Cardiologists had low adoption of genetic risk reports.",
    solution:
      "Designed SQL validation logic to cross-check sequencing results. Mapped HL7/FHIR requirements for Epic/Cerner integration. Built Power BI dashboards tracking 6,000+ cardiac genetic tests with DAX measures. Created BRDs/FRDs for 85+ functional requirements. Executed 150+ UAT test scenarios with traceability matrix.",
    results: [
      "Genetic test data accuracy: 98% (64% reduction in variant annotation discrepancies)",
      "Cardiologist adoption of genetic risk reports: 89% within 6 months",
      "Time-to-clinical-decision: 56% reduction",
      "Requirement rework: 42% reduction",
      "UAT pass rate: 100% (zero CAP/CLIA audit findings)",
      "Cross-functional delivery timelines improved by 35%",
    ],
    skillsUsed: ["SQL", "Power BI", "DAX", "HL7/FHIR", "BRD/FRD", "UAT", "LIMS", "Epic/Cerner", "CAP/CLIA", "Jira", "Confluence"],
    technologies: ["Snowflake", "LIMS", "Epic/Cerner EHR", "Power BI", "SQL Server"],
    impact: "Zero audit findings, 89% clinical adoption, enabled real-time patient risk monitoring",
    gradient: "from-blue-600/20 via-cyan-500/10 to-transparent",
  },
  {
    id: "bloomberg",
    title: "Bloomberg Financial Data Automation — ETF Portfolio Analysis",
    category: "Financial Analytics & Automation",
    challenge:
      "Finance team at Pace University spent hours manually extracting and cleaning Bloomberg Terminal data for 14+ ETF portfolios (387+ rows, 69+ columns across 150+ equity instruments). Process was error-prone.",
    solution:
      "Developed Python scripts to parse Bloomberg Terminal data structures. Created VBA macros for Excel automation and data transformation. Implemented systematic data cleaning and validation workflows. Organized instruments across ETF categories and performance tiers. Built automated comparative analysis frameworks.",
    results: [
      "Manual processing time: 40%+ reduction",
      "Data extraction accuracy: Improved across all 14 portfolios",
      "ETF comparative analysis: Automated for 150+ instruments",
      "Process repeatability: Created reusable automation scripts",
      "Time savings: Hours per week reduced significantly",
    ],
    skillsUsed: ["Python", "VBA", "Excel", "Bloomberg Terminal", "Data Cleaning", "Automation", "Financial Analysis"],
    technologies: ["Bloomberg Terminal", "Python (Pandas)", "VBA", "Excel"],
    impact: "40%+ efficiency gain, enabled deeper financial analysis",
    gradient: "from-amber-600/20 via-yellow-500/10 to-transparent",
  },
  {
    id: "patient-risk",
    title: "Predictive Patient Risk Stratification Platform",
    category: "Advanced Analytics & Healthcare",
    challenge:
      "Healthcare organization needed to identify high-risk patients early for proactive intervention. Existing risk flagging was reactive and lacked predictive accuracy.",
    solution:
      "Architected HIPAA-compliant ETL pipeline (Snowflake). Engineered feature sets from ICD-10, CPT, and utilization history. Built PySpark-based predictive model using Scikit-learn. Visualized risk tiers and care gaps in Power BI. Designed production-ready data structures for scalability.",
    results: [
      "Risk identification accuracy: 18% lift over baseline logistic regression",
      "High-risk patient identification with clinical actionability",
      "Enabled VBC model testing through care intervention prioritization",
      "HIPAA-compliant, scalable architecture for production",
      "Care gaps visualized in executive-ready BI dashboards",
    ],
    skillsUsed: ["PySpark", "Scikit-learn", "SQL", "Snowflake", "Power BI", "Python", "Predictive Modeling", "HIPAA"],
    technologies: ["PySpark", "Scikit-learn", "Snowflake", "Power BI", "Python"],
    impact: "18% accuracy improvement over baseline, enabled proactive care model",
    gradient: "from-purple-600/20 via-violet-500/10 to-transparent",
  },
  {
    id: "sales-pipeline",
    title: "Sales Pipeline Optimization — Quote-to-Close Conversion",
    category: "Sales Operations & Analytics",
    challenge:
      "Genething Healthyways had inconsistent quote-to-close conversion rates. Sales reps didn't have visibility into pipeline health. Forecasting accuracy was poor.",
    solution:
      "Analyzed CRM exports with SQL to identify conversion bottlenecks. Built Excel and Power BI dashboards tracking conversion rates, deal size, and cycle time. Conducted SQL-based margin analysis across service tiers. Implemented regression models for seasonal demand forecasting. Standardized Salesforce data and eliminated duplicate records.",
    results: [
      "Quote-to-close conversion: 27% improvement",
      "Quarterly revenue: $1.2M increase",
      "Forecast accuracy: 91% achieved with regression modeling",
      "Deal size: 18% increase via discount restructuring",
      "Quota attainment: Improved from 72% to 90%",
      "Reporting discrepancies: 55% reduction",
    ],
    skillsUsed: ["SQL", "Salesforce", "Power BI", "Excel", "Forecasting", "Margin Analysis", "Data Standardization"],
    technologies: ["Salesforce CRM", "SQL", "Power BI", "Excel"],
    impact: "$1.2M quarterly revenue increase, 27% conversion improvement, 90% quota attainment",
    gradient: "from-emerald-600/20 via-teal-500/10 to-transparent",
  },
  {
    id: "open-emr",
    title: "Open EMR — Healthcare Workflow Documentation",
    category: "Business Analysis & Healthcare IT",
    challenge:
      "Needed to define functional requirements and workflows for electronic medical records system. Required alignment with real clinical environments.",
    solution:
      "Defined functional requirements and user journeys for EMR module. Documented data flows and clinical workflows. Created process maps mirroring real healthcare environments. Built requirements traceability with acceptance criteria. Coordinated stakeholder workshops with clinical staff.",
    results: [
      "Requirements documentation: 100% completeness aligned with clinical needs",
      "Workflow accuracy: Validated against real-world EMR processes",
      "Stakeholder alignment: Clear understanding of system needs",
      "Established baseline for EMR platform development",
    ],
    skillsUsed: ["BRD/FRD Documentation", "User Journey Mapping", "Process Flows", "Stakeholder Interviews", "Healthcare Domain Knowledge"],
    technologies: ["Confluence", "Jira", "Process Mapping Tools"],
    impact: "Clear requirements foundation for EMR platform",
    gradient: "from-indigo-600/20 via-blue-500/10 to-transparent",
  },
  {
    id: "oncology",
    title: "Oncology Imaging Analysis — International Study",
    category: "Healthcare Analytics",
    challenge:
      "Needed to analyze PET, FDG-PET, CT, and MRI utilization patterns across five Scandinavian countries to inform imaging efficiency and AI adoption strategy.",
    solution:
      "Analyzed utilization data across imaging modalities. Compared imaging patterns across 5 countries. Identified regional efficiency differences and trends. Delivered insights with actionable recommendations. Supported strategic planning for AI adoption.",
    results: [
      "Key finding: 8% higher PET utilization in Denmark (vs. regional average)",
      "Evidence-based discussion on imaging efficiency optimization",
      "Informed AI adoption and resource allocation discussions",
      "Clear visibility into country-level regional patterns",
    ],
    skillsUsed: ["Data Analysis", "SQL", "Healthcare Analytics", "Comparative Analysis", "Insights Delivery"],
    technologies: ["SQL", "Excel", "Analytical Reporting"],
    impact: "8% efficiency variance identified, informed strategic AI adoption planning",
    gradient: "from-rose-600/20 via-pink-500/10 to-transparent",
  },
];
