import React from 'react'

const Title = ({ nameTitle }: { nameTitle: string }) => {
  return (
    <div className='flex flex-col items-center w-full mb-2'>
      <div className=' w-full before:content-["/"] before:scale-200 before:text-red-600 before:mr-2 font-bold text-xl'>{nameTitle}</div>
      <hr className='font-black h-3 w-full my-3' />
    </div>
  )
}

export default Title