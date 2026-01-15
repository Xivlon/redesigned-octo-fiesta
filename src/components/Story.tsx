import React from 'react';

const Story: React.FC = () => {
  return (
    <section className="story">
      <div className="container">
        <div className="story-grid">
          <div className="story-text">
            <h2>I Came for the Weight Loss. I Stayed for the Vitality.</h2>
            <p>
              Fifteen years ago, a severe spinal injury changed my daily life. My C-3 through C-6 vertebrae compressed into my spine, resulting in severe nerve damage and chronic pain. After an eight-hour surgery and months of rehabilitation, I had to relearn how to walk. For over a decade, my "normal" involved constant discomfort and high blood pressure that hovered around 140/90.
            </p>
            <div className="quote">
              "I didn't start this protocol to heal everything—I simply wanted to lose weight. But giving my body the right nutrition changed the game."
            </div>
            <p>
              In just 30 days, I released 16 pounds—moving from 201 lbs on December 1st to 185 lbs on December 31st. But the real victory was how I felt: my energy returned, my daily comfort levels improved dramatically, and my body began functioning with more balance than it had in years.
            </p>
            <p>
              <strong>Start:</strong> December 1, 2025 | <strong>Current:</strong> December 31, 2025
            </p>
          </div>
          <div className="story-img">
            <img 
              src="transformation.jpg" 
              alt="Transformation Results and X-Ray of Spinal Injury" 
              style={{ background: '#eee', minHeight: '300px' }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
