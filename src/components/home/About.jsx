import React from "react";

export default function ComoFunciona() {
  const passos = [
    {
      numero: 1,
      titulo: "Escolha um desafio",
      descricao:
        "Acesse a lista de projetos disponíveis e escolha um que combine com seu nível e interesse.",
    },
    {
      numero: 2,
      titulo: "Monte seu grupo",
      descricao:
        "Forme uma equipe com até 3 pessoas. Se preferir, faça sozinho.",
    },
    {
      numero: 3,
      titulo: "Crie, documente e entregue",
      descricao:
        "Implemente o projeto com base nas boas práticas e siga as etapas de documentação e deploy.",
    },
    {
      numero: 4,
      titulo: "Ganhe seu lugar no projeto.com",
      descricao:
        "Seus projetos entregues e seu perfil serão exibidos publicamente como prova prática do seu progresso.",
    },
  ];

  return (
    <section id="sobre">
      <h2>Como funciona</h2>
      <ul>
        {passos.map((passo) => (
          <li key={passo.numero}>
            <h3>
              {passo.numero}. {passo.titulo}
            </h3>
            <p>{passo.descricao}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
