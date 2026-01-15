import React, { useState, useEffect } from 'react';

const galleryImages = [
  '/gallery/transform.png',
  '/gallery/spine.png',
  '/gallery/spine2.png',
  '/gallery/Screenshot 2026-01-15 at 17-36-47 My Landing Page.pdf.png'
];

const Story: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % galleryImages.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="story">
      <div className="container">
        <div className="story-grid">
          <div className="story-text">
            <h2>Came for the Weight Loss-Stayed for the Vitality</h2>
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
            <div className="story-slideshow-container">
              <img 
                src={galleryImages[currentImageIndex]} 
                alt="Transformation Results and X-Ray of Spinal Injury" 
              />
              <div className="story-nav-dots">
                {galleryImages.map((_, index) => (
                  <div
                    key={index}
                    className={`story-nav-dot ${index === currentImageIndex ? 'active' : ''}`}
                    role="button"
                    tabIndex={0}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={index === currentImageIndex || undefined}
                    onClick={() => setCurrentImageIndex(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === 'Space') {
                        e.preventDefault();
                        setCurrentImageIndex(index);
                      }
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
