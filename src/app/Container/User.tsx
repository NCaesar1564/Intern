"use client"
import Article from "@/app/Components/Article"
import ArticleQ3 from "@/app/Components/ArticleQ3"
import ArticleQ8 from "@/app/Components/ArticleQ8"
import Book from "@/app/Components/Book"
import Footer from "@/app/Components/Footer"
import Hashtag from "@/app/Components/Hashtag"
import Header from "@/app/Components/Header"
import Introduct from "@/app/Components/Introduct"
import Introduct2 from "@/app/Components/Introduct2"
import MultiMedia from "@/app/Components/MultiMedia"
import Multimedia2 from "@/app/Components/Multimedia2"
import Title from "@/app/Components/Title"
import Magazine from "@/app/Components/Magazine"
import TitleNoUnderline from "@/app/Components/TitleNoUnderline"
import axios from "axios"
import { useEffect, useState } from "react"
import Video from "../Components/Video"

const User = () => {
    interface Categories {
        id: number;
        name: string;
        href: string;
    }
    interface Article {
        id: number;
        nameArticle: string;
        imgArticle: string;
        hashtags: string;
        description?: string;
        category: string;
    }
    const [categories, setCategories] = useState<Categories[]>([])
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        axios.get('/data.json')
            .then(response => setCategories(response.data.categories))
            .catch(error => console.error(error))
    }, []);

    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((data) => setArticles(data.articles))
            .catch((error) => console.error("Lỗi mẹ nữa gòy: ", error));
    }, []);
    return (
        <>
            <div >
                <Header />
            </div>
            <hr className="w-full rounded-3xl" />
            <Hashtag />
            <div className="flex justify-center">
                <Article />
            </div>
            {categories.slice(0, 1).map((category) => (
                <div className="flex justify-center" key={category.id}>
                    <div className="w-3/4 ml-28 not-md:w-full 
                    not-md:-ml-0">
                        <Title nameTitle={category.name} />
                    </div>
                </div>
            ))}
            {categories.slice(0, 1).map((category) => (
                <div className="flex flex-col items-center w-full ml-8
                not-md:ml-0" key={category.id} >
                    <div className='w-3/4 
                    not-md:w-full' >
                        <Book />
                    </div>
                </div>
            ))}
            <div className="min-h-screen">
                <div className="w-full">
                    <MultiMedia />
                </div>
                <div className='flex justify-center mt-8 ml-24 '>
                    <div className="grid grid-cols-11 w-10/12 gap-x-4">
                        <div className="h-[20vh] w-full col-span-8 min-h-fit">
                            <Multimedia2 />
                        </div>
                        <div className="flex flex-col w-full col-span-3 not-lg:hidden">
                            <Introduct />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {categories.slice(2, 4).map((category) => (
                    <div className="flex flex-col items-center" key={category.id}>
                        <div className='w-[71.5%]' >
                            <Title nameTitle={category.name} />
                        </div>
                        <ArticleQ8 cname={category.name} />
                    </div>
                ))}
            </div>
            <div className="w-full">
                <Introduct2 />
            </div>
            <div className="flex justify-center">
                <div className="w-[71.5%] bg-black h-[1px] not-lg:w-full"></div>
            </div>
            <div className="w-full flex justify-center">
                <div className="w-full flex flex-col items-center">
                    <div className="grid grid-cols-4 w-[71.5%] gap-5 not-lg:w-full not-lg:grid-cols-2">
                        {categories.slice(4, 20).map(categorie => (
                            <div key={categorie.id}>
                                <ArticleQ3 cname={categorie.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full bg-gray-100">
                {categories.slice(20, 21).map((category) => (
                    <div key={category.id} className="w-[71.5%]">
                        <TitleNoUnderline nameTitle={category.name} />
                        <Magazine />
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <Video />
            </div>
            <Footer />
        </>
    )
}

export default User