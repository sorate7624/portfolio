import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { BrowserView, isMobile } from 'react-device-detect';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { timelines } from '../constants';
import { SectionWrapper } from '../hoc';
import { EarthCanvas } from './canvas';
import { fadeIn, textVariant } from '../utils/motion';

const ExperienceCard = ({ timeline }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#141414',
        color: '#fff',
        border: '2px solid #576CBC',
        boxShadow: 'none',
        borderRadius: '1rem',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #576CBC' }}
      date={timeline.date}
      iconStyle={{
        background: timeline.iconBg,
        boxShadow: 'none',
        border: '4px solid #576CBC',
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={timeline.icon}
            alt={timeline.company_name}
            className="w-[70%] h-[70%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{timeline.title}</h3>
        <p
          className="text-pastel-skyblue text-[16px] font-bold"
          style={{ margin: 0 }}
        >
          {timeline.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {timeline.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider whitespace-pre-line"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="pt-16">
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Timeline</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <BrowserView>
          <motion.div variants={fadeIn('up', 'spring', 0.3, 0.6)}>
            <EarthCanvas />
          </motion.div>
        </BrowserView>
        <VerticalTimeline
          animate={isMobile ? false : true}
          className={'timeline'}
        >
          {timelines.map((timeline, index) => (
            <ExperienceCard key={index} timeline={timeline} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'timeline');
