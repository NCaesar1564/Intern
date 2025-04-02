import React from 'react'

const TitleNoUnderline = ({ nameTitle }: { nameTitle: string }) => {

  return (
    <div className={`w-full before:content-["/"] before:scale-200 before:text-red-600 before:mr-2 font-bold  mb-3 not-lg:text-nowrap whitespace-nowrap ${nameTitle.length > 10 ? '' : 'not-lg:text-xl'}`}>{nameTitle}</div>
  )
}

export default TitleNoUnderline