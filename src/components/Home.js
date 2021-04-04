import React from "react";
import { Animated } from "react-animated-css";
import { Container, Table } from "react-bootstrap";
import BackHomeBtn from "./button/BackHomeBtn";

const Home = () => {
  return (
    <Container style={contact}>
      <h1 className="p-4 text-center">Welcome to Our Online Marketplace!</h1>
      <Animated animationIn="pulse">
          <p align="center">We have many item products that makes your room is cool as iam</p>
      </Animated>
      <BackHomeBtn />
    </Container>
  );
};

const contact = {
  height: "700px"
};

const cell = {
  wordBreak: "break-all"
};

export default Home;
