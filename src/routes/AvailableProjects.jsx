import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import "../assets/styles/AvailableProjects.scss";

export default function AvailableProjects() {
  return (
    <main className="available-projects">
      <h1>Projetos Disponíveis</h1>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-info">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </div>
            <div className="project-tags">
              <p>Dificuldade: {"⭐".repeat(project.difficulty)}</p>
              <p>Categoria: {project.category}</p>
              <p>Tecnologias: {project.technologies.join(", ")}</p>
              <p>Entregas: {project.submissions} grupo(s)</p>
            </div>
            <Link to={`/projetos/${project.id}`} className="btn">
              Ver detalhes →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
