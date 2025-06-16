import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Background gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 -z-10"
      ></motion.div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 z-10">
        {/* Custom arrow pointing to Resume button */}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center mb-6"
          >
            <img
              src={`${process.env.PUBLIC_URL}/Images/memoji.png`}
              alt="Firas Memoji"
              className="w-32 h-32 md:w-40 md:h-40"
            />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial="initial"
            animate="animate"
            variants={{
              initial: {},
              animate: {},
            }}
          >
            Hi, I'm{' '}
            <motion.span
              initial={{ color: '#fff' }}
              animate={{ color: '#2563eb' }} // Tailwind blue-600
              transition={{ duration: 2}}
              className="dark:text-blue-400"
              style={{ display: 'inline-block' }}
            >
              Firas
            </motion.span>{' '}
            Ajengui
          </motion.h1>
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          className="h-20 md:h-24 flex items-center justify-center"
        >
          <TypeAnimation
            sequence={[
              'A Software Developer',
              1000,
              'An Embedded Systems Engineer',
              1000,
              'A Problem Solver',
              1000,
            ]}
            wrapper="h2"
            speed={50}
            className="text-2xl md:text-4xl font-medium text-gray-600 dark:text-gray-300"
            repeat={Infinity}
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-8"
        >
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I build exceptional digital experiences that make an impact.
            Let's create something amazing together.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
          onClick={() => {
            const contactSection = document.getElementById('contact');
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }}
          >
            Get in Touch
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            onClick={() => {
              const workSection = document.getElementById('work');
              workSection.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Projects
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex justify-center gap-4"
        >
          <a
            href="https://github.com/Agfiras"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-600 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/firas-ajengui/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-600 transition-colors"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-gray-600 dark:text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 