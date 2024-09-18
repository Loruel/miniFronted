import React, { useContext } from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { MiniContext } from '../context/AuthContext'
import ModalProfile from './ModalProfile'

export default function Profile() {
    const { user, toggleModal } = useContext(MiniContext)
    /* const setLocation = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('authToken')
        console.clear()
        setLocation('/')
    } */

    return (
        <div className='dark:bg-[#252329]'>
            <div className=' w-full h-12 flex items-center p-2'>
                <figure className='ml-2'>
                    <img src="/devchallenges.svg" alt="DEVCHALLENGS" />
                </figure>
                <div className='w-full h-full flex justify-end'>

                    <button
                        onClick={toggleModal}
                        className='flex justify-end items-center w-32 mr-2'>
                        <figure className='w-8'>
                            <img
                                className='rounded-md'
                                src="/profile.png" alt="" />
                        </figure>
                        <p className='ml-2 font-semibold hidden  lg:block'>
                            {user?.name?.split(' ')[0]} 
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 hidden  lg:block">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                    </button>

                    <ModalProfile />

                </div>
            </div>


            <div className='w-full h-28 flex flex-col items-center justify-center p-2'>
                <h1 className='font-bold text-2xl dark:text-white'>
                    Personal info
                </h1>
                <p className='text-base dark:text-white'>
                    Basic info, like your name and photo
                </p>

            </div>

            <div className='flex flex-col justify-center items-center'>

                <div className='lg:border-2 lg:border-gray-300 rounded-xl lg:w-3/5 lg:mb-4'>

                    <div className='flex p-2'>
                        <div className='w-2/3 ml-4 dark:text-white'>
                            <h1 className='font-bold text-xl'>
                                Profile
                            </h1>
                            <p className='text-sm w-10/12'>
                                Some info may be visible to other people
                            </p>
                        </div>

                        <div className='w-1/3 flex justify-center items-center mr-4'>
                            <Link className='w-full h-full flex justify-center items-center lg:justify-end' to={'/editprofile'}>
                                <button className='border-2 border-gray-400 rounded-xl w-5/6 h-10 flex justify-center items-center text-gray-400 lg:w-1/2 dark:border-white dark:text-white'>
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
                            <p className='w-4/6 flex justify-end mr-2 text-end lg:justify-start lg:text-start dark:text-white'>
                                {user?.name || 'Enter your name!'}
                            </p>
                        </div>


                        <div className='w-full h-16 flex items-center border-b-2 border-gray-300 '>
                            <h1 className='w-2/6 ml-2 text-gray-400'>
                                BIO
                            </h1>
                            <p className='w-4/6 flex justify-end mr-2 text-end bg-red-100> lg:justify-start lg:text-start dark:text-white'>
                                {user?.bio || 'Enter your bio!'}

                            </p>
                        </div>

                        <div className='w-full h-16 flex items-center border-b-2 border-gray-300'>
                            <h1 className='w-2/6 ml-2 text-gray-400'>
                                EMAIL
                            </h1>
                            <p className='w-4/6 flex justify-end mr-2 text-end lg:justify-start lg:text-start dark:text-white'>
                                {user?.email}

                            </p>
                        </div>

                        <div className='w-full h-16 flex items-center border-b-2 border-gray-300'>
                            <h1 className='w-2/6 ml-2 text-gray-400'>
                                PHONE
                            </h1>
                            <p className='w-4/6 flex justify-end mr-2 text-end lg:justify-start lg:text-start dark:text-white'>
                                {user?.phone || 'Enter your phone!'}

                            </p>
                        </div>

                        <div className='w-full h-16 flex items-center border-b-2 border-gray-300 mb-10 lg:mb-0 lg:border-b-0'>
                            <h1 className='w-2/6 ml-2 text-gray-400'>
                                PASSWORD
                            </h1>
                            <p className='w-4/6 flex justify-end mr-2 text-end lg:justify-start lg:text-start dark:text-white'>
                                ************

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
