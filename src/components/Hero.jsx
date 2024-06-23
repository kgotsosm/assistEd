import React from "react";
import styles from "../styles";
import { hero, arrowUp } from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} mt-20 `}
    >
      <div>
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <a href="#contact">
            <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 mt-8 cursor-pointer">
              <img src={arrowUp} alt="logo" className="w-[32px] h-[32px]" />
              <p className={`${styles.paragraph} ml-2`}>
                <span className="text-white">Get On Our</span>{" "}
                <span className="text-yellow-600">Waitlist</span>
              </p>
            </div>
          </a>
        </div>
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[68px] text-[52px] text-gray-300 ss:leading-[100px] leading-[75px]">
              Smart Lessons
              <br className="sm:block hidden" />{" "}
              <span className="text-gray-300">Crafted For</span>
            </h1>
          </div>

          <h1 className="flex-1 font-poppins font-semibold ss:text-[68px] text-[52px] text-gray-300 ss:leading-[100px] leading-[75px]">
            <span className="text-[#0061D6]">Inspiring {""}</span>
            Teaching
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Our cutting edge technology will take care of the planning so you
            can focus on what&apos;s important - inspiring the next generation
            of leaders.
          </p>
          
        </div>
        
      </div>
      <div className="overflow-x-hidden">
            <img
              src={hero}
              alt="brain art"
              className="relative z-[5] hidden md:block w-[400px]"
            />
            {/* Gradient starts */}
            <div className="absolute z-[0] w-[25%] h-[35%] top-040 pink__gradient" />
            <div className="absolute z-[1] w-[20%] h-[80%] bottom-40 white__gradient" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            {/* Gradient ends */}
          </div>
    </section>
  );
};

export default Hero;
