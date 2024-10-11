import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaLinux,
  FaWordpress,
  FaJenkins,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiAnsible,
  SiNextdotjs,
  SiKubernetes,
  SiWireshark,
  SiOwasp,
  SiMetasploit,
  Si1Password,
} from "react-icons/si";
import { GrNetwork, GrVulnerability } from "react-icons/gr";
import { SiSplunk } from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiNextdotjs,
          SiFramer,
          FaWordpress,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [FaFigma, SiAdobexd, SiAdobephotoshop],
      },
      {
        title: "Devops",
        icons: [SiKubernetes, SiAnsible, FaLinux, FaJenkins, ],
      },
      {
        title: "CyberSecurity",
        icons: [SiWireshark, SiOwasp, FaLinux, SiSplunk,GrVulnerability,GrNetwork,Si1Password],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Student Ambassador",
        stage: "2024",
      },
      
    ],
  },
  {
    title: "experience",
    info: [
      
      {
        title: "Technical Support Head - Psych Station",
        stage: "2023 - present",
      },
      {
        title: "Intern - Spark Foundation",
        stage: "2008 - 2010",
      },
      {
        title: "Youth Ambassador - Youth Media Network Pakistan",
        stage: "2024",
      },
      {
        title: "Event Manager - Confiniti-NCBA&E Main Campus Lahore",
        stage: "2024 - present",
      },
      {
        title: "Student Ambassadorr - LetsUpgrade",
        stage: "2024 - Present",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Cyber Security -Infosys",
        stage: "2024",
      },
      {
        title: "Introduction to Android App Pentesting. - Infosec",
        stage: "2024",
      },
      {
        title: "Introduction to Web Application Pentesting. - Infosec",
        stage: "2024",
      },
      {
        title: "Social Engineering - Infosec",
        stage: "2024",
      },
      {
        title: "How to Simplify Docker using DevOps - Alison ",
        stage: "2024",
      },
      {
        title: "Certified Ethical Hacker (CEH) - Infosec",
        stage: "2024",
      },
      {
        title: "Microsoft Azure for Data Engineering - Microsoft",
        stage: "2024",
      },
      {
        title: "AWs Threat Detection,Logging and Monitoring - AWS",
        stage: "2024",
      },
      {
        title: "Introduction to DevOps - IBM",
        stage: "2024",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Unbreakable <span className="text-accent">defenses </span> are forged by mastering the unseen threats.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I have 1 year of experience as a DevOps engineer, where I optimized deployment pipelines, automated infrastructure, and enhanced system performance. Additionally, with 4 months as a cybersecurity analyst, I conducted in-depth vulnerability assessments and penetration testing to secure web applications and infrastructure. My expertise lies in building efficient, secure systems that align with business needs.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div>

              

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects.
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
