import React from 'react';
import '../App.css';
import { CaseStudyComponents } from '../projects';

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const CaseStudy = project.caseStudy ? CaseStudyComponents[project.caseStudy] : null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '800px', padding: '50px' }}>
        <button className="close-btn" onClick={onClose} style={{ fontSize: '2rem' }}>×</button>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h1 className="about-header" style={{ fontSize: '2.5rem', margin: '0 0 10px 0', textAlign: 'left', lineHeight: '1.2' }}>{project.title}</h1>
          <div style={{ 
            display: 'inline-block', 
            padding: '4px 12px', 
            backgroundColor: '#eee', 
            border: '1px solid #ddd',
            color: '#666', 
            borderRadius: '4px', 
            fontSize: '0.8rem', 
            fontWeight: '600', 
            letterSpacing: '0.5px',
            marginBottom: '30px', 
            textTransform: 'uppercase' 
          }}>
            {project.role}
          </div>

          {CaseStudy ? (
            <div className="case-study-content" style={{ width: '100%' }}>
              <CaseStudy />
            </div>
          ) : (
            <>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', textAlign: 'justify', margin: '0 0 20px 0', color: 'var(--dark)' }}>
                {project.description}
              </p>
              {project.image && (
                 <img src={project.image} alt={project.title} style={{ width: '100%', borderRadius: '4px', marginTop: '10px', display: 'block', border: '1px solid var(--beige)' }} />
              )}
            </>
          )}

          {project.link && (
             <a href={project.link} target="_blank" rel="noopener noreferrer" className="contact-btn" style={{ marginTop: '30px', display: 'inline-block' }}>
               View Project Link
             </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
