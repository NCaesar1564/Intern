import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
const Article = () => {
    interface Article {
        id: number;
        nameArticle: string;
        imgArticle: string;
        hashtags: string;
        description?: string;
        category: string;
    }
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((data) => setArticles(data.articles))
            .catch((error) => console.error("Lỗi mẹ nữa gòy: ", error));
    }, []);

    return (
        <>
            <div className="grid grid-cols-3 justify-center text-center w-full gap-x-5 my-5">
                <div className="flex justify-start flex-row">
                    <div className="flex gap-4 flex-col ml-60" >
                        {articles.slice(0, 5).map((article) => (
                            <a className="flex flex-row w-full justify-center hover:text-green-800"
                                key={article.id}
                                href={`/article/${article.hashtags}`}>
                                <span className=" w-1/3 cursor-pointer flex justify-center">
                                    <img
                                        src="../images/chagee_znews.webp"
                                        // src={article.imgArticle} 
                                        alt={article.nameArticle}
                                        className="h-18 w-full" />
                                </span>
                                <span className="w-2/3 cursor-pointer font-bold text-sm  flex-wrap text-wrap ml-4 flex justify-start text-start">{article.nameArticle}</span>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex justify-end w-full col-span-1">
                    <div className="flex justify-center items-start" >
                        {articles.slice(5, 6).map((article) => (
                            <Link className="flex gap-4 flex-col hover:text-green-800 text-start"
                                key={article.id}
                                href={`/article/${article.hashtags}`}>
                                <span className="cursor-pointer">
                                    <img
                                        src="../images/chagee_znews.webp"
                                        // src={article.imgArticle} 
                                        alt={article.nameArticle} className="h-80 w-full" />
                                </span>
                                <span className="cursor-pointer w-full font-bold text-lg  ">{article.nameArticle}</span>
                                <p className="text-sm flex text-start">{article.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex justify-start flex-row w-full col-span-1">
                    <div className="flex gap-4 flex-col  " >
                        {articles.slice(6, 8).map((article) => (
                            <Link className="flex flex-col  w-full justify-center hover:text-green-800"
                                key={article.id}
                                href={`/article/${article.hashtags}`}>
                                <span className="cursor-pointer flex justify-center w-full ">
                                    <img
                                        src="../images/chagee_znews.webp"
                                        // src={article.imgArticle} alt={article.nameArticle}
                                        className="h-48 w-full" />
                                </span>
                                <span className="cursor-pointer font-bold text-sm  flex-wrap text-wrap w-full ml-4 flex justify-start text-start">{article.nameArticle}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Article;
