// src/data/portfolioData.js

/**
 * This file contains all the data for the portfolio.
 * It's a single source of truth, making it easy to update content.
 */

import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Mail, Code, Database, BrainCircuit, Wrench, GraduationCap, School, BriefcaseBusiness } from 'lucide-react';

export const portfolioData = {
  name: "Matavalam Hemanth",
  // IMPORTANT: Place your resume file in the /public folder of your project
  resumePdf: "/Hemanth_SDE_Resume.pdf", 
  
  contact: {
    email: "hemanthreddy030401@gmail.com",
    phone: "+916300352116", // For WhatsApp link
    linkedin: "https://www.linkedin.com/in/matavalam-hemanth-reddy/",
    github: "https://github.com/reddy0304",
  },
  
  navLinks: [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Contact', id: 'contact' },
  ],

  hero: {
    title: "Matavalam Hemanth",
    subtitle: "Software Engineer at Jindal Stainless Ltd.",
    highlights: ["IIT (ISM) Dhanbad Graduate", "1000+ Problems Solved", "Ex-President, Students' Gymkhana"],
  },

  about: {
    introduction: [
      "Hello! I'm a passionate Full Stack Developer with a B.Tech in Electronics and Communication Engineering from IIT (ISM) Dhanbad. My journey in technology is driven by a strong desire to build impactful and efficient web applications.",
      "I specialize in creating robust backend systems and intuitive, responsive frontend interfaces. With experience in diverse tech stacks including MERN, PostgreSQL, and MS SQL, I thrive on solving complex problems and automating workflows to enhance productivity and user experience.",
      "Beyond coding, I've honed my leadership and managerial skills as the President of Students' Gymkhana at IIT (ISM) Dhanbad. I'm always eager to learn new technologies and contribute to innovative projects."
    ],
    education: [
        { year: "2020-2024", degree: "B.Tech, ECE", institute: "Indian Institute of Technology (ISM) Dhanbad", grade: "7.13/10 CPI", IconComponent: GraduationCap },
        { year: "2019", degree: "Class XII (TSBIE)", institute: "Narayana Junior College, Hyderabad", grade: "94.2%", IconComponent: School },
        { year: "2017", degree: "Class X (BSEAP)", institute: "Keshava Reddy school, Tirupati", grade: "9.5/10", IconComponent: School },
    ],
    skills: [
        { category: "Programming", items: ["C++", "Python", "JavaScript"], IconComponent: Code },
        { category: "Web Development", items: ["React", "Node.js", "Express", "MongoDB", "SQL", "HTML5", "CSS3", "Tailwind"], IconComponent: BriefcaseBusiness },
        { category: "Databases", items: ["MS SQL", "PostgreSQL", "MySQL", "SQLite"], IconComponent: Database },
        { category: "ML & Data", items: ["Scikit-learn", "Pandas", "NumPy", "TensorFlow", "Keras", "Matplotlib"], IconComponent: BrainCircuit },
        { category: "Tools", items: ["Git/GitHub", "VS Code", "Jupyter", "Tableau"], IconComponent: Wrench },
    ],
  },

  experience: [
    {
      title: 'Software Development Engineer (GET- Digital & IT)',
      company: 'Jindal Stainless Limited',
      duration: 'Sept 2024 - Present',
      description: [
        'Developing a full-stack Safety Administration System for plant-wide digitization using React.js, Node.js, and MS SQL Server.',
        'Implementing secure REST APIs with JWT-based authentication and Role-Based Access Control (RBAC).',
        'Automating safety workflows, reducing reporting time by 60% and enhancing compliance visibility.',
        'Collaborating with teams for requirement gathering, iterative development, testing, and deployment.'
      ],
    },
    {
      title: 'Full Stack Web Development Intern',
      company: 'Business Web Solutions',
      duration: 'Jun 2023 - Aug 2023',
      description: [
        'Completed a comprehensive 2-month internship covering HTML, CSS, JavaScript, jQuery, Bootstrap, React, Python, and Django.',
        'Successfully executed assigned tasks and projects, demonstrating proficiency in web development technologies.',
        'Achieved high-performance ratings, exceeding expectations in project delivery and team collaboration.'
      ],
    },
  ],

  projects: [
    {
      title: 'Safety Administration System',
      description: 'A full-stack web application for plant-wide safety digitization, comprising Training Modules and Incident Management.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MS SQL Server', 'Tailwind CSS', 'Chart.js'],
      link: null,
      github: 'https://github.com/reddy0304',
    },
    {
      title: 'Task Management System',
      description: 'Full-stack MERN application to streamline task organization and improve productivity, implementing user authentication, real-time updates, and CRUD functionalities.',
      techStack: ['React', 'MongoDB', 'Express', 'Node.js', 'Redux'],
      link: null,
      github: 'https://github.com/reddy0304',
    },
    {
      title: 'Blogspot',
      description: 'A responsive blogging site where users can create blogs and share with the public. Features user authentication and password reset emails from scratch.',
      techStack: ['React', 'PostgreSQL', 'Express', 'Node.js', 'JWT', 'Nodemailer'],
      link: null,
      github: 'https://github.com/reddy0304',
    },
    {
      title: 'Customer Churn Prediction',
      description: 'Predicts customer churn using various ML algorithms. Involved data cleaning, handling class imbalance, and comparing models.',
      techStack: ['Python', 'XGBoost', 'Random Forest', 'SVM'],
      link: 'https://github.com/reddy0304/Customer_Churn_Prediction',
      github: 'https://github.com/reddy0304/Customer_Churn_Prediction',
    },
  ],

  achievements: {
    scholastic: [
      'Top 0.5% in JEE Mains\'20 (1.2M applicants).',
      'AIR 5540 in JEE Advanced\'20 (0.15M shortlisted).',
      'AIR 432 in National Defence Academy Exam\'19.',
      'Selected for the second round in NSO.',
    ],
    managerial: [
      'President, Students\' Gymkhana, IIT (ISM) Dhanbad (2023-24), leading 30+ student bodies and managing events for 25,000+ participants.',
      'Co-Coordinator of Srijan\'23, the largest socio-cultural fest in eastern India.',
      'Joint Secretary, Durga Puja Committee, 2023, streamlining event execution for over 8,000 attendees.',
    ],
    other: [
      'Solved 1000+ competitive programming problems on platforms like LeetCode, Codeforces, etc.',
      'Earned SQL (Advanced) Badge on LeetCode.',
      '5-star rating in Problem Solving on HackerRank.',
    ],
  },

  contactButtons: [
      { href: `https://www.linkedin.com/in/matavalam-hemanth-reddy/`, IconComponent: FaLinkedin, label: "LinkedIn", color: "text-teal-400", hover: "hover:bg-teal-700" },
      { href: `mailto:hemanthreddy030401@gmail.com`, IconComponent: Mail, label: "Email Me", color: "text-purple-400", hover: "hover:bg-purple-700" },
      { href: `https://wa.me/916300352116`, IconComponent: FaWhatsapp, label: "WhatsApp", color: "text-green-400", hover: "hover:bg-green-700" },
      { href: `https://github.com/reddy0304`, IconComponent: FaGithub, label: "GitHub", color: "text-white", hover: "hover:bg-gray-700" },
  ]
};