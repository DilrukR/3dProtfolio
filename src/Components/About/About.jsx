import React, { useLayoutEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollAnimationWrapper from "../ScrollAnimationWrapper/ScrollAnimationWrapper";
import { scrollAnimation2 } from "../utils/getScrollAnimation";
import ProgressLine from "../ProgressLine/ProgressLine";
import getScrollAnimation2 from "../utils/ScrollAnimation2";

const About = () => {
  const animation = useMemo(() => getScrollAnimation2(), []);
  const animation2 = useMemo(() => scrollAnimation2(), []);
  return (
    <div className='w-screen bg-matBlack flex items-center justify-center flex-col'>
      <ScrollAnimationWrapper>
        <div className='w-screen h-screen flex items-center  justify-between px-52'>
          <motion.div
            className=' h-2/4 w-2/4 bg-opacity-50 px-11 sha flex items-center bg-white   backdrop-blur-xl rounded-lg'
            variants={animation}
          >
            <p className='text-white text-2xl tracking-wider font-teko'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              magnam obcaecati ad tenetur tempore facere eos magni provident
              explicabo? Quo natus voluptate beatae, repellat soluta itaque hic
              veniam illo possimus. Exercitationem id expedita dolorum sit
              labore maiores, sapiente error tempore vitae officia suscipit enim
              ratione, illo quisquam mollitia non sunt?
            </p>
          </motion.div>
          <motion.div
            className='bg-white bg-class h-3/4 w-1/3 bg-opacity-20 backdrop-blur-lg rounded-lg'
            variants={animation2}
          ></motion.div>
        </div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default About;
