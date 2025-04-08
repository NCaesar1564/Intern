"use client"

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
interface Article {
    id: string;
    nameArticle: string;
    imgArticle: string;
    description?: string;
    hashtags: string;
}
const Multimedia2 = () => {

    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const host = process.env.NEXT_PUBLIC_API_BASE
        axios.get(`/data.json`)
            .then(response => {
                setArticles(response.data.articles)
            })
            .catch(err => console.error("Lỗi mẹ gòy: ", err))
    }, []);


    return (
        <div className="w-full min-h-fit">
            {articles.slice(0, 20).map((article, index, array) => (
                <div key={article.id || index}>
                    <Link className="flex flex-row mb-3 cursor-pointer hover:text-blue-900 not-lg:flex-col not-md:items-start w-full" href={`/article/${article.hashtags}`}>
                        <img
                            src={article.imgArticle}
                            alt={article.nameArticle}
                            className="h-[20vh] border border-black w-3/12 not-lg:w-full" />
                        <span className="flex flex-col ml-3 w-9/12">
                            <div className="font-bold  text-xl not-lg:text-lg">{article.nameArticle}</div>
                            <p className="not-lg:hidden">{article.description}</p>
                        </span>
                    </Link>
                    {index !== array.length - 1 && <hr className="mb-3 not-lg:hidden" />}
                </div>
            ))}
        </div>
    );
};

export default Multimedia2;
