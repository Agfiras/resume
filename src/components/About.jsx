import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaPython } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiCplusplus, SiCsharp, SiDotnet, SiRaspberrypi } from 'react-icons/si';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skills = [
    { name: 'React', icon: <FaReact className="text-4xl text-blue-500" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-green-500" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-4xl text-blue-600" /> },
    { name: 'NoSQL', icon: <FaDatabase className="text-4xl text-yellow-500" /> },
    { name: 'C++', icon: <SiCplusplus className="text-4xl text-blue-700" /> },
    { name: 'C#', icon: <SiCsharp className="text-4xl text-purple-600" /> },
    { name: '.NET', icon: <SiDotnet className="text-4xl text-purple-500" /> },
    { name: 'Raspberry Pi', icon: <SiRaspberrypi className="text-4xl text-red-600" /> },
    { name: 'Python', icon: <FaPython className="text-4xl text-blue-500" /> },
  ];

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center md:items-start"
          >
            <motion.div
              variants={itemVariants}
              className="relative w-64 h-64 mb-8"
            >
              <div className="absolute inset-0 bg-blue-600 rounded-full transform rotate-3"></div>
              <img
                src="/Images/profile.png"
                alt="Firas Ajengui"
                className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-700 shadow-lg"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-4">Who I Am ⁉️</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Second-year Master's student in Computer Science, with backgroung in Embedded Systems.
                Passionate about research, software development, and emerging technologies, with a strong interest
                in how innovation can enhance human life.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                I'm driven by curiosity and a commitment to continuous learning,
                actively seeking opportunities to explore new ideas, solve complex problems,
                and contribute to cutting-edge R&D and software engineering projects.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-6">
                <h3 className="text-2xl font-semibold">My Skills</h3>
                <img
                  src="/Images/memoji2.png"
                  alt="My Skills Memoji"
                  className="ml-3 w-15 h-15 md:w-20 md:h-20 object-contain pointer-events-none"
                />
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md"
                    >
                      {skill.icon}
                      <span className="mt-2 font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 