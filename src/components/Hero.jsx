import { BrowserView, isMobile } from "react-device-detect";
import { motion } from "framer-motion";
import { fadeIn, slideIn, textVariant } from "../utils/motion";

import { styles } from "../styles";
import { StarsCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-2/4 -translate-y-1/2 max-w-7xl mx-auto ${styles.paddingX} flex flex-col flex-wrap items-start gap-5`}
      >
        <>
        <motion.div variants={fadeIn("up", "spring", 0.3, 0.6)}>
          <p className={styles.sectionSubText}>Frontend Developer</p>
          <h1 className={`${styles.heroHeadText} text-white`}>
            안녕하세요. 
            <br/>
            프론트엔드 개발자 <span className="text-pastel-purple">최혜진</span>입니다.
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          책임감을 가지고 모든 일에 최선을 다하도록 하겠습니다.
          </p>
        </motion.div>
        </>

        <div className="flex flex-row items-center mt-5 w-full">
          <svg aria-hidden="true" className="w-10 h-10 text-white-400 rotate-45" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <div className="w-[calc(100%_-_1.5rem)] sm:h-1 h-1 -ml-4 white-gradient" />
        </div>
      </div>
      
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <div className="w-[40px] h-[64px] rounded-2xl border-4 flex justify-center items-start p-2 border-pastel-purple">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1 h-3 rounded-sm mb-1 bg-pastel-purple"
          />
        </div>
      </div>
      <BrowserView>
        <StarsCanvas/>
      </BrowserView>
    </section>
  );
};

export default Hero;
