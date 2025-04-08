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
        const host = process.env.NEXT_PUBLIC_API_BASE
        axios.get(`/data.json`)
            .then((res) => setCategories(res.data.categories))
            .catch(error => console.error("Lỗi mẹ gòy: ", error))
    }, [])
    return (
        <div className='w-full bg-black not-lg:h-full'>
            <div className='flex justify-center'>
                <div className='grid grid-cols-4 grid-rows-5 gap-5 h-full py-5
                not-lg:gap-y-3
                not-lg:grid-cols-2
                not-lg:grid-rows-10  
                '>
                    {categories.slice(0, 20).map((cat) => (
                        <a
                            className='flex justify-start items-center cursor-pointer col-span-1
                             font-bold content before:content-["/"] before:text-red-600 before:scale-x-200 before:mr-2
                             not-lg:before:hidden'
                            key={cat.id}
                            href={`/category/${cat.href}`}>
                            <p className='text-white'>{cat.name}</p>
                        </a>
                    ))}
                </div>
            </div>
            <section className='bg-gray-200 grid grid-cols-4 text-center min-h-16 items-center not-lg:grid-cols-2 not-lg:gap-y-3'>
                <a className='text-3xl font-extrabold col-span-1' href='/#podcast'>PODCAST</a>
                <a className='text-3xl font-sans col-span-1' href='/#longform'>longform</a>
                <a className='text-3xl font-bold col-span-1' href='/#story'>story</a>
                <a className='text-3xl font-serif col-span-1' href='/#lens'>LENS</a>

            </section>

        </div>
    )
}

export default Sidebar