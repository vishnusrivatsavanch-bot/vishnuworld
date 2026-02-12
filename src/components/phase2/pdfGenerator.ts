import jsPDF from "jspdf";
import type { CaseStudy } from "./data";
import { timelineEntries } from "./data";

export function generateResumePDF() {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  let y = 20;

  // Header
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text("Vishnu Nallan", pageWidth / 2, y, { align: "center" });
  y += 8;

  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100);
  doc.text("Business Analyst | Healthcare IT | Data & Analytics", pageWidth / 2, y, { align: "center" });
  y += 6;

  doc.setFontSize(9);
  doc.text("Portfolio: vishnuworld.lovable.app", pageWidth / 2, y, { align: "center" });
  y += 12;

  // Line
  doc.setDrawColor(200);
  doc.line(20, y, pageWidth - 20, y);
  y += 8;

  // Professional Summary
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(40);
  doc.text("PROFESSIONAL SUMMARY", 20, y);
  y += 7;

  doc.setFontSize(9.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(60);
  const summary = "Business Analyst with 4+ years of experience in healthcare operations, process automation, and data-driven solutions. Skilled in translating complex business requirements into actionable insights, building automated reporting pipelines, and driving cross-functional collaboration across clinical, billing, and engineering teams.";
  const summaryLines = doc.splitTextToSize(summary, pageWidth - 40);
  doc.text(summaryLines, 20, y);
  y += summaryLines.length * 5 + 6;

  // Experience
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(40);
  doc.text("PROFESSIONAL EXPERIENCE", 20, y);
  y += 8;

  for (const entry of timelineEntries) {
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(40);
    doc.text(entry.title, 20, y);
    y += 5;

    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(100);
    doc.text(`${entry.company}, ${entry.location} | ${entry.period}`, 20, y);
    y += 6;

    doc.setTextColor(60);
    for (const acc of entry.accomplishments.slice(0, 4)) {
      const lines = doc.splitTextToSize(`• ${acc}`, pageWidth - 45);
      doc.text(lines, 25, y);
      y += lines.length * 4.5;
    }
    y += 4;
  }

  // Skills
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(40);
  doc.text("SKILLS", 20, y);
  y += 7;

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(60);
  const skillText = "SQL Server, Snowflake, Azure Databricks, AWS, Python (Pandas), PySpark, Power BI, DAX, Advanced Excel, Business Process Analysis, UAT, Requirements Gathering, Agile, Bloomberg";
  const skillLines = doc.splitTextToSize(skillText, pageWidth - 40);
  doc.text(skillLines, 20, y);
  y += skillLines.length * 5 + 6;

  // Education
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(40);
  doc.text("EDUCATION", 20, y);
  y += 7;

  doc.setFontSize(9.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(60);
  doc.text("MBA, Marketing Analytics — Pace University, New York", 20, y);
  y += 5;
  doc.text("B.Tech, Civil Engineering — S R University, India", 20, y);
  y += 5;
  doc.text("McKinsey Forward Program Alumni", 20, y);

  doc.save("Vishnu_Nallan_BusinessAnalyst_Resume.pdf");
}

export function generateCaseStudyPDF(study: CaseStudy) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  let y = 20;

  // Title
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(40);
  const titleLines = doc.splitTextToSize(study.title, pageWidth - 40);
  doc.text(titleLines, 20, y);
  y += titleLines.length * 8 + 4;

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100);
  doc.text(`Category: ${study.category}`, 20, y);
  y += 10;

  // Line
  doc.setDrawColor(200);
  doc.line(20, y, pageWidth - 20, y);
  y += 10;

  // Challenge
  doc.setFontSize(13);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(40);
  doc.text("THE CHALLENGE", 20, y);
  y += 8;

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(60);
  const challengeLines = doc.splitTextToSize(study.challenge, pageWidth - 40);
  doc.text(challengeLines, 20, y);
  y += challengeLines.length * 5.5 + 8;

  // Solution
  doc.setFontSize(13);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(40);
  doc.text("THE SOLUTION", 20, y);
  y += 8;

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(60);
  const solutionLines = doc.splitTextToSize(study.solution, pageWidth - 40);
  doc.text(solutionLines, 20, y);
  y += solutionLines.length * 5.5 + 8;

  // Key Results
  doc.setFontSize(13);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(40);
  doc.text("KEY RESULTS", 20, y);
  y += 8;

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(60);
  for (const result of study.results) {
    const lines = doc.splitTextToSize(`✦ ${result}`, pageWidth - 45);
    doc.text(lines, 25, y);
    y += lines.length * 5.5;
  }
  y += 8;

  // Impact
  doc.setFontSize(13);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(40);
  doc.text("IMPACT", 20, y);
  y += 8;

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(60);
  doc.text(study.impact, 20, y);
  y += 12;

  // Skills & Tech
  doc.setFontSize(13);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(40);
  doc.text("SKILLS & TECHNOLOGIES", 20, y);
  y += 8;

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(60);
  doc.text(`Skills: ${study.skillsUsed.join(", ")}`, 20, y);
  y += 6;
  doc.text(`Technologies: ${study.technologies.join(", ")}`, 20, y);
  y += 12;

  // Footer
  doc.setFontSize(8);
  doc.setTextColor(150);
  doc.text("Vishnu Nallan — vishnuworld.lovable.app", pageWidth / 2, 285, { align: "center" });

  const fileName = `CaseStudy_${study.id.replace(/-/g, "_")}.pdf`;
  doc.save(fileName);
}
