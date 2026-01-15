const PriceCard: React.FC<PriceCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  originalPrice,
  currentPrice,
  description,
  features,
  isBestValue,
  onSelect,
}) => {
  return (
    <div 
      className="price-card" 
      style={isBestValue ? { border: '5px solid var(--accent)', position: 'relative', zIndex: 10 } : {}}
    >
      {isBestValue && (
        <div style={{ 
          background: 'var(--accent)', 
          color: 'white', 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          padding: '5px 0', 
          borderRadius: '8px 8px 0 0', 
          zIndex: 11  // Keep this above the card
        }}>
          Best Value
        </div>
      )}
      {/* Set z-index for the image */}
      <img 
        src={imageSrc} 
        alt={imageAlt} 
        style={{ zIndex: 0, position: 'relative' }} // Keep it lower than 'Best Value'
      />
      <h3>{title}</h3>
      <div className="price">
        <span>${originalPrice}</span> 
        <span>${currentPrice}</span>
      </div>
      <p>{description}</p>
      <ul style={{ textAlign: 'left', margin: '20px 0' }}>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button onClick={onSelect} className="btn">Select {title.split(' ')[0]}</button>
    </div>
  );
};
