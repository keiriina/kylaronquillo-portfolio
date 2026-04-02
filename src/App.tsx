import { useState } from 'react';
import './App.css';

import headImg from './assets/head.png';

import general from './data/general.json';
import pmData from './data/pm.json';
import aidData from './data/aidev.json';
import smmData from './data/smm.json';
import ProjectModal from './components/ProjectModal';

const roles = [pmData, aidData, smmData];

function App() {
  const allProjects = roles.flatMap(role =>
    (role.projects || []).map(proj => ({
      ...proj,
      role: role.title.replace('\n', ' ')
    }))
  );

  const allExperiences = roles.flatMap(role =>
    (role.experience || []).map(exp => ({
      ...exp,
      category: role.title.replace('\n', ' ')
    }))
  );

  const [activeProject, setActiveProject] = useState<any>(null);

  const handleProjectClick = (project: any) => {
    setActiveProject(project);
  };

  const closeModal = () => {
    setActiveProject(null);
  };

  return (
    <>
      {/*  Main Content */}
      <div className="container">

        {/*  Navigation */}
        <header>
          <a href="#about">ABOUT ME</a>
          <a href="#projects">PROJECTS</a>
          <a href="#experience">EXPERIENCE</a>
        </header>

        {/*  Hero: Portfolio Title Image */}
        <section className="hero">
          <img src={headImg} alt="Kyla's Portfolio" />
        </section>

        {/*  About: Greeting + About Me + Education */}
        <section id="about" className="section">
          <div className="about-grid">
            {/* Left column: About Me */}
            <div className="about-col">
              <h2>about me</h2>
              {Array.isArray(general.description) ? general.description.map((desc: string, idx: number) => (
                <p key={idx} dangerouslySetInnerHTML={{ __html: desc }} style={{ marginBottom: '15px' }} />
              )) : (
                <p>{general.description as React.ReactNode}</p>
              )}
              
              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '15px', marginTop: '30px' }}>
                <a href="mailto:kylasbronquillo@gmail.com" className="contact-btn" style={{ margin: 0, padding: '12px 24px', lineHeight: '22px' }}>contact me</a>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <a href={general.contact.linkedin} target="_blank" rel="noopener noreferrer">
                    <div className="social-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    </div>
                  </a>
                  <a href={general.contact.github} target="_blank" rel="noopener noreferrer">
                    <div className="social-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    </div>
                  </a>
                  <a href={general.contact.medium} target="_blank" rel="noopener noreferrer">
                    <div className="social-icon">
                      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" /></svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* Right column: Education */}
            <div className="education-col">
              <h2>education</h2>
              {general.education.map((edu, idx) => (
                <div key={idx} className="education-item">
                  <div className="education-item-header">
                    <strong>{edu.institution}</strong>
                    <span>{edu.date}</span>
                  </div>
                  <div className="education-item-degree">{edu.degree}</div>
                  <ul>
                    {edu.details.map((detail, dIdx) => (
                      <li key={dIdx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/*  Projects: Accordion Layout */}
        <section id="projects" className="section">
          <div className="whatido-header">
            <h2>projects</h2>
          </div>

          <div className="projects-accordion">
            {allProjects.map((proj, idx) => (
              <div
                key={idx}
                className="project-panel"
                onClick={() => handleProjectClick(proj)}
              >
                <div className="panel-header">
                  <span>0{idx + 1} // {proj.role.toUpperCase()}</span>
                </div>
                <div className="panel-title-container">
                  <h3 className="panel-title">{proj.title}</h3>
                  <div className="panel-preview">
                    <p className="panel-desc">{proj.description}</p>
                    {proj.image && (
                      <div className="panel-image-preview">
                        <img src={proj.image} alt={proj.title} />
                      </div>
                    )}
                  </div>
                </div>
                <div className="panel-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/*  Experience: Timeline Layout */}
        <section id="experience" className="section">
          <div className="whatido-header">
            <h2>experience</h2>
          </div>

          <div className="timeline">
            {allExperiences.map((exp, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-date">{exp.date}</div>
                <h3 className="timeline-role">{exp.role}</h3>
                {exp.link ? (
                  <a href={exp.link} target="_blank" rel="noopener noreferrer" className="timeline-company">
                    {exp.company}
                  </a>
                ) : (
                  <div className="timeline-company">{exp.company}</div>
                )}
                <ul className="timeline-desc">
                  {exp.description.map((desc: string, j: number) => (
                    <li key={j}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Role popup modal — appears when a role card is clicked */}
        {activeProject && <ProjectModal project={activeProject} onClose={closeModal} />}
      </div>


    </>
  );
}

export default App;
