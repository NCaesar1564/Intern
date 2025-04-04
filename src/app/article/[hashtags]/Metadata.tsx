"use client"

import { Metadata, ResolvingMetadata } from "next";
import { useState } from "react";

interface Article {
    id: number;
    idContent: number;
    nameArticle: string;
    imgArticle: string;
    hashtags: string;
    description?: string;
    author: string;
    content: string;
    category: string;
}

const [articles, setArticles] = useState<Article | null>(null);

type Props = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { id } = await params

    return {
        title: `ZNew | ${articles?.nameArticle}`,
        openGraph: {
            images: [{
                url: `${articles?.imgArticle}`,
                width: 1200,
                height: 730,
            }],
        },
    }
}