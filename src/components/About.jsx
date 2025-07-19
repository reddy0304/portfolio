import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle"; // Import SectionTitle

const About = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["C", "C++", "Python", "JavaScript"],
    },
    {
      category: "Web Development",
      items: [
        "HTML",
        "CSS",
        "ReactJS",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Bootstrap",
        "jQuery",
        "Django",
      ],
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB", "MS SQL", "PostgreSQL", "SQLite"],
    },
    {
      category: "Machine Learning",
      items: [
        "ML",
        "CNN",
        "RNN",
        "Scikit-learn",
        "NumPy",
        "Pandas",
        "Keras",
        "Matplotlib",
        "Seaborn",
        "TensorFlow",
      ],
    },
    {
      category: "Tools",
      items: [
        "Git/GitHub",
        "VS Code",
        "Jupyter Notebook",
        "Advanced Excel",
        "Tableau",
      ],
    },
  ];

  const education = [
    {
      year: "2020-2024",
      degree: "B.Tech",
      institute: "Indian Institute of Technology (ISM) Dhanbad",
      grade: "7.13/10 CPI",
    },
    {
      year: "2019",
      degree: "Class XII (TSBIE)",
      institute: "Narayana Junior College, Hyderabad",
      grade: "94.2%",
    },
    {
      year: "2017",
      degree: "Class X (BSEAP)",
      institute: "Keshava Reddy school, Tirupati",
      grade: "9.5/10",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800 text-gray-200">
      <div className="container mx-auto px-4">
        <SectionTitle>About Me</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-lg leading-relaxed space-y-6"
          >
            <p>
              Hello! I'm Matavalam Hemanth, a passionate Full Stack Developer
              with a B.Tech in Electronics and Communication Engineering from
              IIT (ISM) Dhanbad. My journey in technology is driven by a strong
              desire to build impactful and efficient web applications.
            </p>
            <p>
              I specialize in creating robust backend systems and intuitive,
              responsive frontend interfaces. With experience in diverse tech
              stacks including MERN, PostgreSQL, and MS SQL, I thrive on solving
              complex problems and automating workflows to enhance productivity
              and user experience.
            </p>
            <p>
              Beyond coding, I've honed my leadership and managerial skills as
              the President of Students' Gymkhana at IIT (ISM) Dhanbad, where I
              led numerous student bodies and managed large-scale events. I'm
              always eager to learn new technologies and contribute to
              innovative projects.
            </p>
          </motion.div>
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-teal-400 mb-6">
                Education
              </h3>
              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-gray-700 p-6 rounded-lg shadow-xl border border-gray-600"
                  >
                    <p className="text-xl font-semibold text-white">
                      {edu.degree}
                    </p>
                    <p className="text-lg text-gray-300">
                      {edu.institute} ({edu.year})
                    </p>
                    <p className="text-md text-gray-400">{edu.grade}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-3xl font-bold text-teal-400 mb-6">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skillCategory, index) => (
                  <div
                    key={index}
                    className="bg-gray-700 p-6 rounded-lg shadow-xl border border-gray-600"
                  >
                    <h4 className="text-xl font-semibold text-white mb-3">
                      {skillCategory.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillCategory.items.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-gray-600 text-gray-100 px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-500 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
