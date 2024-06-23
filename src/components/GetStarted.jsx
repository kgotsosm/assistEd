import React from "react";
import styles from "../styles";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className="cursor-pointer">
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full cursor-pointer`}>
        <div className={`${styles.flexStart} flex-row cursor-pointer`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px] cursor-pointer">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain cursor-pointer" />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px] cursor-pointer">
          <span className="text-gradient">Waitlisted</span>
        </p>
      </div>
    </div>
  </div>
);

export default GetStarted;
