import { useState } from 'react';
import './App.css';

import portfolioTitle from './assets/portfolio-title.png';
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
          <a href="#about">about me</a>
          <a href="#whatido">what I do</a>
          <a href="#skills">skills</a>
        </header>

        {/*  Hero: Portfolio Title Image */}
        <section className="hero">
          <img src={portfolioTitle} alt="Kyla's Portfolio" />
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
                  <div className="social-icon">in</div>
                </a>
                <a href={general.contact.github} target="_blank" rel="noopener noreferrer">
                  <div className="social-icon">gh</div>
                </a>
                <a href={general.contact.medium} target="_blank" rel="noopener noreferrer">
                  <div className="social-icon">med</div>
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
