import React, { useCallback, useState } from 'react'

const TitleCenter = ({ nameTitle }: any) => {
    return (
        <div className='flex flex-col items-center w-full mb-2'>
            <h1 className='w-full before:mr-2 font-bold text-5xl text-center mt-12 mb-5'>
                {nameTitle}
            </h1>
            <div className="w-full h-[1.5px] bg-black my"></div>

        </div>
    )
}

export default TitleCenter