import React from 'react';
import '../App.css';

interface RoleModalProps {
  role: any;
  onClose: () => void;
}

const RoleModal: React.FC<RoleModalProps> = ({ role, onClose }) => {
  if (!role) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="modal-header">
          <img src={role.image} alt={role.title} />
        </div>

        <div className="modal-body">
          {/* Left Column: Experience and Skills */}
          <div>
            <h1 className="modal-section-title">experience</h1>
            {role.experience && role.experience.length > 0 ? (
              role.experience.map((exp: any, i: number) => (
                <div key={i} className="exp-item">
                  <div className="exp-item-header">
                    <div>
                      <span className="exp-title">{exp.role}</span>
                      <div className="company-name">
                        {exp.link ? (
                          <a href={exp.link} target="_blank" rel="noopener noreferrer" className="company-link">
                            {exp.company}
                          </a>
                        ) : (
                          exp.company
                        )}
                      </div>
                    </div>
                    <div>{exp.date}</div>
                  </div>
                  <ul>{exp.description.map((desc: string, j: number) => <li key={j}>{desc}</li>)}</ul>
                </div>
              ))
            ) : (
              <p>No experience listed.</p>
            )}

            <h1 className="modal-section-title" style={{ marginTop: '40px' }}>skills</h1>
            <ul className="skills-list">
              {role.skills.map((skill: string, i: number) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Right Column: Projects */}
          <div>
            <h1 className="modal-section-title">projects</h1>
            {role.projects && role.projects.length > 0 ? (
              role.projects.map((proj: any, i: number) => {
                const isLink = !!proj.link;
                const CardElement = isLink ? 'a' : 'div';
                return (
                  <CardElement 
                    key={i} 
                    className={`project-card ${isLink ? 'project-card-link' : ''}`}
                    href={isLink ? proj.link : undefined}
                    target={isLink ? "_blank" : undefined}
                    rel={isLink ? "noopener noreferrer" : undefined}
                  >
                    <h4>{proj.title}</h4>
                    <p>{proj.description}</p>
                    {proj.image && <img src={proj.image} alt={proj.title} />}
                  </CardElement>
                );
              })
            ) : (
              <p>No projects listed.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleModal;
