import { FaLinkedin } from "react-icons/fa";
import portfolioImage from "../assets/profile (1) (1).png";
import { motion } from "framer-motion";
import { IoMailOutline } from "react-icons/io5";
const About = () => {
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="pt-10 pb-30 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10 px-4">
        {/* Image Animation */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex-shrink-0 w-64 h-64 rounded-xl overflow-hidden shadow-lg grayscale hover:grayscale-0 transition duration-500"
          id="about-img"
        >
          <img
            src={portfolioImage}
            alt="Mehedi Hasan"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div>
          {/* Text Animation */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-2xl"
            id="about-text"
          >
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-4">
              I'm <span className="text-[#1DCD9F] font-bold">Mehedi Hasan</span>
              , a Full Stack Engineer
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I’m currently pursuing my Diploma in Computer Science Engineering
              at Daffodil Polytechnic Institute.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I love turning ideas into smooth, efficient web apps, working
              across frontend and backend with technologies like
              <span className="text-[#1DCD9F] font-bold"> JavaScript</span>,
              <span className="text-[#1DCD9F] font-bold"> TypeScript</span>,
              <span className="text-[#1DCD9F] font-bold"> React</span>,
              <span className="text-[#1DCD9F] font-bold"> Node.js</span>,
              <span className="text-[#1DCD9F] font-bold"> MongoDB & </span>
              <span className="text-[#1DCD9F] font-bold"> PostgreSql. </span>I
              enjoy exploring new tech, solving problems, and learning things
              that make me a better developer.
            </p>
          </motion.div>

          {/* Buttons Animation */}
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start items-center"
          >
            <a
              href="https://www.linkedin.com/in/iammehedirony"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#292929] px-4 py-2 flex items-center gap-2 text-lg font-semibold rounded-md transition-all duration-300"
            >
              <FaLinkedin />
              Linkedin
            </a>
            <a
              href="mailto:iammehedirony@gmail.com"
              className="bg-white text-black px-4 py-2 flex items-center gap-2 font-semibold rounded-md transition-all duration-300"
            >
              <IoMailOutline />
              Email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
