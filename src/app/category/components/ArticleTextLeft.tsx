"use client"
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const ArticleLeft = ({ cname, start, end }: any) => {
  interface Articles {
    id: number;
    nameArticle: string;
    imgArticle: string;
    description: string;
    hashtags: string;
    category: string;
  }
  const [articles, setArticle] = useState<Articles[]>([]);
  const ArticleFiltered = articles.filter(article => article.category === cname)
  useEffect(() => {
    axios.get('/data.json')
      .then(res => setArticle(res.data.articles))
      .catch(err => console.error(err))
  }, []);
  return (
    <>
      {ArticleFiltered.slice(start, end).map((article, index) => (
        <div key={article.id}>
          <a className='flex flex-col justify-center cursor-pointer hover:text-blue-700 ' href={`/article/${article.hashtags}`}>
            <Image
              src={article.imgArticle}
              alt={article.nameArticle}
              className='w-full h-[200px] border max-h-4/5'
              width={200}
              height={500}
            />
            <p className='font-bold max-h-1/5 mb-6'>{article.nameArticle}</p>
          </a>
          {/* {index !== ArticleFiltered.slice(-2).length - 1 && <hr className='mb-6' />} */}
        </div>
      ))}
    </>
  )
}

export default ArticleLeft