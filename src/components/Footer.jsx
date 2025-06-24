import React from "react";
import "../assets/styles/Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <h1>Left</h1>
          <div>
            <a href="#">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#sobre">Ranking</a>
            <a href="#sobre">Entre em um time</a>
            <a href="#sobre">Projetos finalizados</a>
          </div>
        </div>
        <div className="footer-right">
          <h1>Socials</h1>
          <div>
            <a
              href="https://www.instagram.com/caiorossi.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/caio-rossi-dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.linkedin.com/in/caio-rossi-dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/caio-rossi-dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Developed by Caio Rossi</p>
      </div>
    </footer>
  );
}
