import React from 'react';
import '../App.css';
import { CaseStudyComponents } from '../caseStudies';

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const CaseStudy = project.caseStudy ? CaseStudyComponents[project.caseStudy] : null;
  const coverSrc = project.coverImage || 'https://picsum.photos/1200/400?random=10';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '800px', padding: '0', display: 'flex', flexDirection: 'column' }}
      >

        {/* ── Close Button ── */}
        <button
          className="close-btn"
          onClick={onClose}
          style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 10 }}
        >×</button>

        {/* ── Scrollable Content Area (cover photo + all content) ── */}
        <div style={{ overflowY: 'auto', flex: 1 }}>

          {/* Cover Photo */}
          <img
            src={coverSrc}
            alt={`${project.title} cover`}
            style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }}
          />

          <div style={{ padding: '40px 50px' }}>

          {/* Title */}
          <h1 style={{ color: 'var(--orange)', fontSize: '2.8rem', margin: '0 0 12px 0', lineHeight: '1.1', fontWeight: 'bold' }}>
            {project.title}
          </h1>

          {/* Role pill */}
          {project.role && (
            <div style={{
              display: 'inline-block',
              padding: '4px 12px',
              backgroundColor: '#eee',
              border: '1px solid #ddd',
              color: '#666',
              borderRadius: '4px',
              fontSize: '0.75rem',
              fontWeight: '600',
              letterSpacing: '0.5px',
              marginBottom: '20px',
              textTransform: 'uppercase' as const
            }}>
              {project.role}
            </div>
          )}

          {/* Skills */}
          {project.skills && project.skills.length > 0 && (
            <div className="panel-skills" style={{ marginBottom: '30px' }}>
              {project.skills.map((skill: string) => (
                <span key={skill} className="skill-badge" style={{ fontSize: '0.55rem', padding: '2px 8px' }}>{skill}</span>
              ))}
            </div>
          )}

          {/* Divider */}
          <hr style={{ border: 'none', borderTop: '1px solid var(--beige)', marginBottom: '30px' }} />

          {/* Case Study or fallback description */}
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

          {/* Project link */}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="contact-btn" style={{ marginTop: '30px', display: 'inline-block' }}>
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
