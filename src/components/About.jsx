import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, text }) => (
  <Tilt className="xs:w-[280px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full p-[4px] rounded-[20px] shadow-card purple-gradient-border"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="rounded-[20px] px-5 py-12 min-h-[280px] flex justify-evenly items-center flex-col black-bg"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain icon-filter"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
        <span className="text-[20px] text-center whitespace-pre">
          {text}
        </span>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="pt-16">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} text={service.text} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
