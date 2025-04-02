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
        axios.get("/data.json")
            .then(response => {
                setArticles(response.data.articles || [])
            })
            .catch(error => console.error("Lỗi mẹ gòy: ", error))
    }, []);


    return (
        <section>
            {articles.slice(0, 20).map((article, index, array) => (
                <div key={article.id || index}>
                    <Link className="flex flex-row mb-3 cursor-pointer hover:text-blue-900 not-lg:flex-col not-md:items-start" href={`/article/${article.hashtags}`}>
                        <img
                            // src="../images/chagee_znews.webp"
                            src={article.imgArticle}
                            alt={article.hashtags}
                            className="h-[20vh] w-70 max-w-70 border border-black" />
                        <span className="flex flex-col ml-3">
                            <div className="font-bold text-xl not-lg:text-lg">{article.nameArticle}</div>
                            <p className="not-lg:hidden">{article.description}</p>
                        </span>
                    </Link>
                    {index !== array.length - 1 && <hr className="mb-3 not-lg:hidden" />}
                </div>
            ))}
        </section>
    );
};

export default Multimedia2;
