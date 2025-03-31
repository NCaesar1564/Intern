import React, { useCallback, useState } from 'react'

const TitileLeft = ({ nameTitle } : any) => {  
  return (
    <div className='flex flex-col items-center w-full'>
        <div className=' w-full before:content-["/"] before:scale-200 before:text-red-600 before:mr-2 font-bold text-xl'>{nameTitle}</div>
        <hr className='font-black h-3 w-full mt-3' />
    </div>
  )
}

export default TitileLeft