import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import useGuitar from '../hooks/useGuitar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const GUITARS_QUERY = gql`
  query GetBrandModels($id: ID!) {
    findBrandModels(
      id: $id,
      sortBy: {
        field: price,
        order: DESC
      }
    ) {
      id
      name
      price
      image
      type
      description
   		specs{
        bodyWood
        fingerboardWood
        tuners
        scaleLength
        bridge
      }
      musicians{
      name
      musicianImage
    }}
  }
`;

const GUITARSCATEGORY_QUERY = gql`
  query findAllBrands {
    findAllBrands {
      id
      categories
    }
  }
`;


export default function Guitars() {

  const { id } = useParams();
  const dropdownRef = useRef(null);
  const { data, loading, error } = useGuitar(GUITARS_QUERY, { id });
  const { data: data1 } = useGuitar(GUITARSCATEGORY_QUERY)


  const [models, setModels] = useState([]);
  const [filterTypeInput, setFilterTypeInput] = useState('');
  const [filterNameInput, setFilterNameInput] = useState('');
  const guitars = data?.findBrandModels || [];
  const brandList = data1?.findAllBrands || [];

  const guitarTypes = brandList.find(x => x.id === id);


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setModels(data?.findBrandModels || [])
  }, [data]);



  useEffect(() => {
    function handleClickOutside(event) {

      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  function handleFilterChange(selectedType) {
    setFilterTypeInput(selectedType);
    setIsDropdownOpen(false);

    if (selectedType === '' || selectedType === 'All') {
      setModels(data?.findBrandModels || []);
    } else {
      const filtered = data?.findBrandModels.filter(model =>
        model.type?.toLowerCase() === selectedType.toLowerCase()
      );
      setModels(filtered);
    }
  }

  function handleFilterNameChange(e) {
    const value = e.target.value;
    setFilterNameInput(value);

    if (value.trim() === '') {
      setModels(data?.findBrandModels || []);
    } else {
      const filtered = (data?.findBrandModels || []).filter(model =>
        model.name?.toLowerCase().includes(value.toLowerCase())
      );
      setModels(filtered);
    }
  }

  if (loading) return <p>Loading Guitars...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className='w-screen flex justify-center'>
      <div className='max-w-7xl w-full '>
        <div className=' flex flex-col items-center space-y-8 '>
          <h1 className='font-bold text-3xl'>Check out the <span className='text-orange-500'>Selection </span> </h1>
          <div className='flex space-x-2 '>

            <div className='flex flex-col sm:flex-row gap-4 w-full max-w-md'>
              <div className='relative flex-1 border-2 rounded' ref={dropdownRef}>
                <div
                  className='flex items-center justify-between  rounded px-3 py-2 cursor-pointer bg-white'
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <div className='flex items-center space-x-2 '>
                    <img src="/filter.svg" alt="Filter" className="max-w-[20px] max-h-[20px]" />
                    <span className='text-gray-400 '>
                      {filterTypeInput || 'Filter by type'}
                    </span>
                  </div>


                </div>

                {isDropdownOpen && (
                  <div className='absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-10'>
                    <div
                      className='px-3 py-2 hover:bg-gray-100 cursor-pointer'
                      onClick={() => handleFilterChange('')}
                    >
                      All Types
                    </div>
                    {guitarTypes.categories.map((type, index) => (
                      <div
                        key={index}
                        className='px-3 py-2 hover:bg-gray-100 cursor-pointer border-t border-gray-100'
                        onClick={() => handleFilterChange(type.charAt(0).toUpperCase() + type.slice(1).toLowerCase())}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()}
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>


            <div className='flex items-center xl:space-x-4 p-2 border-2 rounded'>
              <span>  <img src="/search.svg" alt="Filter" className="max-w-[20px] max-h-[20px]" /> </span>
              <input
                placeholder='Search by name'
                value={filterNameInput}
                onChange={handleFilterNameChange}
              />
            </div>
          </div>
        </div>
        <div className='  px-4 md:px-0 grid  grid-cols-2 justify-items-center  items-center  gap-1   xl:grid-cols-3 py-8 '>
          {models.map((value, index) => (
            <div key={index} className="flex flex-col items-center xl:items-start justify-center aspect-square  w-full xl:w-fit  py-4  ">
              <Link to={`/brand/${value.id}/details`} state={{
                name: value.name,
                specs: value.specs,
                musicians: value.musicians,
                description: value.description,
                guitarBrand: value.image,

              }}>

                <img className="max-w-full max-h-full    lg:max-w-[420px] lg:max-h-[330px]"
                  src={value.image} alt={`Brand ${value}`} />
              </Link>



              <div className="w-fit pt-4 lg:pt-20 space-y-2 flex flex-col items-center  lg:flex-none lg:block ">

                <p className='font-bold w-fit ' >{value.name}</p>
                <p className='w-fit '> <span>$</span>{value.price}</p></div>

            </div>


          ))}
        </div>

        <div className='flex  justify-between items-center'>
          <div className='font-light text-xs xl:text-lg'>Showing <span className='font-bold'>{models.length}</span> results from <span className='font-bold'>{guitars.length}</span></div>
          <div><img src="/more.svg"></img></div>
        </div>
      </div>


    </section>
  )
}
