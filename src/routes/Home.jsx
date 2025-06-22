import React from "react";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import ProjectList from "../components/home/ProjectList";
import Feedback from "../components/home/Feedback";
import Ranking from "../components/home/Ranking";
import "../assets/styles/Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Ranking />
      <ProjectList />
      <Feedback />
    </div>
  );
};

export default Home;
