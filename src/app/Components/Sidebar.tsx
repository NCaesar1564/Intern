"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Sidebar = () => {
    interface Categories {
        id: number,
        name: string,
        href: string
    }
    const [categories, setCategories] = useState<Categories[]>([]);
    useEffect(() => {
        axios.get("/data.json")
            .then((res) => setCategories(res.data.categories))
            .catch(error => console.error("Lỗi mẹ gòy: ", error))
    }, [])
    return (
        <div className='w-full bg-black not-md:h-full'>
            <div className='flex justify-center'>
                <div className='grid grid-cols-4 grid-rows-5 gap-x-5 gap-y-3 h-64 my-5
                not-md:grid-cols-2
                not-md:grid-rows-10  
                '>
                    {categories.slice(0, 20).map((cat) => (
                        <a
                            className='flex justify-start items-center cursor-pointer col-span-1
                             font-bold content before:content-["/"] before:text-red-600 before:scale-x-200 before:mr-2
                             not-md:before:hidden'
                            key={cat.id}
                            href={`/category/${cat.href}`}>
                            <p className='text-white'>{cat.name}</p>
                        </a>
                    ))}
                </div>
            </div>
            <section className='bg-gray-200 flex justify-evenly h-16 items-center'>
                <a className='text-3xl font-extrabold' href='/#podcast'>PODCAST</a>
                <a className='text-3xl font-sans' href='/#longform'>longform</a>
                <a className='text-3xl font-bold' href='/#story'>story</a>
                <a className='text-3xl font-serif' href='/#lens'>LENS</a>

            </section>

        </div>
    )
}

export default Sidebar