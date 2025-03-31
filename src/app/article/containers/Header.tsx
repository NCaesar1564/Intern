"use client";
import React, { useEffect, useState } from 'react'
import { IoIosSearch, IoMdClose } from 'react-icons/io'
import Sidebar from '@/app/Components/Sidebar';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';

const Header = () => {
    interface Categories {
        id: number;
        name: string;
        href: string;
    }
    const [searchBar, setSearchBar] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const [categories, setCategories] = useState<Categories[]>([]);
    const [underline, setUnderline] = useState(0);
    const SAHSearchBar = () => {
        if (searchBar === false) {
            setSearchBar(true);
        } else {
            setSearchBar(false)
        }
    }
    const SAHSidebar = () => {
        if (sidebar === false) {
            setSidebar(true);
            document.body.classList.add('overflow-hidden')
        } else {
            setSidebar(false);
            document.body.classList.remove('overflow-hidden')
        }
    }

    useEffect(() => {
        axios.get('/data.json')
            .then(res => setCategories(res.data.categories))
            .catch(err => console.error(err))
    }, []);

    useEffect(() => {
        const underline = localStorage.getItem('underline');
        if (underline) {
            setUnderline(Number(underline) || 0)
        }
    }, []);
    return (
        <>
            <div className={`w-full h-16 flex flex-col items-center shadow-[-10px_-10px_0px_rgba(0,0,0,0.3)] fixed top-0 bg-white z-50`}>
                <div className={`w-[68%] flex relative -ml-28`}>
                    <a href="/"
                        onClick={() => {
                            setUnderline(0);
                            localStorage.setItem('underline', '0')
                        }}
                        className='w-1/2 flex justify-start'>
                        <img src="../Images/logo.png" alt="logo" className='h-full w-54' />
                    </a>
                    <div className='flex gap-5 items-center justify-end w-full'>
                        {categories.slice(2, 10).map((cat) => (
                            <div key={cat.id} className='h-full flex items-center w-full'>
                                <a
                                    onClick={(e) => {
                                        setUnderline(cat.id);
                                        localStorage.setItem('underline', cat.id.toString())
                                        // changePage(cat.id)
                                    }}
                                    href={`/category/${cat.href}`}
                                    className={`cursor-pointer text-xs font-bold hover:underline underline-offset-[16px]
                                     decoration-[3px] hover:text-blue-500 text-nowrap whitespace-nowrap 
                                     ${underline === cat.id ? 'underline text-blue-500 underline-offset-[16px]' : ''} `}
                                >{cat.name}
                                </a>
                            </div>
                        ))}
                    </div>
                    <a className={`cursor-pointer h-full flex items-center mx-3`} onClick={SAHSidebar}>
                        {!sidebar ? <HiOutlineDotsHorizontal size={30} className='' /> : <AiOutlineClose size={30} />}
                    </a>
                    <div className={`flex items-center`} >
                        <input type="text"
                            className={`${!searchBar
                                ?
                                (`hidden`)
                                :
                                (`absolute border-2 border-black  bg-gray-600 py-1 rounded-md w-56 -right-24 placeholder:text-white pl-3 text-white `)}`}
                            placeholder='nhập nội dung cần tìm'
                        />
                        <IoIosSearch size={30} onClick={SAHSearchBar} className='cursor-pointer h-full z-50 ml-32 -mr-22 relative' />
                    </div>
                </div>
                <div className={`transition-all duration-[1s] ${!sidebar ? (`w-full hidden absolute top-10 left-0`) : (`w-full absolute top-16 left-0`)}`}>
                    <Sidebar />
                </div>
                <hr className='text-black h-1 w-full' />
            </div>
        </>
    )
}

export default Header