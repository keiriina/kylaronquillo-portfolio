import { useState } from 'react';
import './App.css';

import headImg from './assets/head.png';
import frameAi from './assets/frame-ai.png';
import framePm from './assets/frame-pm.png';
import frameSocmed from './assets/frame-socmed.png';

import general from './data/general.json';
import pmData from './data/pm.json';
import aidData from './data/aidev.json';
import smmData from './data/smm.json';
import RoleModal from './components/RoleModal';

const roles = [pmData, aidData, smmData];


const imageMap: Record<string, string> = {
  pm: framePm,
  aid: frameAi,
  smm: frameSocmed
};

function App() {
  // For the role card
  const [activeRole, setActiveRole] = useState<any>(null);

  const handleRoleClick = (role: any) => {
    setActiveRole({
      ...role,
      image: imageMap[role.id]
    });
  };

  const closeModal = () => {
    setActiveRole(null);
  };

  return (
    <>
      {/*  Main Content */}
      <div className="container">

        {/*  Navigation */}
        <header>
          <a href="#about">ABOUT ME</a>
          <a href="#whatido">WHAT I DO</a>
          <a href="#skills">SKILLS</a>
        </header>

        {/*  Hero: Portfolio Title Image */}
        <section className="hero">
          <img src={headImg} alt="Kyla's Portfolio" />
        </section>

        {/*  About: Greeting + About Me + Education */}
        <section id="about" className="section">
          <h1 className="about-header">{general.greeting}</h1>
          <div className="about-grid">
            {/* Left column: About Me */}
            <div className="about-col">
              <h2>about me</h2>
              <p>{general.description}</p>
              <a href="mailto:kylasbronquillo@gmail.com" className="contact-btn">contact me</a>
              <div className="social-links">
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

        {/*  What I Do: Clickable Role Cards */}
        <section id="whatido" className="section">
          <div className="whatido-header">
            <h2 className="title">what I do?</h2>
            <p style={{ fontStyle: 'italic' }}>I am someone who can wear more than one hat!</p>
          </div>

          <div className="roles-container">
            {roles.map(role => (
              <div
                key={role.id}
                className={`role-card ${role.id}`}
                onClick={() => handleRoleClick(role)}
              >
                <img src={imageMap[role.id]} alt={role.title.replace('\n', ' ')} />
              </div>
            ))}
          </div>
        </section>

        {/*  Skills: Compass Layout */}
        <section id="skills" className="section">
          <div className="skills-compass">
            <div className="skills-crosshair-v"></div>
            <div className="skills-crosshair-h"></div>

            <h2 className="title skills-center-title">skills</h2>

            <div className="skills-quadrant quad-tl">
              {general.skills.topLeft?.map((skill, i) => (
                <span key={i} className={`skill-tag pos-${i % 5}`}>{skill}</span>
              ))}
            </div>

            <div className="skills-quadrant quad-tr">
              {general.skills.topRight?.map((skill, i) => (
                <span key={i} className={`skill-tag pos-${i % 5}`}>{skill}</span>
              ))}
            </div>

            <div className="skills-quadrant quad-bl">
              {general.skills.bottomLeft?.map((skill, i) => (
                <span key={i} className={`skill-tag pos-${i % 5}`}>{skill}</span>
              ))}
            </div>

            <div className="skills-quadrant quad-br">
              {general.skills.bottomRight?.map((skill, i) => (
                <span key={i} className={`skill-tag pos-${i % 5}`}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Role popup modal — appears when a role card is clicked */}
        {activeRole && <RoleModal role={activeRole} onClose={closeModal} />}
      </div>


    </>
  );
}

export default App;
