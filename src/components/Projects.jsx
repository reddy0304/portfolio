import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle'; // Import SectionTitle

const Projects = () => {
  const projects = [
    {
      title: 'Safety Administration System',
      description: 'A full-stack web application for plant-wide safety digitization, comprising Training Modules and Incident Management. Uses React.js, Node.js, Express.js, and MS SQL Server.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MS SQL Server', 'Tailwind CSS', 'Chart.js'],
      link: '#', // Placeholder, replace with actual link
    },
    {
      title: 'Task Management System',
      description: 'Full-stack MERN application to streamline task organization and improve productivity, implementing user authentication, real-time updates, and CRUD functionalities.',
      techStack: ['React.JS', 'MongoDB', 'Express.JS', 'NodeJS', 'Redux'],
      link: '#', // Placeholder, replace with actual link
    },
    {
      title: 'Blogspot',
      description: 'A responsive blogging site where users can create blogs and share with the public. Features user authentication and password reset emails from scratch using Nodemailer and JWT.',
      techStack: ['ReactJS', 'PostgreSQL', 'ExpressJS', 'NodeJS', 'JWT', 'Nodemailer'],
      link: '#', // Placeholder, replace with actual link
    },
    {
      title: 'Yelp Camp',
      description: 'A full-stack web application for browsing and reviewing campgrounds. Implemented user authentication and authorization, CRUD operations, and responsive design.',
      techStack: ['Node.js', 'Express', 'MongoDB', 'Bootstrap', 'HTML', 'JavaScript'],
      link: '#', // Placeholder, replace with actual link
    },
    {
      title: 'Customer Churn Prediction',
      description: 'Predicts whether a customer stops using a company\'s service. Involved data cleaning, handling class imbalance, and comparing XGBoost, Random Forest, SVM, and logistic regression algorithms.',
      techStack: ['Python', 'XGBoost', 'Random Forest', 'SVM', 'Logistic Regression'],
      link: 'https://github.com/your-github/churn-prediction', // IMPORTANT: Replace with actual GitHub link
    },
    {
      title: 'Sentimental Analysis with LSTM',
      description: 'Developed a sentiment analysis model using RNN with LSTM in Keras. Extracts emotions and opinions from text, enabling analysis of opinion trends and customer feedback.',
      techStack: ['Python', 'Keras', 'LSTM', 'RNN', 'TensorFlow'],
      link: 'https://github.com/your-github/sentimental-analysis', // IMPORTANT: Replace with actual GitHub link
    },
    {
      title: 'Sales Data Analysis',
      description: 'Conducted data analysis on sales data to extract critical information and built multiple interactive dashboards using Tableau for sales insights and profit analysis.',
      techStack: ['Tableau', 'Excel', 'Data Analysis'],
      link: 'https://github.com/your-github/sales-analysis', // IMPORTANT: Replace with actual GitHub link
    },
    {
      title: 'Tourism Web Application',
      description: 'A responsive web application to get recommendations for famous tourist places in India, where authenticated users can plan a trip.',
      techStack: ['Flask', 'Jinja2', 'Bootstrap', 'JavaScript', 'SQLite'],
      link: '#', // Placeholder, replace with actual link
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800 text-gray-200">
      <div className="container mx-auto px-4">
        <SectionTitle>My Projects</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900 p-8 rounded-lg shadow-xl border border-gray-700 flex flex-col h-full hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="bg-gray-700 text-teal-300 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-full text-center transition-colors duration-300 transform hover:scale-105"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;