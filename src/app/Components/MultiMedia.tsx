"use client"

import React, { useEffect, useState } from 'react'

const MultiMedia = () => {
  interface Article {
    id: number;
    nameArticle: string;
    imgArticle: string;
    hashtags: string;
    description?: string;
  }
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    fetch("/data.json")
      .then(response => response.json())
      .then((data) => setArticles(data.articles))
      .catch(error => console.error("Lỗi mẹ gòy: ", error));
  })
  return (
    <div className='mt-5 w-full flex justify-center ml-12'>
      <div className='bg-amber-200 w-3/4'>
        <div className='w-full flex justify-start'>
          <div className='flex justify-start gap-8 items-start mt-5'>
            <p className='-ml-10 text-2xl font-bold flex items-center justify-start before:ml-24 before:content-["/"] before:scale-x-200 before:font-bold before:text-red-500 before:mr-2'>MULTIMEDIA</p>
            <a href="video" className='font-bold hover:text-red-600'>VIDEO</a>
            <a href="podcast" className='font-bold hover:text-red-600'>PODCAST</a>
            <a href="longform" className='font-bold hover:text-red-600'>LONGFORM</a>
            <a href="story" className='font-bold hover:text-red-600'>STORY</a>
            <a href="quizz" className='font-bold hover:text-red-600'>QUIZZ</a>
          </div>
        </div>
        <div className='grid grid-cols-2 text-center h-[66vh]'>
          {articles.slice(0, 1).map((article) => (
            <div className='flex flex-col items-center justify-center w-full hover:text-blue-900'
              key={article.id} >

              <a className='w-5/6 h-[45vh]' href={`/article/${article.hashtags}`}>
                <img
                  src="../images/chagee_znews.webp"
                  //  src={article.imgArticle}
                  alt={article.nameArticle} className='w-full h-full object-cover cursor-pointer ' />
              </a>
              <a className='w-5/6 mt-2' href={`/article/${article.hashtags}`}>
                <div className='text-start text-2xl font-bold'>{article.nameArticle}</div>
                <div className='text-start'>{article.description}</div>
              </a>
            </div>
          ))}

          <div className='grid grid-cols-2 grid-rows-2 w-full h-[66vh] items-start'>
            {articles.slice(1, 5).map((article) => (
              <a key={article.id}
                className='cursor-pointer col-span-1 row-span-1 flex flex-col items-center justify-center h-36 mt-8 hover:text-blue-900'
                href={`/article/${article.hashtags}`}>
                <img
                  src="../images/chagee_znews.webp"
                  // src={article.imgArticle}
                  alt={article.nameArticle}
                  className='w-10/12 h-[20vh]'
                />
                <div className='text-start flex-wrap text-wrap w-10/12 h-[33] text-sm font-bold' >{article.nameArticle}</div>
              </a>
            ))}
          </div>
          <span >
          </span>
        </div>
      </div>
    </div>
  )
}

export default MultiMedia