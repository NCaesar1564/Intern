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
        <div className="grid grid-cols-3 text-center w-full gap-x-5 my-5">
            <div className="flex items-end flex-col gap-y-4 w-full col-span-1">
                {articles.slice(0, 5).map((article, index, array) => (
                    <div key={article.id || index} className="flex flex-col items-center">
                        <Link href={`/article/${article.hashtags}`} className="flex mb-4 hover:text-green-800" >
                            <span className="cursor-pointer">
                                <img
                                    src="../images/chagee_znews.webp"
                                    // src={article.imgArticle}
                                    alt={article.nameArticle}
                                    className="h-16 w-full" />
                            </span>
                            <span
                                className="cursor-pointer w-36 font-bold text-xs text-start ml-2"
                            >
                                {article.nameArticle}
                            </span>
                        </Link>
                        <div className="flex flex-col items-center w-full">
                            {index !== array.length - 1 && <hr className="w-full" />}
                        </div>
                    </div>
                ))}
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
    );
};

export default Article;
