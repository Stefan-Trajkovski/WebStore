import React from 'react';


export function FeatureCard({ icon, title, description }) {
  return (
    <div className="relative p-8  rounded-3xl  transition-colors">
      <div className="text-center">

        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center">
            <img src={icon}></img>
          </div>
        </div>


        <h3 className="text-white font-bold text-xl mb-4 ">
          {title}
        </h3>


        <p className="text-gray-400 text-sm ">
          {description}
        </p>
      </div>
    </div>
  );
}

