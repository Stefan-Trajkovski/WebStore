import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-[#EEEEEE]  w-screen ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="grid grid-cols-1 md:grid-cols-3  mb-8 py-8 space-y-6 md:space-y-0 ">

                    <div >
                        <div className='flex py-4 pb-5 gap-4 items-center '>
                            <img
                                className="max-w-[40px] min-w-[40px] w-[40px] "
                                src="/butterfly.png"
                                alt="butterfly"
                            />
                            <h1 className='text-2xl'>
                                VibeStrings
                            </h1>
                        </div>


                        <div className="space-y-3  ">
                            <div className="flex items-center ">
                                <img
                                    className="max-w-[24px] min-w-[24px] w-[24px] "
                                    src="/sms.png"
                                    alt="sms"
                                />
                                <span className='pl-3'>Enquiry@VibeStrings.com</span>
                            </div>
                            <div className="flex items-center">
                                <img
                                    className="max-w-[24px] min-w-[24px] w-[24px] "
                                    src="/location.png"
                                    alt="location"
                                />
                                <span className='pl-3'> San Francisco</span>
                            </div>
                        </div>

                    </div>










                    <div className=' grid grid-cols-2  '>

                        <div className=' grid gap-y-4 '>
                            <p className='font-bold'>Pages</p>
                            <ul className='flex flex-col gap-y-3'>
                                <li>Store</li>
                                <li>Collections</li>
                                <li>Support</li>
                            </ul>

                        </div>
                        <div className='grid gap-y-4 justify-end '>
                            <p className='font-bold'>Product</p>
                            <ul className='flex flex-col gap-y-3'>
                                <li>Terms</li>
                                <li>Privacy Policy</li>
                                <li>Copyright</li>
                            </ul>

                        </div>

                    </div>






                    <div className='flex flex-col  items-end '>
                        <div>
                            <p className='font-bold  flex'>Follow us</p>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://facebook.com" className="text-gray-600 hover:text-orange-500">
                                    <img src='/Facebook.svg'></img>
                                </a>
                                <a href="https://X.com" className="text-gray-600 hover:text-orange-500">
                                    <img src='/Twitter.svg'></img>
                                </a>
                                <a href="https://Instagram.com" className="text-gray-600 hover:text-orange-500">
                                    <img src='/Instagram.svg'></img>
                                </a>
                            </div>
                        </div>
                    </div>



                </div>
                <div className='flex justify-center pb-6'><p>@ {new Date().getFullYear()} CopyrightVibeSettings</p></div>
            </div>
        </footer>
    )
}
