import React from "react"; 
import styles from "../styles";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>

    <div className="w-full pt-6 border-t-[1px] border-t-[#3F3E45]">

      <div className="flex justify-center items-center gap-[-4] flex-row md:mt-0 mt-6">
      <img
          src={logo}
          alt="assistEd"
          className="w-[266px] h-[60.14px] object-contain top-0"
        />
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Ⓒ 2024 assistEd
      </p>
      </div>
      
    </div>
  </section>
);

export default Footer;