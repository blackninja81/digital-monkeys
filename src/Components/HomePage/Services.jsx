import React from "react";
import Homestyle from "../../styles/Home.module.scss";
import { BsFilm, BsCodeSquare } from "react-icons/bs";
import { PiStrategyDuotone } from "react-icons/pi";
import { FaBrain, FaPenFancy } from "react-icons/fa";

const ServiceSection = () => {
  return (
    <div className={Homestyle.serviceSection}>
      <h2>Services</h2>
      <div className={Homestyle.ServiceCard}>
        
        <div className={Homestyle.Card}>
          <div className={Homestyle.Card_image}>
            <BsFilm />
          </div>
          <h4>Service</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            dignissimos aperiam a quod ex in?
          </p>
        </div>
        <div className={Homestyle.Card}>
          <div className={Homestyle.Card_image}>
            <BsCodeSquare />
          </div>
          <h4>Service</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            dignissimos aperiam a quod ex in?
          </p>
        </div>
        <div className={Homestyle.Card}>
          <div className={Homestyle.Card_image}>
            <PiStrategyDuotone />
          </div>
          <h4>Service</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            dignissimos aperiam a quod ex in?
          </p>
        </div>
        <div className={Homestyle.Card}>
          <div className={Homestyle.Card_image}>
            <FaBrain />
          </div>
          <h4>Service</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            dignissimos aperiam a quod ex in?
          </p>
        </div>
        <div className={Homestyle.Card}>
          <div className={Homestyle.Card_image}>
            <FaPenFancy />
          </div>
          <h4>Service</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            dignissimos aperiam a quod ex in?
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default ServiceSection;
