"use client"

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/app/Components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/Components/ui/carousel";

const Magazine = () => {
  interface Article {
    id: number;
    imgArticle: string;
    nameArticle: string;
    hashtags: string;
    description: string;
    category: string;
  }
  const [articles, setArticles] = useState<Article[]>([]);
  const [isHover, setIsHover] = useState<Number | null>(null);
  const Filtered = articles.filter(article => article.category === "MAGAZINE")
  useEffect(() => {
    axios.get('/data.json')
      .then(res => setArticles(res.data.articles))
      .catch(error => console.error(error))
  }, []);
  return (
    <div className='w-full'>
      <Carousel>
        <CarouselContent>
          {Filtered.slice(0, 14).map((article) => (
            <CarouselItem key={article.id} className=" lg:basis-1/5 md:basis-1/3 sm:basis-1/3 cursor-pointer flex justify-start ">
              <Card className="h-96 flex flex-col mr-2 w-full ">
                <CardContent className="flex flex-col items-start h-full hover:text-blue-400">
                  <a className='cursor-pointer relative overflow-hidden'
                    onMouseEnter={() => setIsHover(article.id)}
                    onMouseLeave={() => setIsHover(null)}
                    href={`/article/${article.hashtags}`}
                  >
                    <div className={`border-black relative transition-all duration-[2s] ${isHover === article.id ? '' : ''}`}>
                      <img
                        src={article.imgArticle} 
                        alt={article.nameArticle}
                        className={`w-full h-96 transition-all duration-[2s] object-cover backdrop-brightness-50 ${isHover === article.id ? 'scale-110' : ''}`}
                      />
                    </div>
                    <div className='absolute flex flex-col items-center top-[50%]'>
                      <div className={`w-1/5 h-1.5 bg-yellow-200 mb-3 $`}></div>
                      <p className='w-10/12 text-wrap text-center text-white font-bold text-lg'>{article.nameArticle}</p>
                    </div>
                    <div className='w-full absolute flex flex-col items-center top-0'>
                      <p className='w-6/12 bg-yellow-200 rounded-b-md text-wrap text-center text-black font-bold'>{article.category}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default Magazine
