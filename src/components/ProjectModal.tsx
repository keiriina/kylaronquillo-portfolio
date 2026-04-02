import React from 'react';
import '../App.css';

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="modal-header">
          <h1 className="about-header" style={{ fontSize: '3rem', margin: 0, textAlign: 'left' }}>{project.title}</h1>
        </div>

        <div className="modal-body" style={{ gridTemplateColumns: '1fr', gap: '20px' }}>
          <div>
            <h1 className="modal-section-title">Case Study Overview</h1>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', textAlign: 'justify', marginBottom: '30px' }}>
              {project.description}
            </p>
            {project.image && (
               <img src={project.image} alt={project.title} style={{ width: '100%', borderRadius: '10px', marginTop: '20px' }} />
            )}
            {project.link && (
               <a href={project.link} target="_blank" rel="noopener noreferrer" className="contact-btn" style={{ marginTop: '30px' }}>
                 View Project Link
               </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
