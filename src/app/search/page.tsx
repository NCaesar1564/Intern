"use client"

import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";

interface Article {
  id: number;
  idContent: number;
  nameArticle: string;
  imgArticle: string;
  hashtags: string;
  description?: string;
  category: string;
  author: string;
}
export default function SearchPage() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('search')
  const keywordSearch = keyword?.toString().toLowerCase() || "";
  const [searchKey, setSearchKey] = useState('');
  const [articles, setArticles] = useState<Article[]>([]);
  const router = useRouter();

  useEffect(() => {
    axios.get('https://znt76d-8080.csb.app/articles')
      .then(data => setArticles(data.data))
      .catch(err => console.error(err))
  }, [])
  const Result = articles.filter(article => article.nameArticle.toLowerCase().includes(keywordSearch))
  const RouteToSearchPage = () => {
    router.push(`/search?search=${encodeURIComponent(searchKey)}`)
  }
  if (Result.length == 0)
    return (
      <div className="min-h-lvh w-full">
        <div className="w-full flex justify-center mt-20">
          <div className='flex flex-row justify-center items-center w-4/6'>
            <div className="flex justify-center items-center w-full border rounded-sm">
              <input type="text"
                onChange={(e) => setSearchKey(e.target.value)}
                defaultValue={keyword?.toString()}
                className="h-10 border-black w-full outline-none ml-3"
              />
              <IoIosSearch size={30} onClick={RouteToSearchPage} className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="h-full w-full flex flex-col items-center gap-y-3 mt-5">
          < div className="font-bold text-3xl text-center mt-20" > Không có bài viết nào</div >
        </div>
      </div>
    )
  return (
    <div className="min-h-lvh w-full">
      <div className="w-full flex justify-center mt-20">
        <div className='flex flex-row justify-center items-center w-4/6'>
          <div className="flex justify-center items-center w-full border rounded-sm">
            <input type="text"
              onChange={(e) => setSearchKey(e.target.value)}
              defaultValue={keyword?.toString()}
              className="h-10 border-black w-full outline-none ml-3"
            />
            <IoIosSearch size={30} onClick={RouteToSearchPage} className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="h-full w-full flex flex-col items-center gap-y-3 mt-5">
        {Result.map((article, index) => (
          <div className="h-28 w-4/6 flex justify-center" key={article.id}>
            <a className="h-28 w-full flex justify-center" href={`article/${article.hashtags}`}>
              <img
                src={article.imgArticle}
                alt={article.nameArticle}
                className="w-2/5 h-28 border"
              />
              <span className="flex flex-col items-start justify-start ml-5 w-3/5 gap-2">
                <p className="font-bold text-xl">{article.nameArticle}</p>
                <p className="text-xs">{Date()}</p>
                <p>{article.nameArticle}</p>
              </span>
            </a>
            {index !== Result.length - 1 && <hr className="text-black" />}
          </div>
        ))}
      </div>
    </div>
  )
}
