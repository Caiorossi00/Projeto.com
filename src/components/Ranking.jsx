"use client";
import { Link } from "react-router-dom";
import participants from "../data/participants.js";
import "../assets/styles/Ranking.scss";

export default function Ranking() {
  const sortedParticipants = [...participants].sort(
    (a, b) => b.projectsDelivered.length - a.projectsDelivered.length
  );

  const topPerformer = sortedParticipants[0];
  const rankedParticipants = sortedParticipants.slice(1);

  return (
    <div className="ranking-layout" id="ranking">
      <div className="main-content">
        <div className="top-performer-section">
          <div className="top-performer-badge">
            <span className="star">★</span>
            <span className="title">DEV DO MÊS</span>
            <span className="star">★</span>
          </div>

          <div className="top-performer-card">
            <div className="performer-image">
              <img
                src={topPerformer.avatar || "/placeholder.svg"}
                alt={topPerformer.name}
              />
            </div>

            <div className="performer-info">
              <h1 className="performer-name">{topPerformer.name}</h1>
              <div className="performer-title">{topPerformer.title}</div>
              <div className="performer-stats">
                <span>{topPerformer.experience}</span>
                <span>{topPerformer.location}</span>
              </div>
              <div className="performer-score">
                {topPerformer.projectsDelivered.length} Projetos
              </div>
            </div>
          </div>
        </div>

        <div className="rankings">
          {rankedParticipants.map((participant, index) => (
            <div key={participant.id} className="ranking-item">
              <div className="ranking-position">#{index + 1}</div>

              <div className="participant-image">
                <img
                  src={participant.avatar || "/placeholder.svg"}
                  alt={participant.name}
                />
              </div>

              <div className="participant-info">
                <div className="participant-main">
                  <Link
                    href={`/participant/${participant.id}`}
                    className="participant-name"
                  >
                    {participant.name}
                  </Link>
                  <span className="participant-title">{participant.title}</span>
                </div>
              </div>

              <div className="participant-score">
                {participant.projectsDelivered.length} Projetos
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
