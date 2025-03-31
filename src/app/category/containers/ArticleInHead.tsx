import React from 'react'
import ArticleTextCenter from '../components/ArticleTextCenter'
import ArticleTextLeft from '../components/ArticleTextLeft'

const ArticleInHead = ({ cname }: any) => {
  return (
    <>
      <div className='flex flex-row w-full h-fit gap-x-4 '>
        <span className='w-8/12 border border-r-black border-y-white border-l-white pr-3'>
          <ArticleTextCenter cname={cname} start='0' end='1'/>
        </span>
        <span className='w-4/12 flex flex-col'>
          <ArticleTextLeft cname={cname} start='1' end='3' />
        </span>
      </div>
      <hr />
    </>
  )
}

export default ArticleInHead