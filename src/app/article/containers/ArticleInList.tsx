import React from 'react'
import ArticleList from '../components/ArticleList'

const ArticleInList = ({ cname }: any) => {
  return (
    <div className='flex flex-col justify-start w-full gap-y-3'>
      <ArticleList cname={cname} />
    </div>
  )
}

export default ArticleInList