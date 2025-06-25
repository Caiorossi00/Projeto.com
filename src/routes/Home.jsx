import React from "react";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Feedback from "../components/home/Feedback";
import "../assets/styles/Home.scss";
import Banner from "../components/home/Banner";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Feedback />
    </div>
  );
};

export default Home;
