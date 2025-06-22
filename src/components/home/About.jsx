import React from "react";
import "../../assets/styles/About.scss";

const About = () => {
  return (
    <div id="sobre" className="about">
      <div className="about-headline">
        <h1>Sobre</h1>
      </div>
      <div className="about-content">
        <p>
          Aprender a programar é só parte do processo. Desenvolver em equipe,
          lidar com entregas, expor seu código ao olhar de outras pessoas — nada
          disso se aprende sozinho, nem apenas assistindo aulas.
        </p>
        <p>
          Este projeto nasce para preencher esse espaço entre o conhecimento
          técnico e a vivência prática. Aqui, você codifica, mas também
          compartilha. Trabalha com outras pessoas, se organiza em equipe e vê
          suas entregas ganharem forma pública.
        </p>
        <p>
          Tudo o que você desenvolve aparece aqui com o seu nome. Cada projeto
          entregue é uma linha a mais na sua jornada — visível, concreta e
          colaborativa.
        </p>
      </div>
    </div>
  );
};

export default About;
