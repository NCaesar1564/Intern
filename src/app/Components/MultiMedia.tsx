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
    <div className='mt-5 w-full flex justify-center'>
      <div className='bg-amber-200 w-3/4 not-lg:w-full'>
        <div className='w-full flex justify-start'>
          <div className='flex justify-start gap-8 items-start mt-5 w-full not-lg:ml-3 not-lg:gap-2'>
            <p className='-ml-10 text-2xl font-bold flex items-center justify-start before:ml-24 before:content-["/"] before:scale-x-200 before:font-bold before:text-red-500 before:mr-2 not-lg:hidden'>MULTIMEDIA</p>
            <a href="category/video" className='font-bold hover:text-red-600 not-lg:text-sm'>VIDEO</a>
            <a href="category/podcast" className='font-bold hover:text-red-600 not-lg:text-sm'>PODCAST</a>
            <a href="category/longform" className='font-bold hover:text-red-600 not-lg:text-sm'>LONGFORM</a>
            <a href="category/story" className='font-bold hover:text-red-600 not-lg:text-sm'>STORY</a>
            <a href="category/quizz" className='font-bold hover:text-red-600 not-lg:text-sm'>QUIZZ</a>
          </div>
        </div>
        <div className='grid grid-cols-2 text-center h-[66vh]'>
          {articles.slice(0, 1).map((article) => (
            <div className='flex flex-col items-center justify-center w-full hover:text-blue-900 not-lg:hidden'
              key={article.id} >

              <a className='w-5/6 h-[45vh]' href={`/article/${article.hashtags}`}>
                <img
                  src={article.imgArticle}
                  className='w-full h-full object-cover cursor-pointer border border-black'
                  alt={article.nameArticle} />
              </a>
              <a className='w-5/6 mt-2' href={`/article/${article.hashtags}`}>
                <div className='text-start text-2xl font-bold '>{article.nameArticle}</div>
                <div className='text-start'>{article.description}</div>
              </a>
            </div>
          ))}

          <div className='grid grid-cols-2 grid-rows-2 w-full h-[66vh] items-start not-lg:items-center not-lg:col-span-4'>
            {articles.slice(1, 5).map((article) => (
              <a key={article.id}
                className='cursor-pointer col-span-1 row-span-1 flex flex-col items-center justify-center h-36 mt-5 hover:text-blue-900'
                href={`/article/${article.hashtags}`}>
                <img
                  // src="../images/chagee_znews.webp"
                  src={article.imgArticle}
                  alt={article.nameArticle}
                  className='w-10/12 h-[20vh]
                  border border-black'
                />
                <div className='text-start flex-wrap text-wrap w-10/12 h-[33] text-sm font-bold not-lg:text-xs' >{article.nameArticle}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MultiMedia