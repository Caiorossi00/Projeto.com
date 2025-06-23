import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import deliveredProjects from "../data/deliveredProjects";
import projects from "../data/projects";

export default function DevProfile() {
  const { id } = useParams();
  const [dev, setDev] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDev(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar usuário:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (!dev || dev.error) return <p>Desenvolvedor não encontrado.</p>;

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
        <a href={dev.github} target="_blank" rel="noopener noreferrer">
          {dev.github}
        </a>
      </p>
      <p>
        <strong>LinkedIn:</strong>{" "}
        <a href={dev.linkedin} target="_blank" rel="noopener noreferrer">
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
              <a href={proj.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>{" "}
              |{" "}
              <a href={proj.deploy} target="_blank" rel="noopener noreferrer">
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
