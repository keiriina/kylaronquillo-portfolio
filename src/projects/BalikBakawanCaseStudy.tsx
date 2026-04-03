import React from 'react';

const BalikBakawanCaseStudy: React.FC = () => {
  return (
    <div style={{ lineHeight: '1.7', color: 'var(--dark)', fontSize: '1rem' }}>

      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px', marginTop: '30px', color: 'var(--orange)' }}>Overview</h3>
      <p style={{ marginBottom: '20px' }}>
        Project Balik-Bakawan is a community-led effort to save and regrow the mangrove forests in Barangay Sabang, Del Gallego, Camarines Sur. Started in 2021 by local agricultural councils, the project works to protect the coastline from big waves and help local fish populations grow. To make sure the community really understands why these trees matter, we created a sub-project called Learn: Bakawan, which focuses on teaching residents about the environment.
      </p>

      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px', marginTop: '30px', color: 'var(--orange)' }}>The Problem</h3>
      <p style={{ marginBottom: '20px' }}>
        The mangrove rehabilitation faced several major challenges that put its long-term success at risk. Many local residents did not fully understand the vital ecological and economic role that mangroves play, which led to low community engagement and a lack of local ownership over the conservation efforts. Meanwhile, marine debris and garbage from nearby waterways continued to pile up in the area, threatening the health of the ecosystem. Finally, the project lacked steady financial support, forcing local leaders and volunteers to pay for maintenance out of their own pockets, a burden that was simply unsustainable.
      </p>

      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px', marginTop: '30px', color: 'var(--orange)' }}>The Solution</h3>
      <p style={{ marginBottom: '10px' }}>
        We tackled these issues by focusing on both the physical environment and the people living there:
      </p>
      <ul style={{ marginBottom: '20px', marginLeft: '20px', listStyleType: 'disc' }}>
        <li style={{ marginBottom: '8px' }}><strong>Better Care:</strong> We used funding to buy protective nets and seedlings, and we planned for a designated caretaker to monitor the site daily.</li>
        <li style={{ marginBottom: '8px' }}><strong>Digital Presence:</strong> We developed a project website to document progress, increase public awareness, and attract future partnerships.</li>
        <li style={{ marginBottom: '8px' }}><strong>Community Learning:</strong> We held an interactive onsite awareness session to teach residents how mangroves act as a "nature-based solution" to protect the village from storms.</li>
      </ul>

      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px', marginTop: '30px', color: 'var(--orange)' }}>Methodology</h3>
      <p style={{ marginBottom: '10px' }}>
        As the project lead, I managed the entire lifecycle of the initiative, from the initial planning to the final evaluation. My primary focus was on bridging the gap between high-level funding and ground-level action in Barangay Sabang. I was responsible for the following key actions:
      </p>
      <ol style={{ marginBottom: '20px', marginLeft: '20px', listStyleType: 'decimal' }}>
        <li style={{ marginBottom: '8px' }}><strong>Securing Funding:</strong> I acted as the project proponent, writing the proposals and successfully applying for the grants needed to conduct the educational programs. This work was made possible by grants from several organizations: The main rehabilitation work is supported by the <strong>National Geographic Society</strong> and <strong>The Nature Conservancy</strong>. The educational session was funded by the <strong>ADNU Liderato kan Nueva Atenista PairUp Project Grant</strong>.</li>
        <li style={{ marginBottom: '8px' }}><strong>Managing Logistics:</strong> I oversaw the entire venue setup and the distribution of all materials, including 100 flyers, 2 large tarpaulins, and food for 50 people.</li>
        <li style={{ marginBottom: '8px' }}><strong>People Coordination:</strong> I reached out to partners like the Municipal Agricultural and Fishery Council (MAFC) and the local government to secure the venue and coordinate with volunteer speakers.</li>
        <li style={{ marginBottom: '8px' }}><strong>Data and Tracking:</strong> I designed and administered the pre-activity and post-activity surveys to measure changes in community awareness and knowledge.</li>
      </ol>

      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px', marginTop: '30px', color: 'var(--orange)' }}>Impact</h3>
      <p style={{ marginBottom: '10px' }}>
        The project has seen real, measurable success in a short amount of time:
      </p>
      <ul style={{ marginBottom: '20px', marginLeft: '20px', listStyleType: 'disc' }}>
        <li style={{ marginBottom: '8px' }}><strong>Environmental Impact:</strong> We have successfully replanted 1,800 saplings and collected more than 50 bags of trash from the coastline.</li>
        <li style={{ marginBottom: '8px' }}><strong>Educational Growth:</strong> 50 residents attended our training session. After the session, 86% of the participants who completed the test showed a high level of understanding of the key concepts discussed.</li>
        <li style={{ marginBottom: '8px' }}><strong>Community Support:</strong> We formed strong bonds with the youth council (SK) and local leaders, who recognized the critical role of mangroves in safeguarding their community and livelihoods.</li>
      </ul>
    </div>
  );
};

export default BalikBakawanCaseStudy;
