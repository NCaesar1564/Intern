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
                    <Link className="flex flex-row mb-3 cursor-pointer hover:text-blue-900" href={`/article/${article.hashtags}`}>
                        <img
                            src="../images/chagee_znews.webp"
                            // src={article.imgArticle}
                            alt={article.hashtags} className="h-[20vh] min-w-70 w-70 max-w-70" />
                        <span className="flex flex-col ml-3">
                            <div className="font-bold text-xl">{article.nameArticle}</div>
                            <p>{article.description}</p>
                        </span>
                    </Link>
                    {index !== array.length - 1 && <hr className="mb-3" />}
                </div>
            ))}
        </section>
    );
};

export default Multimedia2;
