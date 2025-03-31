"use client"
import Link  from 'next/link'
import React, { useEffect, useState } from 'react'
import { Card, CardContent } from "@/app/Components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/Components/ui/carousel"

export default function Book() {
  interface Article {
    id: number;
    nameArticle: string;
    imgArticle: string;
    hashtags: string;
    description?: string;
  };
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    fetch("/data.json")
      .then(respose => respose.json())
      .then((data) => setArticles(data.articles))
      .catch(error => console.error("Lỗi mẹ gòy: ", error));
  });
  return (
    <div className='w-full relative'>
      <Carousel>
        <CarouselContent>
          {articles.slice(0, 10).map((article) => (
            <CarouselItem key={article.id} className=" md:basis-1/5 sm:basis-1/3 cursor-pointer">
              <Card className="w-52 h-50 flex flex-col border border-gray-300">
                <CardContent className="flex flex-col h-full hover:text-blue-400">
                  <Link href={`/article/${article.hashtags}`}>
                    <img src="/images/chagee_znews.webp" alt={article.nameArticle} className="h-8/12 w-full object-cover rounded-t-lg" />
                    <div className="mt-1 px-1 flex-grow flex items-center h-10">
                      <span className="text-start text-xs font-bold h-10 text-wrap">{article.nameArticle}</span>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className='absolute left-1 z-10 cursor-pointer' />
        <CarouselNext className='absolute -right-2 z-10 cursor-pointer' />
      </Carousel>
    </div>
  )
}
