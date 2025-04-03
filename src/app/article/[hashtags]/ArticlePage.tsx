"use client"
import Article from '@/app/Components/Article';
import Header from '@/app/category/containers/Header';
import { Metadata, ResolvingMetadata } from 'next';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react'

interface Article {
  id: number;
  idContent: number;
  nameArticle: string;
  imgArticle: string;
  hashtags: string;
  description?: string;
  author: string;
  content: string;
  category: string;
}

const ArticleDetail = () => {

  const params = useParams();
  const hashtags = params.hashtags as string;
  const [articles, setArticles] = useState<Article | null>(null);

  const nameToLink = (str: string) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/đ/g, "d")
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .trim();
  };

  useEffect(() => {
    if (!hashtags || typeof hashtags !== "string") return;
    fetch('/data.json')
      .then(res => res.json())
      .then((data) => {
        const ArticleFound = data.articles.find((a: Article) => a.hashtags === hashtags);
        setArticles(ArticleFound || null)
      })
      .catch(error => console.error(error))
  }, [hashtags]);

  if (!articles) return (
    <h1 className='flex justify-center h-screen w-full items-center flex-col gap-y-3'>
      <div className='border-8 border-black border-b-gray-400 w-[100px] h-[100px] rounded-[50%] animate-spin '></div>
      <div className='flex flex-row items-end h-fit gap-2'>
        <p className='font-bold text-3xl animate-'>Đang tải bài báo ...</p>
      </div>
    </h1>
  )
  if (articles.idContent === 1) {
    return (
      <>

        <Header />
        <div className='flex flex-col items-center justify-center w-full mt-32  not-lg:mt-20'>
          <div className='w-3/4 flex flex-col justify-center items-start'>
            <a href={`/category/${nameToLink(articles.category)}`} className='hover:to-blue-500'>{articles.category}</a>
            <h1 className='text-3xl font-bold my-3'>{articles.nameArticle}</h1>
            <span className='flex flex-row gap-x-8 text-xs my-5'>
              <p className={`font-bold ${!articles.author ? 'hidden' : ''}`}>{articles.author}</p>
              <p>{new Date().toLocaleDateString()}</p>
            </span>
            <span className='font-bold min-h-12'>{articles.description}</span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: articles.content }} />
          <div>
            <hr className='w-full mt-5' />

          </div>
        </div>

      </>
    )
  } else if (articles.idContent === 2) {
    return (
      <>
        <Header />
        <div className='flex items-center justify-center w-full mt-32'>
          <div className='w-3/4 flex flex-col justify-center items-center'>
            <a href={`/category/${nameToLink(articles.category)}`} className='hover:to-blue-500'>{articles.category}</a>
            <h1 className='text-3xl font-bold my-3 text-center'>{articles.nameArticle}</h1>
            <span className='flex flex-row gap-x-8 text-xs my-5'>
              <a className={`font-bold ${!articles.author ? 'hidden' : ''}`}>{articles.author}</a>
              <p>{new Date().toLocaleDateString()}</p>
            </span>
            <p className='font-bold min-h-12'>{articles.description}</p>
            <div dangerouslySetInnerHTML={{ __html: articles.content }} ></div>
          </div>
        </div>
      </>
    )
  } else { return <div className='text-center w-full'>Không có bài viết này</div> }
}

export default ArticleDetail