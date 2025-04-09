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
        axios.get(`https://znt76d-8080.csb.app/articles`)
            .then((data) => setArticles(data.data))
            .catch((error) => console.error("Lỗi mẹ nữa gòy: ", error));
    }, []);

    return (
        <>
            <div className="w-full grid grid-cols-10 justify-center text-center my-5 gap-5 not-lg:mt-16">
                <div className="flex justify-start flex-row col-span-3">
                    <div className="flex gap-4 flex-col not-lg:hidden" >
                        {articles.slice(0, 5).map((article) => (
                            <div key={article.id}>
                                <a className="flex flex-row w-full justify-center hover:text-green-800 "

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
                                    <span className="w-2/3 cursor-pointer font-bold text-sm  flex-wrap text-wrap ml-2  flex justify-start text-start not-lg:text-xs">{article.nameArticle}</span>
                                </a>
                                {article.id != 5 && <hr />}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center col-span-4 not-lg:col-span-10 not-lg:mb-5">
                    <div className="flex justify-center items-start w-full" >
                        {articles.slice(5, 6).map((article) => (
                            <Link className="flex gap-4 flex-col hover:text-green-800 text-start"
                                key={article.id}
                                href={`/article/${article.hashtags}`}>
                                <span className="cursor-pointer">
                                    <img
                                        loading="lazy"
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
                <div className="flex justify-end flex-row col-span-3 not-lg:col-span-10">
                    <div className="flex gap-4 flex-col not-lg:flex-row not-lg:w-full" >
                        {articles.slice(6, 8).map((article) => (
                            <Link className="flex flex-col  w-full justify-center hover:text-green-800"
                                key={article.id}
                                href={`/article/${article.hashtags}`}>
                                <span className="cursor-pointer flex justify-center w-full ">
                                    <img
                                        loading="lazy"
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
