import React, { useState } from "react";
import SubmissionsPanel from "./SubmissionsPanel";
import ProjectsPanel from "./ProjectsPanel";
import "../../assets/styles/AdminPanel.scss";

const AdminPanel = () => {
  const [activePanel, setActivePanel] = useState("submissions");

  return (
    <div className="admin-container">
      <div className="admin-buttons">
        <button
          onClick={() => setActivePanel("submissions")}
          className={activePanel === "submissions" ? "active" : ""}
        >
          Submissões
        </button>
        <button
          onClick={() => setActivePanel("projects")}
          className={activePanel === "projects" ? "active" : ""}
        >
          Projetos
        </button>
      </div>

      <div className="admin-panel">
        {activePanel === "submissions" && <SubmissionsPanel />}
        {activePanel === "projects" && <ProjectsPanel />}
      </div>
    </div>
  );
};

export default AdminPanel;
