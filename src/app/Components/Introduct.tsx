"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { RxCross2 } from 'react-icons/rx';

const Introduct = () => {
    interface Article {
        id: string;
        nameArticle: string;
        imgArticle: string;
        description?: string;
        hashtags: string;
    }

    interface Introduction {
        id: number;
        imgIntro: string;
    }
    interface Podcast {
        id: number;
        namePodcast: string;
        imgPodcast: string;
    }
    const [articles, setArticles] = useState<Article[]>([]);
    const [introductions, setIntroductions] = useState<Introduction[]>([]);
    const [podcasts, setPodcast] = useState<Podcast[]>([]);
    const [closedIntroduct, setClosedIntroduct] = useState<number[]>([]);
    useEffect(() => {
        axios.get("/data.json")
            .then(response => {
                setArticles(response.data.articles || [])
                setIntroductions(response.data.introductions || [])
                setPodcast(response.data.podcasts || [])
            })
            .catch(error => console.error("Lỗi tải dữ liệu: ", error))
    }, []);
    const HideIntroduction = (id: number) => {
        setClosedIntroduct([...closedIntroduct, id])
    }
    return (
        <div>
            <section>
                {introductions.slice(0, 2).map((intro, index) => (
                    !closedIntroduct.includes(intro.id) && (
                        <div key={intro.id || index} className={`cursor-pointer relative`} >
                            <a className="flex justify-end items-start mb-3 w-full py-5 border" href='/'>
                                <img src={intro.imgIntro} alt={intro.imgIntro} className="rounded-4xl" />
                            </a>
                            <button onClick={()=>HideIntroduction(intro.id)} className='absolute top-0 right-0 text-lg font-bold cursor-pointer border-black bg-black'><RxCross2 color='white' /></button>
                        </div>
                    )))}
                <div>
                    <div className="border">
                        <p className="text-xl font-bold mx-5 pt-3 ">Đọc nhiều</p>
                        <div className="flex flex-col gap-y-3 pt-2 pl-5 pb-5">
                            {articles.slice(0, 5).map((article, index) => (
                                <a key={article.id || index} className=" grid grid-cols-4 justify-center hover:text-blue-900" href={article.hashtags} >
                                    <img src={article.imgArticle} alt="" className="col-span-1 row-span-1" />
                                    <p className="col-span-3 text-sm font-bold ml-2">{article.nameArticle}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="border bg-gray-700 mt-5">
                        <div className="flex justify-center">
                            <img src='https://static.znews.vn/images/logo_podcast_white.png' alt="podcast" className="w-2/5 py-3" />
                        </div>
                        <div >
                            {podcasts.slice(0, 1).map((podcast) => (
                                <div className="flex flex-col items-center" key={podcast.id}>
                                    <img src={podcast.imgPodcast} alt="img" className="w-10/12" />
                                    <div className="w-10/12 text-center text-white font-bold pt-2">{podcast.namePodcast}</div>
                                </div>
                            ))}
                            {podcasts.slice(1, 4).map((podcast) => (
                                <div key={podcast.id} className="flex flex-col items-center w-full">
                                    <hr className="text-white w-10/12 my-3" />
                                    <div className="grid grid-cols-3 w-10/12">
                                        <img src={podcast.imgPodcast} alt={podcast.namePodcast} className="col-span-1" />
                                        <span className="col-span-2 text-sm ml-2 text-white font-bold">{podcast.namePodcast}</span>
                                    </div>
                                </div>
                            ))}
                            <div className="mb-5"></div>
                        </div>
                    </div>
                </div>
                <div className="mt-5  mb-10">
                    {introductions.slice(2, 3).map((intro, index) => (
                        !closedIntroduct.includes(intro.id) && (
                        <div key={intro.id || index} >
                            <a className={`flex justify-end items-start mb-3 w-full py-5 border relative    `} >
                                <img src={intro.imgIntro} alt={intro.imgIntro} className="rounded-4xl" />
                                <button onClick={() => HideIntroduction(intro.id)} className='absolute top-0 right-0 text-lg font-bold cursor-pointer border-black bg-black'><RxCross2 color='white' /></button>

                            </a>
                        </div>
                    )))}
                </div>
            </section>
        </div>
    )
}

export default Introduct