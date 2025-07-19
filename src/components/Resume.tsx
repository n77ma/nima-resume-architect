import React from 'react';

interface SkillBarProps {
  skill: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium text-foreground">{skill}</span>
      <span className="text-xs text-muted-foreground font-mono">{percentage}%</span>
    </div>
    <div className="skill-bar">
      <div 
        className="skill-progress" 
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

const Resume: React.FC = () => {
  const softwareSkills = [
    { skill: "Power BI", percentage: 95 },
    { skill: "Python", percentage: 80 },
    { skill: "ERP Systems", percentage: 90 },
    { skill: "MS Project", percentage: 90 },
    { skill: "Primavera", percentage: 85 },
    { skill: "CATIA", percentage: 75 },
    { skill: "PDMS", percentage: 75 },
    { skill: "CAESAR II", percentage: 70 },
    { skill: "ICDL", percentage: 95 },
    { skill: "Adobe Suite", percentage: 80 },
    { skill: "IPCMMS", percentage: 85 }
  ];

  return (
    <div className="resume-container min-h-screen">
      {/* Header */}
      <div className="resume-header">
        <h1 className="text-3xl font-light mb-2 tracking-wide">NIMA MOHAMADPOUR</h1>
        <p className="text-lg mb-6 text-muted-foreground font-light">IT & Engineering Specialist</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div className="text-center">
            <p className="font-medium text-primary mb-1">Phone</p>
            <p className="text-muted-foreground">(+98) 938 899 6300</p>
          </div>
          <div className="text-center">
            <p className="font-medium text-primary mb-1">Email</p>
            <p className="text-muted-foreground">Nima.Mohamadpour@gmail.com</p>
          </div>
          <div className="text-center">
            <p className="font-medium text-primary mb-1">Location</p>
            <p className="text-muted-foreground">Tehran, Iran</p>
          </div>
          <div className="text-center">
            <p className="font-medium text-primary mb-1">LinkedIn</p>
            <p className="text-muted-foreground">linkedin.com/in/Nima-Mohamadpour</p>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Professional Summary */}
        <div className="resume-section">
          <h2 className="resume-section-title">Professional Summary</h2>
          <div className="resume-card">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Innovative IT & Engineering Specialist with over 7 years of experience driving digital transformation in industrial and infrastructure projects. Skilled at integrating engineering insight with technical fluency to design automated systems, streamline operations, and deliver data-driven solutions. Played a central role in optimizing performance at Ghods Niroo through Python scripting, Power BI dashboards, and AI-enhanced reporting. Adept at cross-functional collaboration, system thinking, and applying automation to improve accuracy, reduce costs, and enable smarter decision-making.
            </p>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Work Experience */}
            <div className="resume-section">
              <h2 className="resume-section-title">Work Experience</h2>
              
              <div className="resume-card">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-base text-foreground">IT & Project Support Specialist</h3>
                    <p className="text-sm text-primary font-medium">
                      Ghods Niroo Consulting Engineers – West Ethylene Pipeline Project
                    </p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <p className="font-medium">Dec 2022 – Present</p>
                    <p>Tehran, Iran</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Developed AI-assisted tools reducing reporting time by 50%
                  </li>
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Built Power BI dashboards for live KPIs and financials
                  </li>
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Scripted Python tools for invoice data consolidation
                  </li>
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Standardized inventory workflows and document systems
                  </li>
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Enhanced IPCMMS asset tracking across zones
                  </li>
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Advised on IT infrastructure/security best practices
                  </li>
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Integrated procurement traceability in ERP systems
                  </li>
                </ul>
              </div>

              <div className="resume-card">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-base text-foreground">Project & Technical Coordinator</h3>
                    <p className="text-sm text-primary font-medium">
                      Pasargad 3D Technologies – 3DFast
                    </p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <p className="font-medium">Oct 2020 – Dec 2022</p>
                    <p>Tehran, Iran</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Coordinated advanced 3D printing project workflows
                  </li>
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Automated documentation and internal reporting
                  </li>
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Supported vendor selection using delivery KPIs
                  </li>
                </ul>
              </div>

              <div className="resume-card">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-base text-foreground">3D Designer & Contract Analyst</h3>
                    <p className="text-sm text-primary font-medium">
                      Kasra Yadak Shayan
                    </p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <p className="font-medium">Aug 2018 – Sep 2020</p>
                    <p>Tehran, Iran</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Designed components using CATIA and PDMS
                  </li>
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Reviewed technical & financial contract compliance
                  </li>
                </ul>
              </div>

              <div className="resume-card">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-base text-foreground">Other Roles</h3>
                    <p className="text-sm text-primary font-medium">
                      Various Companies
                    </p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <p className="font-medium">2014 – 2018</p>
                    <p>Shiraz, Iran</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Contract & Procurement Analyst: Evaluated vendor agreements
                  </li>
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Technical Office Specialist: Optimized engineering documentation
                  </li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="resume-section">
              <h2 className="resume-section-title">Education</h2>
              <div className="resume-card">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-base text-foreground">B.Sc. in Mechanical Engineering</h3>
                    <p className="text-sm text-muted-foreground">
                      Islamic Azad University, Najaf Abad, Iran
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">2011–2016</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="resume-section">
              <h2 className="resume-section-title">Certifications</h2>
              <div className="resume-card space-y-3 text-sm">
                <div className="flex justify-between items-center py-1">
                  <span className="text-foreground">Project Control Management</span>
                  <span className="text-muted-foreground">Sharif University</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-foreground">Data Analysis with Python</span>
                  <span className="text-muted-foreground">Sharif University</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-foreground">PDMS Modeling & Piping Standards</span>
                  <span className="text-muted-foreground">Falat Ghareh</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-foreground">Mechanical Building Systems</span>
                  <span className="text-muted-foreground">Pouran Pajouhesh</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-foreground">CATIA, PDMS, CAESAR II</span>
                  <span className="text-muted-foreground">Mashahir Isfahan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills and Languages */}
          <div className="lg:col-span-1">
            {/* Software Proficiency */}
            <div className="resume-section">
              <h2 className="resume-section-title">Software Proficiency</h2>
              <div className="space-y-2">
                {softwareSkills.map((item, index) => (
                  <SkillBar key={index} skill={item.skill} percentage={item.percentage} />
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="resume-section">
              <h2 className="resume-section-title">Technical Skills</h2>
              <div className="resume-card space-y-3 text-sm">
                <div className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  <span>Digital Workflow Design</span>
                </div>
                <div className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  <span>Reporting Automation</span>
                </div>
                <div className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  <span>Document Control & Metadata Structuring</span>
                </div>
                <div className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  <span>Procurement Analysis</span>
                </div>
                <div className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  <span>Asset & Maintenance Management</span>
                </div>
                <div className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  <span>IT Security Advising</span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="resume-section">
              <h2 className="resume-section-title">Languages</h2>
              <div className="resume-card space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-foreground">English</span>
                  <span className="text-muted-foreground font-medium">Professional</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">German</span>
                  <span className="text-muted-foreground font-medium">Beginner</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Persian & Turkish</span>
                  <span className="text-muted-foreground font-medium">Native</span>
                </div>
              </div>
            </div>

            {/* Measurable Impact */}
            <div className="resume-section">
              <h2 className="resume-section-title">Measurable Impact</h2>
              <div className="space-y-3">
                <div className="impact-card">
                  <div className="impact-value">30%</div>
                  <div className="text-xs text-muted-foreground font-medium">↑ Data Accuracy</div>
                </div>
                <div className="impact-card">
                  <div className="impact-value">25%</div>
                  <div className="text-xs text-muted-foreground font-medium">↑ Reporting Speed</div>
                </div>
                <div className="impact-card">
                  <div className="impact-value">15%</div>
                  <div className="text-xs text-muted-foreground font-medium">↓ Manual Errors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print Instructions (hidden on print) */}
      <div className="no-print fixed bottom-6 right-6 bg-card border border-border p-4 rounded-lg shadow-lg backdrop-blur-sm">
        <p className="text-sm font-medium mb-2 text-foreground">Ready to Print</p>
        <p className="text-xs text-muted-foreground">Press Ctrl+P (Cmd+P on Mac) to save as PDF</p>
        <div className="mt-2 text-xs text-muted-foreground">Optimized for A4 format</div>
      </div>
    </div>
  );
};

export default Resume;