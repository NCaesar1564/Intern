"use client"
import Article from "@/app/Components/Article"
import ArticleQ3 from "@/app/Components/ArticleQ3"
import ArticleQ8 from "@/app/Components/ArticleQ8"
import Book from "@/app/Components/Book"
import Hashtag from "@/app/Components/Hashtag"
import Introduct from "@/app/Components/Introduct"
import Introduct2 from "@/app/Components/Introduct2"
import MultiMedia from "@/app/Components/MultiMedia"
import Multimedia2 from "@/app/Components/Multimedia2"
import Title from "@/app/Components/Title"
import Magazine from "@/app/Components/Magazine"
import TitleNoUnderline from "@/app/Components/TitleNoUnderline"
import Video from "../Components/Video"
import axios from "axios"
import { useEffect, useState } from "react"

const User = () => {
    interface Categories {
        id: number;
        name: string;
        href: string;
    }
    const [categories, setCategories] = useState<Categories[]>([])

    useEffect(() => {
        axios.get('https://znt76d-8080.csb.app/categories')
            .then(data => setCategories(data.data))
            .catch(error => console.error(error))
    }, []);


    return (
        <>
            {/* hashtags */}
            <Hashtag />
            {/* artilces */}
            <div className="flex justify-center">
                <div className="w-3/4">
                    <Article />
                </div>
            </div>
            {/* book */}
            <div className="flex flex-col items-center">
                {categories.slice(0, 1).map((article) => (
                    <div className="w-3/4" key={article.id}>
                        <Title nameTitle="Book" />
                        <Book />
                    </div>
                ))}
            </div>
            {/* Multimedia */}
            <div className="min-h-screen">
                <div className="w-full not-lg:mx-2">
                    <MultiMedia />
                </div>
                <div className='flex justify-center mt-8'>
                    <div className="grid grid-cols-11 w-3/4 gap-x-4 not-lg:w-full not-lg:mx-2">
                        <div className="h-[20vh] w-full col-span-8 min-h-fit not-lg:col-span-11">
                            <Multimedia2 />
                        </div>
                        <div className="flex flex-col w-full col-span-3 not-lg:hidden">
                            <Introduct />
                        </div>
                    </div>
                </div>
            </div>
            {/* article Q8 */}
            <div className="flex flex-col items-center justify-center">
                {categories.slice(2, 4).map((category) => (
                    <div className="w-3/4 not-lg:w-full not-lg:ml-5" key={category.id}>
                        <div className='w-full' >
                            <Title nameTitle={category.name} />
                        </div>
                        <ArticleQ8 cname={category.name} />
                    </div>
                ))}
            </div>
            {/* introduct 2 */}
            <div className="w-full">
                <Introduct2 />
            </div>
            <div className="flex justify-center">
                <div className="w-3/4 bg-black h-[1px] not-lg:w-full"></div>
            </div>
            {/* article Q3 */}
            <div className="w-full flex justify-center">
                <div className="w-full flex flex-col items-center">
                    <div className="grid grid-cols-4 w-3/4 gap-x-5 not-lg:w-full not-lg:grid-cols-2 not-lg:gap-x-2">
                        {categories.slice(4, 20).map(category => (
                            <div key={category.id}>
                                <ArticleQ3 cname={category.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full bg-gray-100">
                {categories.slice(20, 21).map((category) => (
                    <div key={category.id} className="w-3/4">
                        <TitleNoUnderline nameTitle={category.name} />
                        <Magazine />
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <div className="w-3/4">
                    <Video />
                </div>
            </div>

        </>
    )
}

export default User