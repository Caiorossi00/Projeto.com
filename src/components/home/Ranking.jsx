import React from "react";

const rankingData = [
  { id: 1, name: "Joana Silva", projectsCompleted: 8 },
  { id: 2, name: "Pedro Alves", projectsCompleted: 6 },
  { id: 3, name: "Ana Costa", projectsCompleted: 5 },
  { id: 4, name: "Lucas Pereira", projectsCompleted: 4 },
  { id: 5, name: "Mariana Souza", projectsCompleted: 3 },
];

export default function Ranking() {
  return (
    <section>
      <h2>Ranking dos Participantes</h2>
      <ol>
        {rankingData.map(({ id, name, projectsCompleted }) => (
          <li key={id}>
            {name} — Projetos entregues: {projectsCompleted}
          </li>
        ))}
      </ol>
    </section>
  );
}
