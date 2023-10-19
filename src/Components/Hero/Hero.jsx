import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const textRef = useRef(null);
  const textRef2 = useRef(null);
  const SecRef = useRef(null);

  const text2ref = useRef(null);
  useLayoutEffect(() => {
    const el1Text = textRef.current;
    const el2Text = text2ref.current;
    const el2 = textRef2.current;
    const el3 = SecRef.current;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#trig",
          start: "bottom bottom",
          end: "+=500 ",
          scrub: 2,
          pin: true,
        },
      });
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#trig2",
          start: "bottom bottom",
          end: "+=600 ",
          scrub: 4,
          pin: true,
        },
      });

      tl.fromTo(
        el2,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          ease: "power4.out",
        }
      );

      tl.to(el3, {
        x: "50%",
      });

      tl.to(el2, {
        fontSize: "70px",
      });

      tl.fromTo(el1Text, { y: 200, opacity: 0 }, { y: 0, opacity: 1 });
      tl2.fromTo(
        el2Text,
        { opacity: 0, duration: 1, ease: "power4.out" },
        { opacity: 1, duration: 1, ease: "power4.out" }
      );
      tl2.fromTo(
        el2Text,
        { opacity: 1, duration: 1, ease: "power4.out" },
        { opacity: 0, duration: 1, ease: "power4.out" }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className='absolute w-screen h-64 flex items-center justify-center text-white z-50'>
        <h1 className='text-3xl font-bebas tracking-widest'>
          {" "}
          <Typewriter
            words={["Scroll Down"]}
            loop={false}
            cursorBlinking
          />{" "}
        </h1>
      </div>
      <div
        className='w-screen h-screen flex items-center overflow-hidden bg-red  '
        id='trig'
      >
        <div
          className='absolute flex items-center overflow-hidden justify-start w-64 ml-64'
          ref={textRef}
        >
          <h1 className='text-xl'>
            Hello There <br /> My name is Rishan Dilruk <br /> I am a Front End
            Developer
          </h1>
        </div>
        <div
          className='w-screen h-screen  bg-matBlack bg-cover flex items-center pin overflow-hidden '
          ref={SecRef}
        >
          <h1
            className=' text-[16rem] ml-24  text-white items-center leading-none  font-bebas tracking-widest'
            ref={textRef2}
          >
            Rishan <br />
            Dilruk
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
