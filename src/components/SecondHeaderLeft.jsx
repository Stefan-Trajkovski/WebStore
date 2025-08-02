import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


export default function SecondHeaderLeft() {

  const location = useLocation();
  const name = location.state?.name;

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className='  md:w-6/12 xl:w-8/12 py-8 '>
      <div className='mb-12 lg:mb-12 '>
        <div onClick={goBack} className=' flex w-fit space-x-2 font-500  cursor-pointer ps-0 xl:ps-4 mb-4'>
          <img src="/Vector.svg" alt="back"></img>
          <span>{name ? "Back To List " : "Back to Home"} </span>

        </div>
        <div className='flex justify-center xl:justify-start space-x-4 ps-2  ps-0 xl:ps-10 '>
          <img src="/Butterfly.svg" alt="logo"></img>
          <span className='flex items-center text-xl'>VibeStrings</span>
        </div>
      </div>
      <div className="w-full flex justify-center ">
        <div className='flex flex-col items-center md:items-start space-y-8 px-4 xl:px-0 max-w-2xl'>

          <div className='text-5xl font-bold text-center'>
            {name ? (<p>{name}</p> ) : 
            ( <>Play like a <span className='text-orange-500'>Rock Star</span></>)}
          </div>

          <div className='text-center md:text-left'>
            {name ? ("") :
              (<> With a legacy dating back to the 1950s, Ibanez blends expert craftsmanship with cutting-edge innovation to deliver guitars that inspire creativity and elevate your performance. Trusted by top artists worldwide, Ibanez guitars are built to play fast, sound bold, and stand out on any stage.</>)}
          </div>

        </div>
      </div>
    </div>
  )
}
