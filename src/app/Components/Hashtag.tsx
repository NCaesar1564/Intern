"use client";
import { error } from 'console';
import React, { useEffect, useState } from 'react'
import { HiArrowTrendingUp } from 'react-icons/hi2';

const Hashtag = () => {
    const [hashtags, setHashtags] = useState([]);
    useEffect(() => {
        fetch("/data.json")
            .then(response => response.json())
            .then(data => setHashtags(data.hashtags))
            .catch(error => console.error("Lỗi mẹ r", error));
    }, [])
    return (
        <div className='w-full h-10 flex items-center justify-center not-md:hidden mt-2'>
            <div className='flex justify-start items-center w-[68%] gap-x-3'>
                <HiArrowTrendingUp className='bg-gradient-to-t from-red-600 to-orange-300 rounded-4xl' size={20} />
                <div className=' flex gap-3 items-center justify-start w-3/5 '>
                    {hashtags.map((tag, index) => (
                        <a key={index}
                            className='text-black bg-gray-200 rounded-2xl min-w-fit cursor-pointer hover:bg-gradient-to-l from-green-400 to to-blue-600'
                            href={tag}>#{tag}</a>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Hashtag