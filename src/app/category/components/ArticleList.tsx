import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const ArticleList = ({ cname }: any) => {
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
            {ArticleFiltered.map((article, index) => (
                <div key={article.id}>
                    <a className='flex flex-row justify-center cursor-pointer hover:text-blue-700 w-full' href={`/article/${article.hashtags}`}>
                        <Image
                            src={article.imgArticle}
                            alt={article.nameArticle}
                            className='w-1/3 h-36 border'
                            width={100}
                            height={100}
                        />
                        <span className='flex flex-col w-2/3 ml-4 justify-start'>
                            <p className='text-xl font-bold max-h-3/5'>{article.nameArticle}</p>
                            <p className='text-sm text-gray-400'>{article.description}</p>
                        </span>
                    </a>
                    {index !== articles.length - 1 && <hr className='mt-3'/>}
                </div>
            ))}
        </>
    )
}

export default ArticleList