import React, { useEffect, useState } from "react";
import "../../assets/styles/ProjectsPanel.scss";

export default function ProjectsPanel() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    technologies: "",
    difficulty: 1,
    status: "available",
  });
  const [editingId, setEditingId] = useState(null);

  const fetchProjects = async () => {
    const res = await fetch("http://localhost:5000/projects/all");
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      technologies: form.technologies.split(",").map((t) => t.trim()),
      difficulty: Number(form.difficulty),
    };

    const url = editingId
      ? `http://localhost:5000/projects/${editingId}`
      : "http://localhost:5000/projects";

    const method = editingId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setForm({
        name: "",
        description: "",
        category: "",
        technologies: "",
        difficulty: 1,
        status: "available",
      });
      setEditingId(null);
      fetchProjects();
    } else {
      const err = await res.json();
      alert(err.error || "Erro ao salvar");
    }
  };

  const handleEdit = (project) => {
    setForm({
      name: project.name,
      description: project.description,
      category: project.category,
      technologies: project.technologies.join(", "),
      difficulty: project.difficulty,
      status: project.status,
    });
    setEditingId(project._id);
  };

  const handleDelete = async (id) => {
    if (!confirm("Tem certeza que deseja deletar este projeto?")) return;
    const res = await fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
    });
    if (res.ok) fetchProjects();
    else alert("Erro ao deletar");
  };

  return (
    <main className="projects-panel">
      <h1>Painel de Projetos</h1>

      <form onSubmit={handleSubmit} className="project-form">
        <input
          type="text"
          placeholder="Nome"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Descrição"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Categoria"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
        <input
          type="text"
          placeholder="Tecnologias (separadas por vírgula)"
          value={form.technologies}
          onChange={(e) => setForm({ ...form, technologies: e.target.value })}
        />
        <input
          type="number"
          min="1"
          max="5"
          placeholder="Dificuldade (1 a 5)"
          value={form.difficulty}
          onChange={(e) => setForm({ ...form, difficulty: e.target.value })}
        />
        <select
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
        <button type="submit">{editingId ? "Atualizar" : "Criar"}</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Tecnologias</th>
            <th>Dificuldade</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => (
            <tr key={p._id}>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>{p.technologies.join(", ")}</td>
              <td>{p.difficulty}</td>
              <td>{p.status}</td>
              <td>
                <button onClick={() => handleEdit(p)}>Editar</button>
                <button onClick={() => handleDelete(p._id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
