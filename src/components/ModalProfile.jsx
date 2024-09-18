import React, { useContext } from 'react'
import { MiniContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function ModalProfile() {
    const { openModal } = useContext(MiniContext)
    const setLocation = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('authToken')
        console.clear()
        setLocation('/')
    }

    return (
        openModal && (

            <div className='bg-white top-12 w-6/12 h-40 p-2 ml-1 mr-1 flex flex-col fixed rounded-xl z-50 border shadow-black shadow-sm justify-center items-center lg:w-2/12'>
                <div className='w-full h-full'>
                    <div className='w-full h-1/3 flex items-center p-2 cursor-pointer'>
                        <figure className='w-1/6 bg-black rounded-full flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </figure>
                        <p className='ml-2'>
                            My Profile
                        </p>
                    </div>

                    <div className='w-full h-1/3 flex items-center p-2 cursor-pointer'>
                        <figure className='w-1/6 flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                            </svg>
                        </figure>
                        <p className='ml-2'>
                            Group Chat
                        </p>
                    </div>

                    <div className='w-full h-1/3 flex items-center p-2 cursor-pointer'
                    onClick={handleLogout}>
                        <figure className='w-1/6 flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                            </svg>
                        </figure>
                        <p className='ml-2 text-red-600'>
                            Logout
                        </p>
                    </div>
                </div>

            </div>

        )

    )
}
