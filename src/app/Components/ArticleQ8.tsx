"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ArticleQ8 = ({ cname }: any) => {
    interface Article {
        id: number;
        nameArticle: string;
        imgArticle: string;
        hashtags: string;
        description?: string;
        category: string;
    }
    const [articles, setArticles] = useState<Article[]>([]);
    const ArticleFiltered = articles.filter(article => article.category === cname);
    useEffect(() => {
        axios.get(`https://znt76d-8080.csb.app/articles`)
            .then((data) => {
                setArticles(data.data)
            })
            .catch(error => console.error("Lỗi mẹ gòy: ", error))
    }, [])
    return (
        <div className='flex flex-col min-h-72 w-full items-center'>
            <div className='flex justify-center'>
                <div className='grid grid-cols-13 gap-2 w-full'>
                    <span className='col-span-6'>
                        <div className='flex justify-center flex-col'>
                            {ArticleFiltered.slice(0, 1).map((article, index) => (
                                <a key={article.id || index} className='hover:text-blue-900' href={`/article/${article.hashtags}`}>
                                    <div className='w-full' >
                                        <img
                                            loading='lazy'
                                            src={article.imgArticle}
                                            alt={article.nameArticle}
                                            className='w-full border border-black h-72' />
                                        <div className='text-xl font-bold font-sans mt-3'>{article.nameArticle}</div>
                                    </div>
                                    <div className='text-sm mt-1 cursor-alias not-lg:hidden'>
                                        {article.description}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </span>
                    <span className='col-span-3 flex justify-start ml-3 -mr-5 not-lg:col-span-6'>
                        <div className='flex flex-col items-start gap-y-2 w-full'>
                            {ArticleFiltered.slice(1, 3).map((article) => (
                                <div key={article.id} className='hover:text-blue-900'>
                                    <a className='w-full' href={`/article/${article.hashtags}`}>
                                        <img
                                            loading='lazy'
                                            src={article.imgArticle}
                                            alt={article.nameArticle}
                                            className='w-full border border-black h-40' />
                                        <p className='text-md font-bold font-sans w-full text-wrap'>{article.nameArticle}</p>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </span>
                    <span className='flex justify-center col-span-1 not-lg:hidden'>
                        <div className='bg-gray-300 w-[1%]'></div>
                    </span>
                    <span className='col-span-3 not-lg:hidden'>
                        <div className='flex flex-col items-center gap-y-2'>
                            {ArticleFiltered.slice(3, 8).map((article, index, array) => (
                                <div key={article.id} className='cursor-pointer hover:text-blue-900'>
                                    <a className='w-full flex mb-2 justify-center' href={`/article/${article.hashtags}`}>
                                        <div className='text-sm font-bold font-sans text-wrap w-3/5'>{article.nameArticle}</div>
                                        <img
                                            loading='lazy'
                                            src={article.imgArticle}
                                            alt={article.nameArticle} 
                                            className='w-2/5 ml-1 text-xs h-14 border border-black' />
                                    </a>
                                    {index !== array.length - 1 && <hr />}
                                </div>
                            ))}
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ArticleQ8