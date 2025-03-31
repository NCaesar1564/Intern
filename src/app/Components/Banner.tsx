import React from 'react'
import '@/app/globals.css'

const Banner = () => {

  return (
    <div id='Banner'>
      <a href="/" className='w-full bg-gray-300 flex justify-center h-64 items-center not-md:hidden min-h-fit'>
        <img src='../Images/banner.png' alt="Banner" className=' h-64 w-1/2 bg-center bg-no-repeat' />
      </a>
    </div>
  ) 
}

export default Banner