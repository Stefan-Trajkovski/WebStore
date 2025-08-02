import React from 'react'

export default function Header() {
    return (
        <header className='w-screen flex justify-center  '>
            <div className="max-w-7xl w-full flex flex-col md:flex-row md:flex     ">

                <div className='lg:w-6/12  '>
                    <div className='flex pt-8 space-x-2 pb-8 ps-2 xl:ps-0'>
                        <img
                            className="max-w-[32px] min-w-[32px] w-[32px] "
                            src="/butterfly.png"
                            alt="butterfly"
                        />
                        <h5 className='text-xl flex items-center'>
                            VibeStrings
                        </h5>
                    </div>
                    <div className='flex justify-center pb-4'> 
                    <div className=' h-4/6 flex flex-col  justify-center items-center px-2 lg:px-0 lg:ps-4 sm:ps-6 lg:ps-4  w-fit '>
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight space-y-6 py-6">
                            Browse top quality<br />
                            <span className='flex justify-center gap-x-4'>
                                <span className="text-orange-500">Guitars </span>{" "}
                                online</span>
                        </h1>
                        <p className='w-full text-md lg:text-lg  w-fit'>Explore 50k+ latest collections of branded guitars <br></br> <span className='lg:flex lg:justify-center '> online with VibeStrings.</span></p>


                    </div></div>


                </div>


                <div className=' flex justify-end h-full lg:w-6/12'>
                    <img className='  object-fit rounded-bl-[360px] rounded-br-[151px]' src="/guitar.svg"   alt="butterfly"></img>

                </div>


            </div>
        </header>
    )
}
