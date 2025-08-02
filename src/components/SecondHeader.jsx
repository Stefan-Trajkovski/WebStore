import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import SecondHeaderRight from './SecondHeaderRight';
import SecondHeaderLeft from './SecondHeaderLeft';
export default function SecondHeader() {


    return (
        <header className=' w-screen flex justify-center relative '>

            <div className="3xl:max-w-7xl w-full  flex justify-center mb-24 mx-auto">
                <SecondHeaderLeft/>
                <SecondHeaderRight/>
            </div>
        </header>
    )
}