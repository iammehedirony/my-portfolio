
import BlurText from '../components/BlurText';
import LogoWall from '../components/LogoWall';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { motion } from "framer-motion";


const coreCapabilities = [
  { name: "API Design & Development", score: "90%" },
  { name: "System Architecture", score: "85%" },
  { name: "Data Modeling", score: "80%" },
  { name: "Scalability & Performance", score: "75%" },
];

const devOpsTooling = [
  { name: "AWS Services (EC2, S3, RDS)", score: "85%" },
  { name: "CI/CD Pipelines (Jenkins, Actions)", score: "80%" },
  { name: "Container Orchestration (K8s)", score: "70%" },
  { name: "Monitoring & Logging (ELK)", score: "75%" },
];


const Skills = () => {


  return (
    <div id='skills' className='max-w-screen-xl mx-auto px-4 lg:px-8'>
      <div className=''>
        <BlurText
          text="Tech Stack"
          delay={150}
          animateBy="words"
          direction="top"
          className="md:text-5xl text-3xl font-semibold mb-0"
        />
      </div>

      <LogoWall />

      <div>
        <AdditionalSkillsSection />
      </div>
    </div>
  );
};

export default Skills;


function AdditionalSkillsSection() {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h3 className="text-xl font-semibold text-[#1DCD9F] mb-6">Core Capabilities</h3>
          {coreCapabilities.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-base text-gray-400">{skill.name}</span>
                </div>
                <span className="font-mono text-sm text-[#1DCD9F]">{skill.score}</span>
              </div>
              <div className="h-3 w-full bg-gray-800/50 rounded-full overflow-hidden border border-gray-700">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.score }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-[#1DCD9F] rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-8">
          <h3 className="text-xl font-semibold text-[#a6e6ff] mb-6">DevOps & Tooling</h3>
          {devOpsTooling.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-base text-gray-400">{skill.name}</span>
                </div>
                <span className="font-mono text-sm text-[#a6e6ff]">{skill.score}</span>
              </div>
              <div className="h-3 w-full bg-gray-800/50 rounded-full overflow-hidden border border-gray-700">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.score }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-[#a6e6ff] rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 bg-[#1C1C1C] border border-gray-700 rounded-xl p-6 flex flex-col md:flex-row items-center gap-8 hover:shadow-[0_0_20px_rgba(60,207,145,0.15)] hover:border-[#3CCF91] transition-all duration-300 group">
        <h3 className="text-xl font-semibold shrink-0">Recent Certifications</h3>
        <div className="flex-1 flex flex-wrap gap-6 items-center md:border-l md:border-gray-700 md:pl-8">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl text-[#1DCD9F]" data-icon="verified"><RiVerifiedBadgeFill /></span>
            <span className="text-base text-gray-400">Web Development Course</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl text-[#1DCD9F]" data-icon="verified"><RiVerifiedBadgeFill /></span>
            <span className="text-base text-gray-400">Gen Ai - LangChain & LangGraph (Upcomming...)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
