import React from 'react';

interface PriceCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  originalPrice: number;
  currentPrice: number;
  description: string;
  features: string[];
  isBestValue?: boolean;
  onSelect: () => void;
}

const PriceCard: React.FC<PriceCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  originalPrice,
  currentPrice,
  description,
  features,
  onSelect,
}) => {
  return (
    <div>
      <img src={imageSrc} alt={imageAlt} />
      <h3>{title}</h3>
      <div className="price">
        <span>${originalPrice}</span> ${currentPrice}
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

const Pricing: React.FC = () => {
  const handleSelectBasic = () => {
    // TODO: Implement order processing
    alert('Basic Wellness Pack selected. Order processing to be implemented.');
  };

  const handleSelectPremium = () => {
    // TODO: Implement order processing
    alert('Premium Reset Pack selected. Order processing to be implemented.');
  };

  return (
    <section className="pricing" style={{ background: '#f4f4f4' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Take The First Step On Your Wellness Journey</h2>
        <p style={{ textAlign: 'center', marginBottom: '50px', color: '#666' }}>
          *Prices reflect Subscription Rewards pricing.
        </p>
        <div className="pricing-grid">
          <PriceCard
            imageSrc="/IMG_2288.jpeg"
            imageAlt="Basic Wellness Pack"
            title="Basic Wellness Pack"
            originalPrice={222}
            currentPrice={167}
            description="Perfect for getting started."
            features={[
              'Save $55 on this order',
              'Includes 30-day Shake Supply',
              'Cleanse Support',
              'Free Shipping',
            ]}
            onSelect={handleSelectBasic}
          />
          <PriceCard
            imageSrc="/IMG_2286.jpeg" 
            imageAlt="Premium Reset Pack"
            title="Premium Reset Pack"    
            originalPrice={439}
            currentPrice={330}
            description="The complete transformation kit."
            features={[
              'Save $109 on this order',
              'Full Shake & Cleanse Supply',
              'Premium Snacks & Adaptogens',
              'Free Shipping',
            ]}
            onSelect={handleSelectPremium}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;