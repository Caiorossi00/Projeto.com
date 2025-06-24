import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/rankings">Ranking</Link>
          </li>
          <li>
            <Link to="/projetos">Entre em um time</Link>
          </li>
          <li>
            <Link to="/entregas">Entregar um projeto</Link>
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
            <Link to="/">To be</Link>
          </li>
          <li>
            <Link to="/ranking">Done</Link>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
