import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle'; // Import SectionTitle

const Experience = () => {
  const experiences = [
    {
      title: 'Software Development Engineer (GET- Digital & IT)',
      company: 'Jindal Stainless Limited',
      duration: 'Sept 2024 - Present',
      description: [
        'Developing a Safety Administration System, a full-stack web application for plant-wide safety digitization (React.js, Node.js, Express.js, MS SQL Server).',
        'Designing and implementing secure REST APIs with JWT-based authentication and Role-Based Access Control (RBAC).',
        'Creating responsive, modular UI components using Tailwind CSS and integrating dynamic dashboards with Chart.js.',
        'Automating manual safety workflows, reducing reporting time by 60% and enhancing compliance visibility.',
        'Collaborating with Safety and IT teams for requirement gathering, iterative development, testing, and deployment.'
      ],
    },
    {
      title: 'Full Stack Web Development Intern',
      company: 'Business Web Solutions',
      duration: 'Jun 2023 - Aug 2023',
      description: [
        'Completed a comprehensive 2-month internship encompassing modules in HTML, CSS, JavaScript, jQuery, Bootstrap, React JS, Python, Django.',
        'Successfully executed assigned tasks and projects, demonstrating proficiency in web development technologies.',
        'Achieved consistently high performance ratings throughout the internship period, exceeding expectations in project delivery and team collaboration.'
      ],
    },
    {
      title: 'Web Developer',
      company: 'IIT (ISM) Dhanbad (for Concetto 2023)',
      duration: 'Year 2023',
      description: [
        'Co-developed the Website for the college\'s annual techno-management fest, Concetto 2023.',
        'Made the website responsive and added various frontend features like animations and designed the database schema.',
        'Tech Stack: HTML, CSS, Javascript, ReactJs, Node, Express, MongoDB.'
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4">
        <SectionTitle>Work Experience</SectionTitle>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700 hover:border-teal-500 transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-white mb-2">{exp.title}</h3>
              <p className="text-xl text-teal-400 mb-2">{exp.company}</p>
              <p className="text-md text-gray-400 mb-6">{exp.duration}</p>
              <ul className="list-disc list-inside space-y-3 text-lg">
                {exp.description.map((point, i) => (
                  <li key={i} className="text-gray-300">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;