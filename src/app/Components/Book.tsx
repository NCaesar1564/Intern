"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Card, CardContent } from "@/app/Components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/Components/ui/carousel"
import axios from 'axios'

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
    axios.get("http://localhost:4000/articles")
      .then((data) => setArticles(data.data))
      .catch(error => console.error("Lỗi mẹ gòy: ", error));
  });
  return (
    <div className='w-full relative'>
      <Carousel>
        <CarouselContent>
          {articles.slice(0, 10).map((article) => (
            <CarouselItem key={article.id} className="lg:basis-1/5 md:basis-1/3 sm:basis-1/2 cursor-pointer">
              <Card className="w-52 h-50 flex flex-col border border-gray-300 not-sm:w-full">
                <CardContent className="flex flex-col h-fit hover:text-blue-400">
                  <Link href={`/article/${article.hashtags}`}>
                    <img
                      src={article.imgArticle}
                      alt={article.nameArticle}
                      className="h-36 w-full object-cover rounded-t-lg border" />
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
