"use client";
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { IoIosSearch } from 'react-icons/io';
import { BsThreeDots } from 'react-icons/bs';
import Sidebar from '../../Components/Sidebar';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
interface Categories {
    id: number;
    name: string;
    href: string;
}
export const Logo = () => {
    return (
        <Image
            className='max-h-fit w-2/3 not-lg:w-full'
            loading='lazy'
            src="/Images/logo.png"
            alt="ZNEWS"
            height={1200}
            width={800}
        />
    )
}
export const SidebarButton = () => {
    const [sidebar, setSidebar] = useState(false);
    const HandleSidebar = () => {
        if (sidebar === false) {
            setSidebar(true)
        } else {
            setSidebar(false)
        }
    };
    return (
        <>
            <div className='cursor-pointer'>
                <BsThreeDots size={30} onClick={HandleSidebar} />
            </div>
            <div className={!sidebar ? `hidden` : `absolute top-14  right-0  w-full`}>
                <Sidebar />
            </div>
        </>
    )
}
export const SearchButton = () => {
    const [searchBar, setSearchBar] = useState(false);
    const [searchContent, setSearchContent] = useState("")
    const router = useRouter()
    const HandleSearchBar = () => {
        if (searchBar === false) {
            setSearchBar(true);
        } else {
            setSearchBar(false);
        }
    }
    const RouteToSearchPage = () => {
        router.push('/search')
    }
    return (
        <div className='flex justify-end flex-row relative'>
            <input
                className={`${searchBar ? `w-50 pl-3` : `w-0`} transition-all border-black outline-black 
            bg-gray-700 placeholder:text-white  text-white absolute top-50% right-0 h-7 rounded-sm`}
                placeholder='Nhập nội dung cần tìm'
                onChange={(e) => setSearchContent(e.target.value)} />
            <IoIosSearch size={30}
                className={`cursor-pointer hover:text-blue-400 relative ${searchBar ? `text-blue-400` : ``}`}
                onClick={(searchContent !== "" && searchBar) ? RouteToSearchPage : HandleSearchBar}
            />
        </div>
    )
}
export const ContentHeader = () => {
    const [categories, setCategories] = useState<Categories[]>([])
    useEffect(() => {
        axios.get('https://znt76d-8080.csb.app/categories')
            .then(data => setCategories(data.data))
            .catch(err => console.error(err))
    }, [])
    return (
        <div>
            <div className='w-full h-full flex justify-center items-center gap-5 '>
                {categories.slice(0, 8).map((category) => (
                    <a href={`${category.href}`}
                        key={category.id}
                        className='w-fit text-black font-bold text-xs text-nowrap 
                        whitespace-nowrap hover:text-blue-700 hover:underline 
                        hover:underline-offset-[20px] decoration-4
                        not-xl:hidden '
                    >
                        {category.name}
                    </a>
                ))}
                <SidebarButton />
            </div>
        </div>
    )
}
export default function Header() {
    return (
        <>
            <div className={`w-full h-14 flex justify-center items-center shadow-[2px_2px_2px_rgba(0,0,0,0.2)] fixed top-0 bg-white z-50`}>
                <div className='grid grid-cols-11 w-3/4'>
                    <a className='h-full flex items-center justify-start col-span-2' href='/'>
                        <Logo />
                    </a>
                    <span className='h-full flex items-center justify-center col-span-8'>
                        <ContentHeader />
                    </span>
                    <span className='h-full flex items-center justify-end col-span-1'>
                        <SearchButton />
                    </span>
                </div>
            </div>

        </>
    )
}

