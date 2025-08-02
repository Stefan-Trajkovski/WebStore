import React from 'react'

export default function Feed() {
    return (
        <section className='w-screen overflow-x-hidden '>
            <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row lg:gap-24    mx-auto px-4 sm:px-6 lg:px-8">
                <div className='  space-y-4 lg:space-y-12 lg:w-6/12  flex flex-col justify-center'>
                    <div className=' text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center lg:text-start lg:space-y-4  lg:w-fit lg:ps-4  '>
                        Browse and buy your <br></br>
                        <div className=' text-center'><span className='text-orange-500 '> favorite guitars </span> with </div>
                        <div className='text-center '>VibeStrings.</div>
                    </div>
                    <div className=' flex justify-center lg:justify-start space-x-6  pb-4 md:pb-0 '>
                        <div>
                            <img src='/google.svg'></img>
                        </div>
                        <div>
                            <img src='/apple.svg'></img>
                        </div>
                    </div>


                </div>

                <div className='lg:w-6/12  flex justify-center '>
                    <img src="gfeed.svg"></img>
                </div>


            </div>
        </section>
    )
}
