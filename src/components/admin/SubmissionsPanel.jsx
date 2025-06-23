import React, { useEffect, useState } from "react";
import "../../assets/styles/SubmissionsPanel.scss";

export default function SubmissionsPanel() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/submissions")
      .then((res) => res.json())
      .then((data) => {
        setSubmissions(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Erro ao carregar submissões");
        setLoading(false);
      });
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await fetch(
        `http://localhost:5000/submissions/${id}/status`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: newStatus }),
        }
      );
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Erro ao atualizar status");
      }
      const updatedSubmission = await res.json();
      setSubmissions((subs) =>
        subs.map((sub) => (sub._id === id ? updatedSubmission : sub))
      );
    } catch (error) {
      alert(error.message);
    }
  };

  if (loading) return <p>Carregando submissões...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <h1>Admin - Submissões</h1>
      <table>
        <thead>
          <tr>
            <th>Projeto</th>
            <th>Nome</th>
            <th>Email</th>
            <th>WhatsApp</th>
            <th>Status</th>
            <th>Alterar Status</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission) => (
            <tr key={submission._id} className={`status-${submission.status}`}>
              <td>{submission.project?.name || "N/A"}</td>
              <td>{submission.name || "N/A"}</td>
              <td>{submission.email || "N/A"}</td>
              <td>{submission.whatsapp || "N/A"}</td>
              <td>{submission.status}</td>
              <td>
                <select
                  value={submission.status}
                  onChange={(e) =>
                    handleStatusChange(submission._id, e.target.value)
                  }
                >
                  <option value="waiting">Waiting</option>
                  <option value="grouped">Grouped</option>
                  <option value="completed">Completed</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
