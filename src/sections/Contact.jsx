import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

function Contact() {
  return (
    <>
      <motion.section
        className="relative py-20 overflow-hidden"
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1DCD9F]/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter">
                Get In <span className="text-[#1DCD9F]">Touch.</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-md">
                Let's build something exceptional. I'm currently open to new
                opportunities and collaborations in the cloud and fullstack
                space.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="https://github.com/iammehedirony"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 rounded-xl border border-gray-700 bg-[#1C1C1C] hover:border-[#1DCD9F] transition-all duration-300 hover:shadow-[0_0_20px_rgba(29,205,159,0.1)]"
              >
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-3xl text-gray-400 group-hover:text-[#1DCD9F] transition-colors">
                    <FaGithub />
                  </span>
                  <span className="text-xl font-semibold">GitHub</span>
                </div>
                <span className="material-symbols-outlined text-gray-400 group-hover:text-[#1DCD9F] transition-transform group-hover:translate-x-1">
                  <IoIosArrowForward />
                </span>
              </a>
              <a
                href="https://linkedin.com/in/iammehedirony"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 rounded-xl border border-gray-700 bg-[#1C1C1C] hover:border-[#1DCD9F] transition-all duration-300 hover:shadow-[0_0_20px_rgba(29,205,159,0.1)]"
              >
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-3xl text-gray-400 group-hover:text-[#1DCD9F] transition-colors">
                    <FaLinkedinIn />
                  </span>
                  <span className="text-xl font-semibold">LinkedIn</span>
                </div>
                <span className="material-symbols-outlined text-gray-400 group-hover:text-[#1DCD9F] transition-transform group-hover:translate-x-1">
                  <IoIosArrowForward />
                </span>
              </a>
              <a
                href="https://facebook.com/iammehedirony"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 rounded-xl border border-gray-700 bg-[#1C1C1C] hover:border-[#1DCD9F] transition-all duration-300 hover:shadow-[0_0_20px_rgba(29,205,159,0.1)]"
              >
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-3xl text-gray-400 group-hover:text-[#1DCD9F] transition-colors">
                    <FaFacebook />
                  </span>
                  <span className="text-xl font-semibold">Facebook</span>
                </div>
                <span className="material-symbols-outlined text-gray-400 group-hover:text-[#1DCD9F] transition-transform group-hover:translate-x-1">
                  <IoIosArrowForward />
                </span>
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      <footer className="w-full py-12 border-t border-gray-800">
        <div className="flex justify-center text-sm text-gray-500">
          Copyright © 2025 Mehedi Hasan. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Contact;
