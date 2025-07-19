import React from 'react';

interface SkillBarProps {
  skill: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage }) => (
  <div className="mb-3">
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm font-medium">{skill}</span>
      <span className="text-sm text-gray-600">{percentage}%</span>
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
    <div className="resume-container min-h-screen bg-white">
      {/* Header */}
      <div className="resume-header">
        <h1 className="text-3xl font-bold mb-2">NIMA MOHAMADPOUR</h1>
        <p className="text-lg mb-4 opacity-90">IT & Engineering Specialist</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <p className="font-semibold">Phone</p>
            <p>(+98) 938 899 6300</p>
          </div>
          <div>
            <p className="font-semibold">Email</p>
            <p>Nima.Mohamadpour@gmail.com</p>
          </div>
          <div>
            <p className="font-semibold">Location</p>
            <p>Tehran, Iran</p>
          </div>
          <div>
            <p className="font-semibold">LinkedIn</p>
            <p>linkedin.com/in/Nima-Mohamadpour</p>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Professional Summary */}
        <div className="resume-section">
          <h2 className="resume-section-title">Professional Summary</h2>
          <p className="text-sm leading-relaxed">
            Innovative IT & Engineering Specialist with over 7 years of experience driving digital transformation in industrial and infrastructure projects. Skilled at integrating engineering insight with technical fluency to design automated systems, streamline operations, and deliver data-driven solutions. Played a central role in optimizing performance at Ghods Niroo through Python scripting, Power BI dashboards, and AI-enhanced reporting. Adept at cross-functional collaboration, system thinking, and applying automation to improve accuracy, reduce costs, and enable smarter decision-making.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Work Experience */}
            <div className="resume-section">
              <h2 className="resume-section-title">Work Experience</h2>
              
              <div className="experience-item">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-base">IT & Project Support Specialist</h3>
                    <p className="text-sm font-medium" style={{ color: 'hsl(var(--resume-secondary))' }}>
                      Ghods Niroo Consulting Engineers – West Ethylene Pipeline Project
                    </p>
                  </div>
                  <div className="text-right text-sm" style={{ color: 'hsl(var(--resume-secondary))' }}>
                    <p>Dec 2022 – Present</p>
                    <p>Tehran, Iran</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                  <li>Developed AI-assisted tools reducing reporting time by 50%</li>
                  <li>Built Power BI dashboards for live KPIs and financials</li>
                  <li>Scripted Python tools for invoice data consolidation</li>
                  <li>Standardized inventory workflows and document systems</li>
                  <li>Enhanced IPCMMS asset tracking across zones</li>
                  <li>Advised on IT infrastructure/security best practices</li>
                  <li>Integrated procurement traceability in ERP systems</li>
                </ul>
              </div>

              <div className="experience-item">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-base">Project & Technical Coordinator</h3>
                    <p className="text-sm font-medium" style={{ color: 'hsl(var(--resume-secondary))' }}>
                      Pasargad 3D Technologies – 3DFast
                    </p>
                  </div>
                  <div className="text-right text-sm" style={{ color: 'hsl(var(--resume-secondary))' }}>
                    <p>Oct 2020 – Dec 2022</p>
                    <p>Tehran, Iran</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                  <li>Coordinated advanced 3D printing project workflows</li>
                  <li>Automated documentation and internal reporting</li>
                  <li>Supported vendor selection using delivery KPIs</li>
                </ul>
              </div>

              <div className="experience-item">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-base">3D Designer & Contract Analyst</h3>
                    <p className="text-sm font-medium" style={{ color: 'hsl(var(--resume-secondary))' }}>
                      Kasra Yadak Shayan
                    </p>
                  </div>
                  <div className="text-right text-sm" style={{ color: 'hsl(var(--resume-secondary))' }}>
                    <p>Aug 2018 – Sep 2020</p>
                    <p>Tehran, Iran</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                  <li>Designed components using CATIA and PDMS</li>
                  <li>Reviewed technical & financial contract compliance</li>
                </ul>
              </div>

              <div className="experience-item">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-base">Other Roles</h3>
                    <p className="text-sm font-medium" style={{ color: 'hsl(var(--resume-secondary))' }}>
                      Various Companies
                    </p>
                  </div>
                  <div className="text-right text-sm" style={{ color: 'hsl(var(--resume-secondary))' }}>
                    <p>2014 – 2018</p>
                    <p>Shiraz, Iran</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                  <li>Contract & Procurement Analyst: Evaluated vendor agreements</li>
                  <li>Technical Office Specialist: Optimized engineering documentation</li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="resume-section">
              <h2 className="resume-section-title">Education</h2>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-base">B.Sc. in Mechanical Engineering</h3>
                  <p className="text-sm" style={{ color: 'hsl(var(--resume-secondary))' }}>
                    Islamic Azad University, Najaf Abad, Iran
                  </p>
                </div>
                <p className="text-sm" style={{ color: 'hsl(var(--resume-secondary))' }}>2011–2016</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="resume-section">
              <h2 className="resume-section-title">Certifications</h2>
              <div className="grid grid-cols-1 gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Project Control Management</span>
                  <span style={{ color: 'hsl(var(--resume-secondary))' }}>Sharif University</span>
                </div>
                <div className="flex justify-between">
                  <span>Data Analysis with Python</span>
                  <span style={{ color: 'hsl(var(--resume-secondary))' }}>Sharif University</span>
                </div>
                <div className="flex justify-between">
                  <span>PDMS Modeling & Piping Standards</span>
                  <span style={{ color: 'hsl(var(--resume-secondary))' }}>Falat Ghareh</span>
                </div>
                <div className="flex justify-between">
                  <span>Mechanical Building Systems</span>
                  <span style={{ color: 'hsl(var(--resume-secondary))' }}>Pouran Pajouhesh</span>
                </div>
                <div className="flex justify-between">
                  <span>CATIA, PDMS, CAESAR II</span>
                  <span style={{ color: 'hsl(var(--resume-secondary))' }}>Mashahir Isfahan</span>
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
              <ul className="text-sm space-y-1">
                <li>• Digital Workflow Design</li>
                <li>• Reporting Automation</li>
                <li>• Document Control & Metadata Structuring</li>
                <li>• Procurement Analysis</li>
                <li>• Asset & Maintenance Management</li>
                <li>• IT Security Advising</li>
              </ul>
            </div>

            {/* Languages */}
            <div className="resume-section">
              <h2 className="resume-section-title">Languages</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>English</span>
                  <span style={{ color: 'hsl(var(--resume-secondary))' }}>Professional</span>
                </div>
                <div className="flex justify-between">
                  <span>German</span>
                  <span style={{ color: 'hsl(var(--resume-secondary))' }}>Beginner</span>
                </div>
                <div className="flex justify-between">
                  <span>Persian & Turkish</span>
                  <span style={{ color: 'hsl(var(--resume-secondary))' }}>Native</span>
                </div>
              </div>
            </div>

            {/* Measurable Impact */}
            <div className="resume-section">
              <h2 className="resume-section-title">Measurable Impact</h2>
              <div className="space-y-3">
                <div className="text-center p-3 rounded" style={{ backgroundColor: 'hsl(var(--resume-light))' }}>
                  <div className="text-2xl font-bold" style={{ color: 'hsl(var(--resume-primary))' }}>30%</div>
                  <div className="text-xs">↑ Data Accuracy</div>
                </div>
                <div className="text-center p-3 rounded" style={{ backgroundColor: 'hsl(var(--resume-light))' }}>
                  <div className="text-2xl font-bold" style={{ color: 'hsl(var(--resume-primary))' }}>25%</div>
                  <div className="text-xs">↑ Reporting Speed</div>
                </div>
                <div className="text-center p-3 rounded" style={{ backgroundColor: 'hsl(var(--resume-light))' }}>
                  <div className="text-2xl font-bold" style={{ color: 'hsl(var(--resume-primary))' }}>15%</div>
                  <div className="text-xs">↓ Manual Errors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print Instructions (hidden on print) */}
      <div className="no-print fixed bottom-4 right-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
        <p className="text-sm font-medium mb-2">Ready to Print</p>
        <p className="text-xs">Press Ctrl+P (Cmd+P on Mac) to save as PDF</p>
      </div>
    </div>
  );
};

export default Resume;