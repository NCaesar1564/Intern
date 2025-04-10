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
  const [searchKey, setSearchKey] = useState('');
  const [articles, setArticles] = useState<Article[]>([]);
  const router = useRouter();
  const keywordSearch = keyword?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toString() || "";
  console.log(keywordSearch)
  useEffect(() => {
    axios.get('https://znt76d-8080.csb.app/articles')
      .then(data => setArticles(data.data))
      .catch(err => console.error(err))
  }, [])
  const Result = articles.filter(article => article.nameArticle.toLowerCase().normalize("NFD").trim().replace(/[\u0300-\u036f]/g, "").includes(keywordSearch))
  const RouteToSearchPage = () => {
    router.push(`/search?search=${encodeURIComponent(searchKey)}`)
    setSearchKey("")
  }
  return (
    <div className="min-h-screen w-full">
      {/* search input */}
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
      {/* filter */}
      <div className="">

      </div>
      {/* Quantity */}
      <div className="w-full flex justify-center">
        <div className="w-4/6 mt-5 flex">
          <p className="font-bold mr-1">
            {Result.length}
          </p>
          <p className="text-gray-500">
            kết quả phù hợp
          </p>
        </div>
      </div>
      {/* article Filtered */}
      <div className="h-full w-full flex flex-col items-center gap-y-3 mt-5">
        {Result.length !== 0 ? (
          Result.map((article, index) => (
            <div className="h-28 w-4/6 flex flex-col items-center mb-3" key={article.id}>
              <a className="min-h-28 w-full grid grid-cols-4 gap-3" href={`article/${article.hashtags}`}>
                <img
                  src={article.imgArticle}
                  alt={article.nameArticle}
                  width={1200}
                  height={800}
                  className="h-28 border col-span-1"
                />
                <span className="col-span-3 grid grid-rows-3">
                  <p className="font-bold text-xl row-span-1 ">{article.nameArticle}</p>
                  <p className="text-xs text-gray-400 row-span-1">{Date()}</p>
                  <p className="text-xs text-gray-500 ">{article.description}</p>
                </span>
              </a>
              {index !== Result.length - 1 && <hr className="text-black mt-3 w-full" />}
            </div>
          ))
        ) : (
          < div className="font-bold text-3xl text-center mt-20" >
            Không có bài viết nào
          </div >
        )}
      </div>
    </div>
  )
}
