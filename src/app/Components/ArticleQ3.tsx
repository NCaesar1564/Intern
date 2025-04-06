"use client"
import axios from 'axios';
import { useEffect, useState } from 'react'
import TitleNoUnderline from './TitleNoUnderline';

const ArticleQ3 = ({ cname }: any) => {
    interface Article {
        id: number;
        imgArticle: string;
        nameArticle: string;
        hashtags: string;
        description: string;
        category: string;
    }
    const [articles, setArticles] = useState<Article[]>([]);
    const ArticleFiltered = articles.filter(article => article.category === cname)

    useEffect(() => {
        axios.get('http://localhost:4000/articles')
            .then(response => setArticles(response.data))
            .catch(error => console.error("lỗi mẹ gòy: ", error))
    }, [])
    return (
        <div className='flex justify-center grid-cols-4 mt-2 gap-3'>
            <div className='w-full'>
                <TitleNoUnderline nameTitle={cname} />
                <div className='grid grid-rows-4 w-full'>
                    {ArticleFiltered.slice(0, 1).map((article) => (
                        <a key={article.id}
                            className='row-span-2 cursor-pointer hover:text-blue-900 text-sm'
                            href={`/article/${article.hashtags}`}>
                            <img
                                src={article.imgArticle}
                                alt={article.nameArticle}
                                className='w-full min-h-fit h-2/3 border'
                            />
                            <span className='w-full text-wrap font-bold '>{article.nameArticle}</span>
                        </a>
                    ))}
                    {ArticleFiltered.slice(1, 3).map((article) => (
                        <div key={article.id} className='row-span-1 flex flex-col h-30'>
                            <hr className='mb-4 mt-1 not-lg:mt-0' />
                            <a className='flex flex-row justify-center hover:text-blue-900 text-sm'
                                href={`/article/${article.hashtags}`}>
                                <img
                                    src={article.imgArticle}
                                    alt={article.nameArticle}
                                    className='w-full h-24 border text-xs'
                                />
                                <span className='w-full ml-3 text-sm font-bold leading-4 h-24 not-lg:text-xs'>{article.nameArticle}</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ArticleQ3