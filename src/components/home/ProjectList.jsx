import React from "react";
import projects from "../../data/projects";

export default function ProjectList() {
  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <p>Dificuldade: {"⭐".repeat(project.difficulty)}</p>
          <p>Categoria: {project.category}</p>
          <p>Tecnologias: {project.technologies.join(", ")}</p>
          <p>Entregas: {project.submissions} grupo(s)</p>
          <a href={`/projetos/${project.id}`}>Ver projeto →</a>
          <hr />
        </div>
      ))}
    </div>
  );
}
