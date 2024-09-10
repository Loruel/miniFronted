import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

export default function Profile() {
    return (
        <div className=''>
            <div className=' w-full h-12 flex items-center p-2'>
                <figure className='ml-2'>
                    <img src="" alt="DEVCHALLENGS" />
                </figure>
            </div>


            <div className='w-full h-28 flex flex-col items-center justify-center p-2'>
                <h1 className='font-bold text-2xl'>
                    Personal info
                </h1>
                <p className='text-base'>
                    Basic info, like your name and photo
                </p>
            </div>

            <div className='flex flex-col justify-center items-center'>

                <div className='lg:border-2 lg:border-gray-300 rounded-xl lg:w-3/5 lg:mb-4'>

                    <div className='flex p-2'>
                        <div className='w-2/3 ml-4'>
                            <h1 className='font-bold text-xl'>
                                Profile
                            </h1>
                            <p className='text-sm w-10/12'>
                                Some info may be visible to other people
                            </p>
                        </div>

                        <div className='w-1/3 flex justify-center items-center mr-4'>
                            <Link className='w-full h-full flex justify-center items-center lg:justify-end' to={'/editprofile'}>
                                <button className='border-2 border-gray-400 rounded-xl w-5/6 h-10 flex justify-center items-center text-gray-400 lg:w-1/2 '>
                                    Edit
                                </button>
                            </Link>

                        </div>
                    </div>

                    <div className='p-4 w-full'>

                        <div className='w-full h-16 flex items-center border-b-2 border-gray-300'>
                            <h1 className='w-2/6 ml-2 text-gray-400'>
                                PHOTO
                            </h1>
                            <figure className='w-4/6 flex justify-end mr-2 lg:justify-start'>
                                <img className='w-1h-14 h-14 rounded-lg'
                                    src="/profile.png" alt="" />
                            </figure>

                        </div>

                        <div className='w-full h-16 flex items-center border-b-2 border-gray-300'>
                            <h1 className='w-2/6 ml-2 text-gray-400'>
                                NAME
                            </h1>
                            <p className='w-4/6 flex justify-end mr-2 text-end lg:justify-start lg:text-start'>
                                Francisco Vazquez
                            </p>
                        </div>


                        <div className='w-full h-16 flex items-center border-b-2 border-gray-300 '>
                            <h1 className='w-2/6 ml-2 text-gray-400'>
                                BIO
                            </h1>
                            <p className='w-4/6 flex justify-end mr-2 text-end bg-red-100> lg:justify-start lg:text-start'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit...

                            </p>
                        </div>

                        <div className='w-full h-16 flex items-center border-b-2 border-gray-300'>
                            <h1 className='w-2/6 ml-2 text-gray-400'>
                                EMAIL
                            </h1>
                            <p className='w-4/6 flex justify-end mr-2 text-end lg:justify-start lg:text-start'>
                                francisco.example@example.com

                            </p>
                        </div>

                        <div className='w-full h-16 flex items-center border-b-2 border-gray-300'>
                            <h1 className='w-2/6 ml-2 text-gray-400'>
                                PHONE
                            </h1>
                            <p className='w-4/6 flex justify-end mr-2 text-end lg:justify-start lg:text-start'>
                                5511223366

                            </p>
                        </div>

                        <div className='w-full h-16 flex items-center border-b-2 border-gray-300 mb-10 lg:mb-0 lg:border-b-0'>
                            <h1 className='w-2/6 ml-2 text-gray-400'>
                                PASSWORD
                            </h1>
                            <p className='w-4/6 flex justify-end mr-2 text-end lg:justify-start lg:text-start'>
                                EXAMPLE123francisco

                            </p>
                        </div>

                        {/*  <div className='w-full'>
    <button className='bg-[#2F80ED] text-white w-3/12 h-8 rounded-lg'>
        Save
    </button>
</div> */}

                    </div>

                </div>


                <Footer />

            </div>

        </div>
    )
}
