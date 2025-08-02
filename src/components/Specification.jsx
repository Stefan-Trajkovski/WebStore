import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';


export default function Specification() {
  const { state } = useLocation();
  const { specs, description } = state;


  return (
    <div className='w-screen flex justify-center'>
      <div className='max-w-7xl text-2xl w-full  space-y-16 px-6   '>
        <p>
          {description}
        </p>
        <ul className="list-disc pl-5">
          {Object.entries(specs).slice(1,).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}

        </ul>
      </div></div>

  )
}
