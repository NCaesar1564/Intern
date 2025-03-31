import Article from "@/app/Components/Article"
import ArticleQ3 from "@/app/Components/ArticleQ3"
import ArticleQ8 from "@/app/Components/ArticleQ8"
import Banner from "@/app/Components/Banner"
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
    const [categories, setCategories] = useState<Categories[]>([])
    useEffect(() => {
        axios.get('/data.json')
            .then(response => setCategories(response.data.categories))
            .catch(error => console.error(error))
    }, [])
    return (
        <>
            {/* <Banner /> */}
            <div className="">
                <Header />
            </div>
            <hr className="w-full rounded-3xl" />
            <Hashtag />
            <div className="flex justify-center">
                <Article />
            </div>
            {categories.slice(0, 1).map((category) => (
                <div className="flex justify-center" key={category.id}>
                    <div className="w-3/4 ml-28">
                        <Title nameTitle={category.name} />
                    </div>
                </div>
            ))}
            {categories.slice(0, 1).map((category) => (
                <div className="flex flex-col items-center w-full ml-8" key={category.id} >
                    <div className='w-3/4' >
                        <Book />
                    </div>
                </div>
            ))}
            <div className="min-h-screen">
                <MultiMedia />
                <div className='flex justify-center mt-8 ml-24 '>
                    <div className="grid grid-cols-11 w-10/12 gap-x-4">
                        <div className="h-[20vh] w-full col-span-8 min-h-fit">
                            <Multimedia2 />
                        </div>
                        <div className="flex flex-col w-full col-span-3">
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
            <Introduct2 />
            <div className="flex justify-center">
                <div className="w-[71.5%] bg-black h-[1px]"></div>
            </div>
            <div className="w-full flex justify-center">
                <div className="w-full flex flex-col items-center">
                    <div className="grid grid-cols-4 w-[71.5%] gap-5">
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