import React from 'react'

import { FeatureCard } from './FeatureCard';
export default function Black() {
  const features = [
    {
      id: 1,
      icon: './chess.svg',
      title: "SMOOTH BROWSING",
      description: "Lorem ipsum dolor sit amet consectetur. Adipiscing elit consectetur lorem ut.",
    },
    {
      id: 2,
      icon: './truck.svg',
      title: "EASY DELIVERY",
      description: "Lorem ipsum dolor sit amet consectetur. Adipiscing elit consectetur lorem ut.",
    },
    {
      id: 3,
      icon: 'wallet.svg',
      title: "SWIFT PAYMENTS",
      description: "Lorem ipsum dolor sit amet consectetur. Adipiscing elit consectetur lorem ut.",
    }
  ];

  return (
    <section className="bg-black py-16 px-8 w-screen">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-2">
            Why try <span className="text-orange-500">VibeStrings?</span>
          </h2>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );

}
