import Image from "next/image";
import React from "react";
import monkey from "../../../public/assets/monkey2.png";
import Homestyle from "../../styles/Home.module.scss";

const LandingSection = () => {
  return (
    <div className={Homestyle.landing}>
      <div className={Homestyle.landing_icon}>
        <Image src={monkey} height={500} width={500} alt="logo-image" />
      </div>
      <div>
      <div className={Homestyle.landing_text}>
        <p>
          Your One Stop Digital Solutions
        </p>
  
        <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
