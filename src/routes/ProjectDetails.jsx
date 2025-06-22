import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import deliveredProjects from "../data/deliveredProjects";
import participants from "../data/participants";

export default function ProjectDetails() {
  const { id } = useParams();
  const projectId = parseInt(id);
  const project = projects.find((proj) => proj.id === projectId);
  const entregas = deliveredProjects.find((p) => p.projectId === projectId);

  if (!project) {
    return (
      <main>
        <p>Projeto não encontrado.</p>
      </main>
    );
  }

  return (
    <main>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <p>Dificuldade: {"⭐".repeat(project.difficulty)}</p>
      <p>Categoria: {project.category}</p>
      <p>Tecnologias utilizadas: {project.technologies.join(", ")}</p>
      <p>Entregas: {project.submissions} grupo(s)</p>

      {entregas && entregas.groups.length > 0 && (
        <>
          <h2>Grupos que entregaram</h2>
          {entregas.groups.map((group) => (
            <div key={group.id}>
              <p>
                <strong>Data:</strong> {group.date}
              </p>
              <p>
                <strong>Membros:</strong>
              </p>
              <ul>
                {group.members.map((memberId) => {
                  const member = participants.find((p) => p.id === memberId);
                  return (
                    <li key={memberId}>
                      <Link to={`/dev/${memberId}`}>
                        {member ? member.name : memberId}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <p>
                <strong>GitHub:</strong>{" "}
                <a href={group.github} target="_blank">
                  {group.github}
                </a>
              </p>
              <p>
                <strong>Deploy:</strong>{" "}
                <a href={group.deploy} target="_blank">
                  {group.deploy}
                </a>
              </p>
              <hr />
            </div>
          ))}
        </>
      )}

      <Link to="/projetos">← Voltar para lista de projetos</Link>
    </main>
  );
}
