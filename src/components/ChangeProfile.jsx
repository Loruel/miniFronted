import React, { useContext, useState } from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { MiniContext } from '../context/AuthContext'

export default function ChangeProfile() {
    const { user, updateProfileMutation } = useContext(MiniContext)

    const [nombre, setNombre] = useState(user?.nombre || '')
    const [descripcion, setDescripcion] = useState(user?.descripcion || '')
    const [correo, setCorreo] = useState(user?.correo || '')
    const [telefono, setTelefono] = useState(user?.telefono || '')
    const [contraseña, setContraseña] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const token = localStorage.getItem('authToken')

        updateProfileMutation.mutate({
            token,
            userData: { nombre, descripcion, correo, telefono, contraseña }
        })
    }

    return (
        <div className='dark:bg-[#252329]'>
            <div className=' w-full h-12 flex items-center p-2'>
                <figure className='ml-2'>
                    <img src="/devchallenges.svg" alt="DEVCHALLENGS" />
                </figure>
            </div>

            <div className='flex flex-col justify-center items-center'>

                <div className='hidden lg:flex justify-start w-3/5 mb-2'>
                    <Link to={'/profile'}>
                        <button className='text-[#2F80ED] flex justify-center items-center text-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2F80ED" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>

                            Back
                        </button>
                    </Link>

                </div>

                <div className='lg:border-2 lg:border-gray-300 rounded-xl lg:w-3/5 lg:mb-4'>

                    <div className='flex w-full p-2'>
                        <div className='w-full ml-4 dark:text-white'>
                            <h1 className='font-bold text-xl'>
                                Change Info
                            </h1>
                            <p className='text-sm w-10/12'>
                                Changes will be reflected to every services

                            </p>
                        </div>


                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className='p-4 w-full mb-6 dark:text-white'>

                        <div className='w-full h-16 flex items-center mb-4'>

                            <figure className='relative w-2/6 flex rounded-lg lg:w-1/12'>
                                <img className='w-1h-14 h-14 rounded-lg'
                                    src="/profile.png" alt="" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="absolute left-4 bottom-4 size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                                </svg>
                            </figure>


                            <h1 className='w-4/6 ml-2 text-sm'>
                                CHANGE PHOTO
                            </h1>

                        </div>

                        <label className='w-full h-20'>
                            <h1 className='w-full h-4 text-sm mb-2'>
                                Name
                            </h1>
                            <input type='text' value={nombre}
                                onChange={(e) =>
                                    setNombre(e.target.value)}
                                className='w-full border-2 border-gray-300 rounded-lg h-10 p-1 flex items-center shadow-sm lg:w-2/3  dark:bg-[#252329]'
                                placeholder={user?.name || 'Enter your name'} />

                        </label>

                        <label className='w-full h-20'>
                            <h1 className='w-full h-4 text-sm mb-2'>
                                Bio
                            </h1>
                            <input type='text' value={descripcion}
                                onChange={(e) =>
                                    setDescripcion(e.target.value)}
                                className='w-full border-2 border-gray-300 rounded-lg h-10 p-1 flex items-center shadow-sm lg:w-2/3 dark:bg-[#252329]'
                                placeholder={user?.bio || 'Enter your bio'} />
                        </label>

                        <label className='w-full h-20'>
                            <h1 className='w-full h-4 text-sm mb-2'>
                                Email
                            </h1>
                            <input type='text' value={correo} onChange={(e) => setCorreo(e.target.value)} className='w-full border-2 border-gray-300 rounded-lg h-10 p-1 flex items-center shadow-sm lg:w-2/3 dark:bg-[#252329]'
                                placeholder={user?.email} />
                        </label>

                        <label className='w-full h-20'>
                            <h1 className='w-full h-4 text-sm mb-2'>
                                Phone
                            </h1>
                            <input type='text' value={telefono} onChange={(e) => setTelefono(e.target.value)} className='w-full border-2 border-gray-300 rounded-lg h-10 p-1 flex items-center shadow-sm lg:w-2/3 dark:bg-[#252329]' placeholder={user?.phone || 'Enter your phone'} />
                        </label>

                        <label className='w-full h-20'>
                            <h1 className='w-full h-4 text-sm mb-2'>
                                Password
                            </h1>
                            <input type='text' value={contraseña} onChange={(e) => setContraseña(e.target.value)} className='w-full border-2 border-gray-300 rounded-lg h-10 p-1 flex items-center shadow-sm lg:w-2/3 dark:bg-[#252329]    ' placeholder='************' />
                        </label>

                        <div className='w-full mt-4'>
                            <button className='bg-[#2F80ED] text-white w-3/12 h-8 rounded-lg lg:w-1/12'>
                                Save
                            </button>
                        </div>

                    </form>

                </div>

                <Footer />

            </div>




        </div>
    )
}
