import React from 'react'

const TitleNoUnderline = ({ nameTitle }: any) => {

  return (
    <div className='before'>
      <div className=' w-full before:content-["/"] before:scale-200 before:text-red-600 before:mr-2 font-bold text-xl mb-3'>{nameTitle}</div>
    </div>
  )
}

export default TitleNoUnderline