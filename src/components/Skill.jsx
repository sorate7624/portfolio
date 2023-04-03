import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import ReactStars from "react-rating-stars-component";

import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Skill = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="pt-16">
        <p className={styles.sectionSubText}>What I can do</p>
        <h2 className={styles.sectionHeadText}>Technical Skill</h2>
      </motion.div>
      <motion.div variants={fadeIn("down", "spring", 0.3, 0.6)}>
        <div className="flex flex-row flex-wrap justify-center gap-x-20 gap-y-32 mt-20 px-24 py-20">
          {technologies.map((technology) => (
            <div className="w-28 h-28 hover:cursor-grab active:cursor-grabbing m-2" key={technology.name}>
              <BallCanvas icon={technology.icon} name={technology.name} skill={technology.skill} />
              <div className="text-center font-bold">{technology.name}</div>
              <div className="flex justify-center mb-8">
                <ReactStars
                  count={5}
                  value={technology.rating}
                  edit={false}
                  // size={24}
                  size={20}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star">dd</i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                  color="#777"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Skill, "skill");
