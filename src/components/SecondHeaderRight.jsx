import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


export default function SecondHeaderRight() {
  const location = useLocation();
  const imageBrand = location.state?.imageBrand;
  const imageGuitar = location.state?.guitarBrand;
  return (
    <div className='md:w-6/12 xl:w-4/12 hidden md:flex justify-start items-start relative  '>

      <div className='absolute top-0 right-0 w-full h-full flex items-start justify-end '>
        <img src='/ibanezSplash.svg' alt="orange background" className='w-auto max-w-[410px] xl:max-w-[480px] max-h-[359px]' />
      </div>


      <div className='absolute top-16 xl:top-24 -left-10 xl:-left-12 right-0 w-full h-full flex items-start justify-end z-10'>
        {imageBrand ? <img src={imageBrand} alt="brandImage" className='w-auto max-w-[240px] max-h-[180px] transform filter grayscale opacity-40' /> :

          <img src={imageGuitar} alt="guitar" className='w-auto max-w-[300px] max-h-[220px] transform -rotate-45  ' />}

      </div>
    </div>
  )
}
