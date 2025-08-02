import React from 'react'
import { useQuery, gql } from '@apollo/client'
import useGuitar from '../hooks/useGuitar'; 


export default function CharachterList() {

  const { error, data, loading } = useGuitar();




  return (
    <div className='charachterList'>
      {loading ? <div> Spinner </div> : (
        <ul>
          {data.findAllBrands.map((value,index) => (

            <li key={index} >{value.name}</li>
          ))}

        </ul>)}


    </div>
  )
}
