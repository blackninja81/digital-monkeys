"use client";
import React from "react";
import Image from "next/image";
import PortfolioCard from "./PortfolioCard";
import { Portfolio } from '../../constants/Constants';
import Homestyle from "../../styles/Home.module.scss";
// import portfolio from '../../../public/assets/portfolio1.jpg';

import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const PortfolioSection = () => {
  return (
    <div className={Homestyle.portfolioSection}>
      <h2>Porfolio Projects</h2>
      <h4>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut mollitia
        rem cupiditate rerum labore repellendus odit consequatur nulla facilis
        dolorem, quibusdam eum exercitationem, repellat eveniet doloribus
        corporis quasi, qui placeat.
      </h4>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList className={Homestyle.Portfolio_Panel_tabs}>
          <Tab>Digital Marketing</Tab>
          <Tab>Web Development</Tab>
        </TabList>
        <TabPanels>
          <TabPanel className={Homestyle.Portfolio_Panel}>
            {Portfolio.map((data) => (
            <PortfolioCard key={data.id} data={data}/>
            ))}
          </TabPanel>
          <TabPanel className={Homestyle.Portfolio_Panel}>
          {Portfolio.map((data) => (
            <PortfolioCard key={data.id} data={data}/>
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default PortfolioSection;