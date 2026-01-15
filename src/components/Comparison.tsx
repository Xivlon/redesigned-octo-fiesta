import React from 'react';

const Comparison: React.FC = () => {
  return (
    <section className="comparison">
      <div className="container">
        <h2 style={{ textAlign: 'center' }}>Help Your Body When It Needs It Most</h2>
        <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          Most weight loss plans focus on what you have to give up. This approach focuses on giving your body the targeted nutrition it has been missing.
        </p>
        
        <div className="comparison-grid">
          <div className="comp-card synthetic">
            <h3>Traditional Dieting</h3>
            <p>Standard diets often rely on caloric restriction that can leave the body feeling depleted and stressed.</p>
            <ul>
              <li>These plans frequently focus on eating "less food" rather than providing high-quality nutrition.</li>
              <li>Deprivation-based dieting is often difficult to sustain and can lead to energy crashes.</li>
            </ul>
          </div>

          <div className="comp-card natural">
            <h3>The R2M Protocol</h3>
            <ul>
              <li>This regimen is designed to provide high-quality nutrition to support natural metabolic function.</li>
              <li>The protocol utilizes nutrient-dense shakes rich in the amino acids and enzymes the body needs to function efficiently.</li>
              <li>By supporting health at a cellular level, it helps build a foundation for a long-term healthy lifestyle.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
