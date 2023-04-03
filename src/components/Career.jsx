import { motion } from "framer-motion";

import { styles } from "../styles";
import { optolane } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.6)}>
      <div
        className="flex flex-col p-5 rounded-2xl sm:w-[350px] max-w-xs w-full h-[430px] purple-bg-opacity"
      >
        <div className="relative w-full h-[150px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              className="w-10 h-10 rounded-full flex justify-center items-center black-gradient"
            >
              <img
                src={optolane}
                alt="optolane"
                className="w-6 h-6 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-pink text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-x-2 mt-auto">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Career = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="pt-16">
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Career</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-pastel-purple text-[17px] max-w-3xl leading-[30px]"
        >
          그동안 회사에서 진행했던 주요 프로젝트를 간략하게 보여 드리겠습니다.
          <br/>
          각 프로젝트의 캡처는 보안상의 이유로 데이터 부분은 블러처리 하였습니다.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Career, "career");
