import React from 'react'
import useGuitar from '../hooks/useGuitar';
import { gql } from '@apollo/client';
import { Link } from 'react-router-dom';

const IMAGES_QUERY = gql`
 query{
  findAllBrands{
    id,
  	image
}
}
`;

export default function Mid() {

  const { data, loading, error } = useGuitar(IMAGES_QUERY);

  if (loading) return <p>Loading images...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const images = data.findAllBrands || [];


  return (
    <section className='py-16   '>

      <div className=' flex-col items-center justify-center w-screen  space-x-2 space-y-2 pb-6'>

        <div className='text-4xl font-bold  text-center'>
          <span>Featuring the  </span> <span className='text-orange-600 '> Best Brands</span>
        </div>

        <div className='text-center font-light text-xs'>
          <p >Select your preferred brand and explore our exquisite collection.</p>
        </div>

      </div>

      <div className='w-screen flex justify-center'>
        <div className='max-w-7xl mx-auto  sm:px-6 lg:px-8 grid gap-2  justify-center grid-cols-2 md:grid-cols-4  w-screen  mb-16'>
          {images.slice(0, 8).map((value, index) => (
            <div key={index} className='flex justify-center items-center  p-12' >

              <p>{value.description}</p>
              <Link to={`/brand/${value.id}`} state={{
                imageBrand: value.image,
              }}>
                <img className="max-w-full max-h-full object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 mix-blend-multiply"
                  style={{
                    maxWidth: '140px',
                    maxHeight: '60px'
                  }} src={value.image} alt={`Brand ${value}`} /> </Link>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
