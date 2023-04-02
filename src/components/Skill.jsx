import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Skill = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="pt-16">
        <p className={styles.sectionSubText}>What I can do</p>
        <h2 className={styles.sectionHeadText}>Technical Skill</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {technologies.map((technology) => (
          <div className="w-28 h-28 hover:cursor-grab active:cursor-grabbing m-2" key={technology.name}>
            <BallCanvas icon={technology.icon} name={technology.name} skill={technology.skill} />
            <div className="text-center font-bold -mt-1">{technology.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skill, "skill");
