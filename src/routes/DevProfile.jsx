import React from "react";
import { useParams, Link } from "react-router-dom";
import participants from "../data/participants";
import deliveredProjects from "../data/deliveredProjects";
import projects from "../data/projects";

export default function DevProfile() {
  const { id } = useParams();
  const dev = participants.find((p) => p.id === id);

  if (!dev) {
    return (
      <main>
        <p>Desenvolvedor não encontrado.</p>
      </main>
    );
  }

  const devProjects = [];

  deliveredProjects.forEach((project) => {
    project.groups.forEach((group) => {
      if (group.members.includes(id)) {
        const projectData = projects.find((p) => p.id === project.projectId);
        if (projectData) {
          devProjects.push({
            projectName: projectData.name,
            groupId: group.id,
            date: group.date,
            github: group.github,
            deploy: group.deploy,
          });
        }
      }
    });
  });

  return (
    <main>
      <h1>{dev.name}</h1>
      {dev.avatar && <img src={dev.avatar} alt={dev.name} width={120} />}
      <p>
        <strong>GitHub:</strong>{" "}
        <a href={dev.github} target="_blank">
          {dev.github}
        </a>
      </p>
      <p>
        <strong>LinkedIn:</strong>{" "}
        <a href={dev.linkedin} target="_blank">
          {dev.linkedin}
        </a>
      </p>

      <h2>Projetos entregues</h2>
      {devProjects.length > 0 ? (
        <ul>
          {devProjects.map((proj) => (
            <li key={proj.groupId}>
              <strong>{proj.projectName}</strong> – {proj.date}
              <br />
              <a href={proj.github} target="_blank">
                GitHub
              </a>{" "}
              |{" "}
              <a href={proj.deploy} target="_blank">
                Deploy
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Esse dev ainda não entregou nenhum projeto.</p>
      )}

      <Link to="/entregas">← Voltar para entregas</Link>
    </main>
  );
}
