import React from "react";
import "../../assets/styles/Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <ul>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#ranking">Ranking</a>
          </li>
          <li>
            <a href="#entre-em-um-time">Entre em um time</a>
          </li>
          <li>
            <a href="#projetos-entregues">Projetos Entregues</a>
          </li>
          <li>
            <a href="#feedback">Feedback dos Participantes</a>
          </li>
        </ul>
        <br />
        <ul>
          <li>
            <a href="#como-participar">Como Participar?</a>
          </li>
          <li>
            <a href="#apoie">Apoie</a>
          </li>
          <li>
            <a href="#redes-sociais">Redes Sociais</a>
          </li>
        </ul>
      </div>
      <div className="hero-right">
        <ul>
          <li>
            <a href="#sobre">To be</a>
          </li>
          <li>
            <a href="#ranking">Done</a>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
