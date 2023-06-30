"use client";
import React from "react";
import Homestyle from "../../styles/Home.module.scss";
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
        <TabList  className={Homestyle.Portfolio_Panel_tabs}>
          <Tab>Digital Marketing</Tab>
          <Tab>Web Development</Tab>
        </TabList>
        <TabPanels>
          <TabPanel className={Homestyle.Portfolio_Panel}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis quo natus dolorem maiores totam, rerum aliquam!
              Expedita consequatur earum eius itaque. Consectetur rem minima
              suscipit dolores doloremque accusamus blanditiis aspernatur
              perspiciatis, voluptate sit distinctio omnis veritatis atque
              tempore sunt ullam nostrum architecto iusto eius fugiat non neque
              obcaecati? Debitis, voluptas.
            </p>
          </TabPanel>
          <TabPanel className={Homestyle.Portfolio_Panel}>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default PortfolioSection;
