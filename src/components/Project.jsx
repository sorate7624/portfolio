import { motion } from 'framer-motion';

import { styles } from '../styles';
import { optolane } from '../assets';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, url, git }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.3, 0.6)}>
      <div className="flex flex-col p-5 rounded-2xl sm:w-[350px] max-w-xs w-full h-[450px] bg-pastel-navy">
        <div className="relative w-full h-[150px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <a
              href={url}
              target="_blank"
              className="w-10 h-10 rounded-full flex justify-center items-center bg-white border-4 border-[#19376D] shadow-2xl"
            >
              {git ? (
                <img
                  src={github}
                  alt="github"
                  className="w-6 h-6 object-contain"
                />
              ) : (
                <img
                  src={optolane}
                  alt="optolane"
                  className="w-6 h-6 object-contain"
                />
              )}
            </a>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-pastel-skyblue font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-[14px]">{description}</p>
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

const Project = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="pt-16">
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Project</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-sea-blue text-[17px] leading-[30px]"
        >
          그동안 진행했던&nbsp;
          <em className="font-bold not-italic text-lg text-pastel-skyblue">
            "주요 프로젝트"
          </em>
          &nbsp; 를 간략하게 보여 드리겠습니다.
          <br />* 회사에서 진행했던 프로젝트는 보안상의 이유로 데이터 부분을
          블러처리, 자세한 사항은 확인하기 다소 어려운 점 양해 부탁드립니다.
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

export default SectionWrapper(Project, 'project');
