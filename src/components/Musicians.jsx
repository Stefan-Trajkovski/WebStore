import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
export default function Musicians() {
    const { state } = useLocation();
    const { musicians } = state;
    
    const increment = 2;
    const [visibleCount, setVisibleCount] = useState(increment);

    const handleScroll = () => {
        const scrollTop = window.scrollY || window.pageYOffset;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.offsetHeight;

        if (scrollTop + windowHeight >= docHeight - 100) {
            setVisibleCount(prev => Math.min(prev + increment, musicians.length));
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='w-screen  flex flex-col items-center justify-center space-y-8'>
            <div
                className={` max-w-5xl grid gap-12  ${musicians.length === 1 ? 'grid-cols-1 w-fit ' : 'grid-cols-2  w-full'}`} >
                {musicians.slice(0, visibleCount).map((value, index) => (
                    <div key={index} style={{ backgroundColor: '#FFEFE8' }}>
                        <div className=' p-4 space-y-6 '>

                            <div className=' h-32 md:h-72 w-full overflow-hidden flex items-center  justify-center bg-gray-100' style={{ backgroundColor: '#FFEFE8' }}>
                                <img
                                    src={value.musicianImage}
                                    alt={value.name}
                                    className='w-full h-full object-contain'
                                />
                            </div>
                            <p className='text-center'>{value.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='cursor-pointer' > <img src="/bubble.svg" /></div>
        </div>
    )
}
