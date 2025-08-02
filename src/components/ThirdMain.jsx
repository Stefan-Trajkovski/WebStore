import React from 'react'
import Specification from './Specification';
import Musicians from './Musicians';
import { useState } from 'react';
import SecondHeader from './SecondHeader';
import Footer from './Footer';

export default function ThirdMain() {
    const [selectedTab, setSelectedTab] = useState('spec'); 

    const showSpecificationsComponent = () => setSelectedTab('spec');
    const showMusiciansComponent = () => setSelectedTab('musicians');

    return (
        <div className='w-screen flex flex-col items-center space-y-12'>
            <SecondHeader/>
            <div className='flex justify-center w-screen 3xl:max-w-7xl '>
                <div onClick={showSpecificationsComponent} className={`flex cursor-pointer lg:text-3xl xl:text-xl w-3/6 justify-center p-3 border-b-4 transition-colors duration-300 
                    ${selectedTab === 'spec' ? 'border-orange-500 text-orange-500' : 'border-transparent hover:border-orange-500'}`}>
                    Specification
                </div>
                <div onClick={showMusiciansComponent} className={`flex cursor-pointer lg:text-3xl xl:text-xl w-3/6 justify-center p-3 border-b-4 transition-colors duration-300 
                ${selectedTab === 'musicians' ? 'border-orange-500 text-orange-500' : 'border-transparent hover:border-orange-500'}`}
                > Who Plays it?</div>
            </div>
            {selectedTab === 'spec' && <Specification />}
            {selectedTab === 'musicians' && <Musicians />}
            <Footer/>
        </div>
    );
}