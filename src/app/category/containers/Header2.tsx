"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Header2 = () => {
    const [Scrolled, setScrolled] = useState(false);
    interface Articles {
        id: number;
        nameArticle: string;
        imgArticle: string;
        description: string;
        hashtags: string;
        category?: string;
    }
    const [articles, setArticle] = useState<Articles | null>(null);
    useEffect(() => {
        axios.get('/data.json')
            .then(res => setArticle(res.data.articles))
            .catch(err => console.error(err))
    }, []);
    useEffect(() => {
        const HandleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', HandleScroll)
        return () => window.removeEventListener('scroll', HandleScroll);
    }, []);
    return (
        <>
            <div className={`w-full flex flex-col items-center justify-center shadow-[-10px_-10px_0px_rgba(0,0,0,0.3)]  bg-white z-50 transition-all duration-[2s]] fixed top-0 border border-b-gray-200 ${Scrolled ? 'h-16' : 'h-0'}`}>
                <div className='w-[68%] flex relative -ml-28'>
                    <a href="/"
                        className='w-1/2 flex justify-center'>
                        <img src="../Images/logo.png" alt="logo" className='h-full w-54' />
                    </a>
                    <div className='flex gap-5 items-center justify-end w-full'>
                        <a href={'/'}>
                            {articles?.category}
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header2