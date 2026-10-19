import type { Achievement, Entry, SkillGroup } from '../types';

export const education: Entry[] = [
  {
    id: 'btech-cs',
    title: 'B.Tech. Computer Science',
    subtitle: 'Olusegun Agagu University of Science and Technology (OAUSTECH), Ondo, Nigeria',
    when: '2018 to 2024',
    summary: 'CGPA 4.09/5.00 (3.53/4.00 equivalent), top 1% of the graduating class.',
    highlights: [
      'Thesis: “Enhancing Vehicle Speed Estimation Accuracy Using Computer Vision”, supervised by Dr. Modupe Agagu.',
    ],
  },
];

// Newest first.
export const teaching: Entry[] = [
  {
    id: 'learncity',
    title: 'Instructor',
    subtitle: 'Learncity Tech Academy, Nigeria',
    when: '2026 to present',
    summary:
      'Teach a structured 24-week web-development programme in weekly two-hour sessions, covering frontend fundamentals, JavaScript, modern web development and project-based practice.',
  },
  {
    id: 'gdsc',
    title: 'Front-end lead and web development mentor',
    subtitle: 'Google Developer Student Clubs (GDSC), OAUSTECH',
    when: '2023 to 2024',
    summary:
      'Mentored new members in web development (HTML, CSS, JavaScript) and coordinated workshops for incoming Computer Science students.',
  },
  {
    id: 'peer-tutor',
    title: 'Computer Science peer tutor',
    subtitle: 'OAUSTECH',
    when: '2020 to 2024',
    summary:
      'Tutored undergraduate Computer Science courses (100 to 300 level) for more than 200 students, and prepared study materials and past-exam solutions for lower-level students.',
  },
];

export const service: Entry[] = [
  {
    id: 'class-rep',
    title: 'Class representative',
    subtitle: 'Department of Computer Science, OAUSTECH',
    when: 'Jan to Mar 2022',
    summary:
      'Made the case to the department for automating records at the campus medical clinic, then led the development of a XAMPP-hosted database that lets students access care using only their matriculation number.',
  },
];

const certificate = (file: string) => ({ label: 'View certificate', href: `files/certificates/${file}` });

export const certifications: Achievement[] = [
  {
    year: '2025',
    text: 'Six Sigma Yellow Belt (SSYB), Global Accreditation Body for Six Sigma Certifications.',
    link: certificate('six-sigma-yellow-belt.png'),
  },
  {
    year: '2025',
    text: 'Scrum Fundamentals Certified (SFC), Accreditation Body for Scrum and Agile.',
    link: certificate('scrum-fundamentals.png'),
  },
  {
    year: '2025',
    text: 'Certificate of Proficiency in Project Management, Transatlantic School of Management.',
    link: certificate('project-management.png'),
  },
  {
    year: '2025',
    text: 'Certificate of Participation, Building Ethical AI Frameworks for Project Management, AI Certs.',
    link: certificate('ai-certs-ethical-ai.png'),
  },
  {
    year: '2023',
    text: 'Aptech Certified Hardware and Network Specialist, Aptech Computer Education (ACE Ibadan-2).',
    link: certificate('aptech-hardware-network.png'),
  },
];

// Newest first.
export const achievements: Achievement[] = [
  {
    year: '2026',
    text: 'Co-authored a peer-reviewed, open-access article in the ISA Journal of Engineering and Technology.',
  },
  {
    year: '2026',
    text: 'Completed the 2026 Aspire Leaders Program, Aspire Institute (40 hours of coursework).',
    link: certificate('aspire-leaders-program.png'),
  },
  { year: '2026', text: 'Asherkine 2026 TS Academy Tech Scholarship.' },
  { year: '2024', text: 'Graduated in the top 1% of the Computer Science class (CGPA 4.09/5.00).' },
  { year: '2022', text: 'ALX Mastercard School of Software Engineering Scholarship.' },
  { year: 'Member', text: 'International Consortium of Research Staff Associations (ICORSA).' },
];

export const skills: SkillGroup[] = [
  {
    title: 'Machine learning and vision',
    items: [
      'PyTorch',
      'TensorFlow',
      'OpenCV',
      'YOLO',
      'LSTM and time-series modelling',
      'Data preprocessing and feature engineering',
      'Model evaluation and cross-validation',
    ],
  },
  {
    title: 'Tools',
    items: ['Python', 'Git and GitHub', 'Microsoft Excel', 'Power BI', 'Tableau'],
  },
  {
    title: 'Languages',
    items: ['English (native)', 'Yoruba (native)', 'West-African Pidgin English (fluent)', 'Portuguese (beginner)'],
    note: 'My degree was taught in English. A medium-of-instruction letter is available on request.',
  },
];
