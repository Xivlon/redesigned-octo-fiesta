import React from 'react';

const Comparison: React.FC = () => {
  return (
    <section className="comparison">
      <div className="container">
        <h2 className="section-title">Help Your Body When It Needs It Most</h2>
        <p className="section-subtitle">
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

        <div className="benefits-section">
          <h3 className="benefits-heading">Exploring The Advantages</h3>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h4>Trimming Body Fat</h4>
              <p>Trimming Visceral Body Fat by 33% in 8 weeks to attain a leaner, healthier you. You don't just lose pounds you also lose inches. Note: Participants in the studies were not allowed to exercise, because that would affect the overall result.</p>
            </div>

            <div className="benefit-card">
              <h4>Stable Blood Sugar</h4>
              <p>R2M Protocol achieves a significant 6.2% reduction in diabetes participants' blood sugar levels and a drop in the need for insulin by 41% in 30 days.</p>
            </div>

            <div className="benefit-card">
              <h4>Rapid Weight Loss</h4>
              <p>Rapid Safe Weight Loss in peer-reviewed human trial studies. Participants achieved an impressive 16-pound weight loss in just 30 days that took 12 months in studies of other traditional diet weight loss programs. These results were achieved despite the fact participants were not allowed to exercise. Yet, they gained 6 to 9% lean muscle which on diets the majority of what you lose is lean muscle.</p>
            </div>

            <div className="benefit-card">
              <h4>Optimized Cholesterol</h4>
              <p>Achieve cardiovascular wellness with optimized cholesterol levels, empowering your heart health journey. In the peer-reviewed human trial studies the results after just 30 days shocked the researchers. Cholesterol (fat lipids) was reduced by 15%. LDL bad cholesterol was reduced by 13%. Triglycerides were reduced by 24% all down in a month.</p>
            </div>

            <div className="benefit-card">
              <h4>Enhanced Energy</h4>
              <p>The peer-reviewed human trial participants also experienced more energy, less fatigue, which is a testament to the program. Significant reductions in stress were a common result for participants. Journal of The American Medical Association 12-month study of over 48 studies and 7286 people showed mediocre results.</p>
            </div>

            <div className="benefit-card">
              <h4>Optimized Digestion</h4>
              <p>R2M Protocol's meal plan is crafted for healthy digestion, and efficient elimination, by the world's leading nutritional researchers. Researchers observed a massive increase in good gut bacteria of the microbiome. In peer-reviewed human trial studies published in Nature Communications, and Frontiers in Nutrition.</p>
            </div>
          </div>

          <div className="benefits-footer">
            <a href="#contact" className="learn-more-btn">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
