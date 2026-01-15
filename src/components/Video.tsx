const Video: React.FC = () => {
  return (
    <section className="video-section">
      <div className="container">
        <h2>A Brief Introduction</h2>
        <div className="video-container">
          <video 
            controls 
            poster="video-thumbnail.jpg" 
            preload="none" 
            aria-label="A brief Introduction to the R2M Protocol"
          >
            <source src="https://pub-4140993c3b6c43a3aaf2d64bbc6d4309.r2.dev/are_you_toxic_(1080p).mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Video;
