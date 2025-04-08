"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
const Article = () => {
    interface Article {
        id: number;
        idContent: number;
        nameArticle: string;
        imgArticle: string;
        hashtags: string;
        description?: string;
        category: string;
        author: string;
    }
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        axios.get(`/data.json`)
            .then((data) => setArticles(data.data.articles))
            .catch((error) => console.error("Lỗi mẹ nữa gòy: ", error));
    }, []);

    return (
        <>
            <div className="grid grid-cols-3 justify-center text-center w-full gap-x-5 my-5 mt-3 not-lg:gap-x-3">
                <div className="flex justify-end flex-row">
                    <div className="flex gap-4 flex-col w-1/2 
                    not-lg:hidden" >
                        {articles.slice(0, 5).map((article) => (
                            <a className="flex flex-row w-full justify-center hover:text-green-800 "
                                key={article.id}
                                href={`article/${article.hashtags}`}>
                                <span className="w-1/3 cursor-pointer flex justify-center not-lg:w-full">
                                    <Image
                                        src={article.imgArticle}
                                        alt={article.nameArticle}
                                        className="h-18 w-full border text-xs"
                                        height={72}
                                        width={100}
                                    />
                                </span>
                                <span className="w-2/3 cursor-pointer font-bold text-sm  flex-wrap text-wrap ml-4 flex justify-start text-start 
                                not-lg:text-xs">{article.nameArticle}</span>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex justify-end w-full col-span-1
                not-lg:col-span-3 
                not-lg: mb-5
                ">
                    <div className="flex justify-center items-start w-full" >
                        {articles.slice(5, 6).map((article) => (
                            <Link className="flex gap-4 flex-col hover:text-green-800 text-start"
                                key={article.id}
                                href={`/article/${article.hashtags}`}>
                                <span className="cursor-pointer">
                                    <img
                                        src={article.imgArticle}
                                        alt={article.nameArticle}
                                        className="h-80 w-full border text-xs" />
                                </span>
                                <span className="cursor-pointer w-full font-bold text-lg
                                not-lg:-mt-3
                                ">{article.nameArticle}</span>
                                <p className="text-sm flex text-start not-lg:hidden">{article.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex justify-start flex-row w-full col-span-1 not-lg:col-span-3">
                    <div className="flex gap-4 flex-col 
                        not-lg:flex-row 
                        not-lg:w-full" >
                        {articles.slice(6, 8).map((article) => (
                            <Link className="flex flex-col  w-full justify-center hover:text-green-800"
                                key={article.id}
                                href={`/article/${article.hashtags}`}>
                                <span className="cursor-pointer flex justify-center w-full ">
                                    <img
                                        src={article.imgArticle} alt={article.nameArticle}
                                        className="h-48 w-full border" />
                                </span>
                                <span className="cursor-pointer font-bold text-sm flex-wrap text-wrap w-full text-start not-lg:text-xs">{article.nameArticle}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Article;
