import React from 'react'

export default function Footer() {
    return (
        <div className='flex w-full h-10 items-center text-gray-400 text-sm lg:w-1/3 lg:mb-14'>
            <div className='flex w-1/2'>
                <p className='ml-2'>
                    Created by
                </p>
                <p className='ml-2 font-semibold'>
                    Loruel
                </p>
            </div>

            <p className='w-1/2 flex justify-end mr-2'>
                LLO.com
            </p>
        </div>
    )
}
