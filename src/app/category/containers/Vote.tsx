import Image from 'next/image'
import React from 'react'
const Vote = () => {
    return (
        <div className='h-96 bg-gray-500 flex flex-col'>
            <div className='h-1/5'>
                <Image
                    src={`/Images/logo.jpg`}
                    alt="image"
                    height={100}
                    width={100} />
            </div>
        </div>
    )
}

export default Vote