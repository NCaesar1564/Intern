"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { HiArrowTrendingUp } from 'react-icons/hi2';

interface Hashtags {
    id: number,
    tag: string
}
const Hashtag = () => {
    const [hashtags, setHashtags] = useState<Hashtags[]>([]);

    useEffect(() => {
        axios.get("http://localhost:4000/hashtags")
            .then(res => setHashtags(res.data))
            .catch(error => console.error("Lỗi mẹ r", error));
    }, [])

    const TranformToTag = (str: string) => {
        return str
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .replace(/đ/g, "d")
            .replace(/[^a-z0-9 -]/g, "")
            .replace(/\s+/g, "-")
            .trim();
    };
    return (
        <div className='w-full h-10 flex items-center justify-center not-md:hidden mt-2'>
            <div className='flex justify-start items-center w-[68%] gap-x-3'>
                <HiArrowTrendingUp className='bg-gradient-to-t from-red-600 to-orange-300 rounded-4xl' size={20} />
                <div className=' flex gap-3 items-center justify-start w-3/5 '>
                    {hashtags.map((t) => (
                        <a key={t.id}
                            className='text-black bg-gray-200 rounded-2xl min-w-fit cursor-pointer hover:bg-gradient-to-l from-green-400 to to-blue-600'
                            href={TranformToTag(t.tag)}>#{t.tag}</a>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Hashtag