import React from "react";
import team from "../../../public/assets/team.svg";
import Homestyle from "../../styles/Home.module.scss";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className={Homestyle.AboutSection}>
      <h2>About Us</h2>
    <div className={Homestyle.about}>
      <div className={Homestyle.about_text}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          laboriosam nostrum dolores doloribus consectetur consequuntur
          delectus, similique laborum omnis perspiciatis animi ut fugit
          perferendis odit sint laudantium illo aut tenetur.
        </p>
        <button>Learn More</button>
      </div>
      <div className={Homestyle.about_image}>
        <Image src={team} height={400} width={400} />
      </div>
    </div>
    </div>
  );
};

export default AboutSection;
