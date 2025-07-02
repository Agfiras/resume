import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Work = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const LLMImages =[
    'Images/LLM1.png',
    'Images/LLM2.png',
  ];
  const Vote = [
    'Images/Vote.jpeg',
  ];

  const project1Images = [
    'Images/Laposte Logo.png',
    'Images/Procces Map.png',
    'Images/Mailbox 3D.png',
    'Images/Montage.png',
    'Images/MobileApp.png'
  ];

  const project2Images = [
    'Images/AdokBatt.png',
  ];

  const project3Images = [
    'Images/Setup_icon.png',
  ];

  useEffect(() => {
    let interval;
    if (isHovering) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === project1Images.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isHovering]);

  const projects = [
    {
      title: 'Smart Mailbox Solution',
      description: 'A comprehensive smart mailbox system with real-time tracking and notifications.',
      image: project1Images,
      imageDelay: 1000,
      technologies: ['Python', 'Raspberry Pi', 'React.js', 'Flutter', 'MQTT', 'Node-RED', 'MySQL'],
      github: 'https://github.com/Agfiras/Cross-platforme-MailBox-application',
      features: [
        'Configuration of electrical circuit and Raspberry Pi 4 B with sensors',
        'Admin website for real-time mail distribution tracking',
        'Mobile app for real-time parcel notifications',
        'MQTT protocol integration with HiveMQ architecture'
      ]
    },
    {
      title: 'ADOK Battery service',
      description: 'Windows-based battery monitoring service interfacing with Simbat driver and COM Express hardware via CGOS library.',
      image: project2Images,
      technologies: ['C++', 'C', 'Visual Studio', 'Windows Driver Kit', 'CGOS Library', 'Windows Services API', 'I2C Communication'],
      github: 'https://github.com/Agfiras/Battery-Driver_Hub',
      features: [
        'Native Windows battery service executable interfacing with low-level I2C hardware protocols',
        'Simbat driver development for COM Express-based devices',
        'Real-time battery metrics collection (capacity, charge rate, power state)',
        'Full Windows service integration with robust monitoring',
        'Optimized for Windows 10/11 x64 environments'
      ]
    },
    {
      title: 'Adok Install Services',
      description: 'Windows-based automation script for streamlined installation and configuration of critical services and drivers on the Adok Hub Aura platform.',
      image: project3Images,
      technologies: ['Inno Setup', 'Batch Scripting', 'Windows Services', 'Driver Installation', 'System Configuration'],
      github: 'https://github.com/Agfiras/Adok_Install_Services',
      features: [
        'Automated installation of core Adok services (Action Centre, Battery Service, Calib Usine)',
        'Driver installation (CGOS, CGBCSer, Intel Graphics)',
        'System optimizations (virtual keyboard, power settings)',
        'Clean uninstall routine for all services',
        'Reconfiguration of system shutdown behavior'
      ]
    },
    {
      title: 'LLMrest',
      description: 'mini “Pinterest‑for‑prompts” where people can save, search, and share their favorite LLM prompts.',
      images: LLMImages,
      imageDelay: 1000,
      technologies: ['nodejs', 'css' ,'mongodb', 'reactjs' ,'vite'],
      github: 'https://github.com/Agfiras/LLMprompts',
      features: [
        'User registration, login, and Google OAuth',
        'Prompt creation, listing, and detail view',
        'Tag-based filtering and search',
        'Password reset via email (secure token)',
        'Responsive, modern UI with dark mode',
        'Secure, RESTful API with proper error handling',
      ]
},

{
      title: 'YourVotes',
      description: 'A modern, decentralized voting application built with React, Ethers.js, and a Solidity smart contract. YourVotes allows users to create proposals and vote securely on the blockchain, with a beautiful, responsive UI.',
      image: Vote,
      technologies: ['React', 'Node.js', 'Ether.js','Solidity','Ethereum'],
      github: 'https://github.com/Agfiras/Decentralized-Voting-System',
      features: [
        'Create new proposals (polls) via a modal form',
        'View all open proposals in a clean card grid',
        'Vote "Yes" or "No" on proposals directly from the UI',
        'See live vote counts for each proposal',
        'Connect wallet with MetaMask',
        'Responsive, modern design',
    ]

}

  ];

  return (
    <section id="work" className="section bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg"
            >
              <div 
                className="relative"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => {
                  setIsHovering(false);
                  setCurrentImageIndex(0);
                }}
              >
                {index === 0 ? (
                  <motion.img
                    key={currentImageIndex}
                    src={project.image[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-48 object-contain bg-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                ) : index === 3 ? (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <img
                    src={Array.isArray(project.image) ? project.image[0] : project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    <FaGithub className="text-3xl" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
              </div>
            </motion.div>
          ))}
          
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
            onClick={() => window.open("https://github.com/Agfiras?tab=repositories", "_blank")}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Work; 