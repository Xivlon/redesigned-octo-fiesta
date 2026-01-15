import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section style={{ background: 'white' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center' }}>How It Works</h2>
        <p style={{ textAlign: 'center' }}>
          The R2M Protocol is a 30-day nutritional blueprint designed to support the body naturally.
        </p>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '250px', padding: '20px' }}>
            <h3>Daily Nutrition</h3>
            <ul style={{ textAlign: 'left' }}>
              <li>Replace your breakfast with a nutrient-dense amino acid and enzyme shake.</li>
              <li>Eat two balanced meals during the day and enjoy another shake before bedtime.</li>
              <li>This routine provides consistent, targeted nutrition without the need for constant food tracking.</li>
            </ul>
          </div>
          <div style={{ flex: 1, minWidth: '250px', padding: '20px' }}>
            <h3>Nutritional Fasting & Support</h3>
            <ul style={{ textAlign: 'left' }}>
              <li>Two consecutive days a month, we provide the body with a period of metabolic rest.</li>
              <li>Rather than starving, the body is supported every four hours with targeted botanical nutrients and small portions of the shake.</li>
              <li>This helps maintain nutrient levels while the body's natural systems work to restore balance.</li>
            </ul>
          </div>
          <div style={{ flex: 1, minWidth: '250px', padding: '20px' }}>
            <h3>Adaptation</h3>
            <ul style={{ textAlign: 'left' }}>
              <li>The R2M Protocol helps the body function with more efficiency and less inflammation.</li>
              <li>Your body learns to naturally release stored fat for fuel without the crash or deprivation of traditional dieting.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
