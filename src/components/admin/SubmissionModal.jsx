import React from "react";
import "../../assets/styles/SubmissionModal.scss";

export default function SubmissionModal({ form, setForm, onClose, onSubmit }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Aplicar ao projeto</h2>
        <form onSubmit={onSubmit}>
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
              onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
              required
            />
          </label>
          <div className="modal-actions">
            <button type="submit">Enviar</button>
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
