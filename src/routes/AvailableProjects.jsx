import React, { useEffect, useState } from "react";
import "../assets/styles/AvailableProjects.scss";

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
        setProjects(data);
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
      console.log(data);
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
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </div>
            <div className="project-tags">
              <p>Dificuldade: {"⭐".repeat(project.difficulty)}</p>
              <p>Categoria: {project.category}</p>
              <p>Tecnologias: {project.technologies.join(", ")}</p>
              <p>Entregas: {project.submissions} grupo(s)</p>
            </div>
            <button
              className="btn"
              onClick={() => {
                setSelectedProjectId(project._id);
                setShowModal(true);
              }}
            >
              Buscar uma equipef
            </button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Aplicar ao projeto</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Nome completo:
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </label>
              <label>
                WhatsApp:
                <input
                  type="text"
                  value={form.whatsapp}
                  onChange={(e) =>
                    setForm({ ...form, whatsapp: e.target.value })
                  }
                  required
                />
              </label>
              <div className="modal-actions">
                <button type="submit">Enviar</button>
                <button type="button" onClick={() => setShowModal(false)}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
