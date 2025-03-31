import React, { useEffect, useState } from 'react'
import Title from './Title'
import axios from 'axios';
import { error } from 'console';

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
        axios.get("/data.json")
            .then((response) => {
                setArticles(response.data.articles || [])
            })
            .catch(error => console.error("Lỗi mẹ gòy: ", error))
    })
    return (
        <div className='flex flex-col w-full items-center'>
            <div className='flex justify-center'>
                <div className='grid grid-cols-13 gap-2 w-[71.5%]'>
                    <span className='col-span-6'>
                        <div className='flex justify-center flex-col'>
                            {ArticleFiltered.slice(0, 1).map((article, index) => (
                                <div key={article.id || index} className='hover:text-blue-900'>
                                    <a className='w-full' href={`/article/${article.hashtags}`}>
                                        <img
                                            src="../images/chagee_znews.webp" // e để cho đễ căn chỉnh
                                            // src={article.imgArticle}
                                            alt={article.nameArticle} className='w-full' />
                                        <div className='text-xl font-bold font-sans mt-3'>{article.nameArticle}</div>
                                    </a>
                                    <div className='text-sm mt-1'>
                                        {article.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </span>
                    <span className='col-span-3 flex items-center ml-3 -mr-5'>
                        <div className='flex flex-col items-center gap-y-2'>
                            {ArticleFiltered.slice(1, 3).map((article) => (
                                <div key={article.id} className='hover:text-blue-900'>
                                    <a className='w-full' href={`/article/${article.hashtags}`}>
                                        <img
                                            src="../images/chagee_znews.webp"
                                            // src={article.imgArticle}
                                            alt={article.nameArticle} className='w-full' />
                                        <div className='text-md font-bold font-sans w-full text-wrap'>{article.nameArticle}</div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </span>
                    <span className='flex justify-center col-span-1 '>
                        <div className='bg-gray-300 w-[1%]'></div>
                    </span>
                    <span className='col-span-3 -ml-5'>
                        <div className='flex flex-col items-center gap-y-2'>
                            {ArticleFiltered.slice(3, 8).map((article, index, array) => (
                                <div key={article.id} className='cursor-pointer hover:text-blue-900'>
                                    <a className='w-full flex mb-2 justify-center' href={`/article/${article.hashtags}`}>
                                        <div className='text-sm font-bold font-sans text-wrap w-4/5'>{article.nameArticle}</div>
                                        <img
                                            src="../images/chagee_znews.webp"
                                            // src={article.imgArticle}
                                            alt={article.nameArticle} className='w-2/5 ml-1' />
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