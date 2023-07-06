"use client";
import React from "react";
import Homestyle from "../../styles/Home.module.scss";
import { BsFilm, BsCodeSquare } from "react-icons/bs";
import { PiStrategyDuotone } from "react-icons/pi";
import { FaBrain, FaPenFancy } from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

const ServiceSection = () => {
  return (
    <div className={Homestyle.serviceSection}>
      <h2>Services</h2>
<<<<<<< HEAD
      {/* <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 400px))"
      > */}
      <div className={Homestyle.services_panel}>
=======
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
      >
>>>>>>> 4e01ac41451085f21e76d7f82b7332ea017772eb
        <Card className={Homestyle.pcard}>
          <CardBody className={Homestyle.pcard_inner}>
            <div className={Homestyle.Card_image}>
              <BsCodeSquare />
            </div>
            <CardHeader>
              <Heading size="sm"> Customer dashboard</Heading>
            </CardHeader>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae rerum expedita, quibusdam odit ipsam quasi saepe,
              obcaecati ducimus minima perferendis quos dignissimos soluta nihil
              sapiente.
            </Text>
          </CardBody>
        </Card>
        <Card className={Homestyle.pcard}>
          <CardBody className={Homestyle.pcard_inner}>
            <div className={Homestyle.Card_image}>
              <BsCodeSquare />
            </div>
            <CardHeader>
              <Heading size="sm"> Customer dashboard</Heading>
            </CardHeader>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae rerum expedita, quibusdam odit ipsam quasi saepe,
              obcaecati ducimus minima perferendis quos dignissimos soluta nihil
              sapiente.
            </Text>
          </CardBody>
        </Card>
        <Card className={Homestyle.pcard}>
          <CardBody className={Homestyle.pcard_inner}>
            <div className={Homestyle.Card_image}>
              <FaPenFancy />
            </div>
            <CardHeader>
              <Heading size="sm"> Customer dashboard</Heading>
            </CardHeader>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae rerum expedita, quibusdam odit ipsam quasi saepe,
              obcaecati ducimus minima perferendis quos dignissimos soluta nihil
              sapiente.
            </Text>
          </CardBody>
        </Card>
        <Card className={Homestyle.pcard}>
          <CardBody className={Homestyle.pcard_inner}>
            <div className={Homestyle.Card_image}>
              <FaBrain />
            </div>
            <CardHeader>
              <Heading size="sm"> Customer dashboard</Heading>
            </CardHeader>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae rerum expedita, quibusdam odit ipsam quasi saepe,
              obcaecati ducimus minima perferendis quos dignissimos soluta nihil
              sapiente.
            </Text>
          </CardBody>
        </Card>
<<<<<<< HEAD
        </div>
        {/* <Card className={Homestyle.pcard}>
          <CardBody className={Homestyle.pcard_inner}>
            <div className={Homestyle.Card_image}>
              <PiStrategyDuotone />
            </div>
            <CardHeader>
              <Heading size="sm"> Customer dashboard</Heading>
            </CardHeader>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae rerum expedita, quibusdam odit ipsam quasi saepe,
              obcaecati ducimus minima perferendis quos dignissimos soluta nihil
              sapiente.
            </Text>
          </CardBody>
        </Card> */}
      {/* </SimpleGrid> */}
      
=======
        <Card className={Homestyle.pcard}>
          <CardBody className={Homestyle.pcard_inner}>
            <div className={Homestyle.Card_image}>
              <PiStrategyDuotone />
            </div>
            <CardHeader>
              <Heading size="sm"> Customer dashboard</Heading>
            </CardHeader>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae rerum expedita, quibusdam odit ipsam quasi saepe,
              obcaecati ducimus minima perferendis quos dignissimos soluta nihil
              sapiente.
            </Text>
          </CardBody>
        </Card>
      </SimpleGrid>
      {/* <div className={Homestyle.ServiceCard}>
        
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
        
      </div> */}
>>>>>>> 4e01ac41451085f21e76d7f82b7332ea017772eb
    </div>
  );
};

export default ServiceSection;