import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";

export default function AvailableProjects() {
  return (
    <main>
      <h1>Projetos Disponíveis</h1>
      <div>
        {projects.map((project) => (
          <article key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>Dificuldade: {"⭐".repeat(project.difficulty)}</p>
            <p>Categoria: {project.category}</p>
            <p>Tecnologias: {project.technologies.join(", ")}</p>
            <p>Entregas: {project.submissions} grupo(s)</p>
            <Link to={`/projetos/${project.id}`}>Ver detalhes →</Link>
            <hr />
          </article>
        ))}
      </div>
    </main>
  );
}
