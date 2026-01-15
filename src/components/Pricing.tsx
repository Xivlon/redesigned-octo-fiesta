import React from 'react';

interface PriceCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  originalPrice: number;
  currentPrice: number;
  description: string;
  features: string[];
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
    <div className="price-card">
      <img src={imageSrc} alt={imageAlt} />
      <h3>{title}</h3>
      <div className="price">
        <span>${originalPrice}</span> ${currentPrice}
      </div>
      <p>{description}</p>
      <ul className="price-card-features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button onClick={onSelect} className="btn">Select {title.split(' ')[0]}</button>
    </div>
  );
};

const Pricing: React.FC<{setSelectedPack: (pack: string) => void}> = ({setSelectedPack}) => {
  const handleSelectBasic = () => {
    setSelectedPack('Basic Wellness Pack');
    document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
  };

  const handleSelectPremium = () => {
    setSelectedPack('Premium Reset Pack');
    document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <section className="pricing">
      <div className="container">
        <h2 className="pricing-title">Take The First Step On Your Wellness Journey</h2>
        <p className="pricing-subtitle">
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
            onSelect={handleSelectPremium}
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
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;