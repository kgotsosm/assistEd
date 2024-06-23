import React from "react";
import { features } from "../constants";
import styles, { layout } from "../styles";

const FeatureCard = ({ icon, title, content, index }) => (
  <div id="about" className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the teaching, <br className="sm:block hidden" /> we&apos;ll
          handle the planning
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the demands of handling large workloads, creating lesson plans
          is a hassle that takes time and is repetitive. <span className="text-yellow-600">assistEd</span> provides an AI powered platform will plan your lessons so you can focus on getting the most out of your pupils.
        </p>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) =>  (
          <FeatureCard  key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  );
};

export default Business;
