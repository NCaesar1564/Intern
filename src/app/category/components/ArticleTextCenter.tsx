import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const ArticleCenter = ({ cname, start, end }: any) => {
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
        <div>
            {ArticleFiltered.slice(start, end).map((article) => (
                <a className='cursor-pointer hover:text-blue-700 h-96' key={article.id} href={`/article/${article.hashtags}`}>
                    <img
                        src={article.imgArticle} 
                        alt={article.nameArticle}
                        className='w-full h-80 border'
                    />
                    <p className='text-center w-full text-2xl font-bold mt-3'>{article.nameArticle}</p>
                    <p className='text-center w-full text-sm'>{article.description}</p>
                </a>
            ))}
        </div>
    )
}

export default ArticleCenter