import React from "react";
import { Link } from "react-router-dom";
import deliveredProjects from "../data/deliveredProjects";

export default function DeliveredProjects() {
  return (
    <main>
      <h1>Projetos Entregues</h1>
      {deliveredProjects.map((project) => (
        <section key={project.projectId}>
          <h2>{project.projectName}</h2>
          {project.groups.map((group) => (
            <div key={group.id}>
              <p>
                <strong>Membros:</strong>{" "}
                {group.members.map((memberId, index) => (
                  <React.Fragment key={memberId}>
                    <Link to={`/dev/${memberId}`}>{memberId}</Link>
                    {index < group.members.length - 1 && ", "}
                  </React.Fragment>
                ))}
              </p>
              <p>
                <strong>GitHub:</strong>{" "}
                <a href={group.github} target="_blank" rel="noreferrer">
                  {group.github}
                </a>
              </p>
              <p>
                <strong>Deploy:</strong>{" "}
                <a href={group.deploy} target="_blank" rel="noreferrer">
                  {group.deploy}
                </a>
              </p>
              <p>
                <strong>Data de entrega:</strong> {group.date}
              </p>
              <hr />
            </div>
          ))}
        </section>
      ))}
    </main>
  );
}
