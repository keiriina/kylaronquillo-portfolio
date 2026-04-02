import React from 'react';

const SlimeMouldCaseStudy: React.FC = () => {
  return (
    <div style={{ lineHeight: '1.7', color: 'var(--dark)' }}>
      <p style={{ marginBottom: '20px' }}>
        This is a custom case study component. You can format this however you like using React and standard HTML!
      </p>
      
      <h3 style={{ fontSize: '1.4rem', marginBottom: '10px', marginTop: '30px' }}>The Problem</h3>
      <p style={{ marginBottom: '20px' }}>
        Designing an optimal road network is a complex challenge...
      </p>

      <h3 style={{ fontSize: '1.4rem', marginBottom: '10px', marginTop: '30px' }}>The Solution</h3>
      <p>
        By leveraging the biological algorithms of Slime Mould, we simulated an organic approach to connecting nodes efficiently.
      </p>

      {/* You can also add images directly like this */}
      {/* <img src="/assets/your-image.png" alt="Demo" style={{ width: '100%', borderRadius: '4px', marginTop: '20px' }} /> */}
    </div>
  );
};

export default SlimeMouldCaseStudy;
