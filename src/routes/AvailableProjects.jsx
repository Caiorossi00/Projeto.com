import React, { useEffect, useState } from "react";
import "../assets/styles/AvailableProjects.scss";
import SubmissionModal from "../components/admin/SubmissionModal";

export default function AvailableProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort(
          (a, b) => (b.waitingCount || 0) - (a.waitingCount || 0)
        );
        setProjects(sorted);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.whatsapp.trim()) {
      alert("Por favor, preencha nome, email e whatsapp.");
      return;
    }

    const payload = {
      projectId: selectedProjectId,
      name: form.name.trim(),
      email: form.email.trim(),
      whatsapp: form.whatsapp.trim(),
    };

    try {
      const res = await fetch("http://localhost:5000/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Erro ao enviar submissão");
      }
      const data = await res.json();
      alert("Submissão enviada com sucesso!");
      setShowModal(false);
      setForm({ name: "", email: "", whatsapp: "" });
    } catch (error) {
      alert("Erro: " + error.message);
    }
  };

  if (loading) return <p>Carregando projetos...</p>;

  return (
    <main className="available-projects">
      <h1>Projetos Disponíveis</h1>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project._id} className="project-card">
            <div className="project-info">
              <h2 className="project-title">
                {project.name}{" "}
                {project.waitingCount > 3 && (
                  <span
                    className="hot-fire"
                    role="img"
                    aria-label="hot project"
                  >
                    🔥
                  </span>
                )}
              </h2>
              <p>{project.description}</p>
            </div>

            <div className="project-tags">
              <p className="difficulty-tag">
                Dificuldade: {" ⭐".repeat(project.difficulty)}
              </p>
              <p>Categoria: {project.category}</p>
              <p>Tecnologias: {project.technologies.join(", ")}</p>
            </div>

            <div className="waiting-counter">
              {project.waitingCount > 0 ? (
                <>
                  <span className="pulse-dot" />
                  <p style={{ color: "green" }}>
                    {project.waitingCount}{" "}
                    {project.waitingCount === 1 ? "pessoa" : "pessoas"}{" "}
                    procurando equipe
                  </p>
                </>
              ) : (
                <p style={{ color: "red" }}>Ninguém procurando par</p>
              )}
            </div>

            <button
              className="btn"
              onClick={() => {
                setSelectedProjectId(project._id);
                setShowModal(true);
              }}
            >
              Entrar em uma equipe
            </button>
          </div>
        ))}
      </div>

      {showModal && (
        <SubmissionModal
          form={form}
          setForm={setForm}
          onSubmit={handleSubmit}
          onClose={() => setShowModal(false)}
        />
      )}
    </main>
  );
}
