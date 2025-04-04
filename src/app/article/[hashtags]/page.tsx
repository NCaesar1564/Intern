import ArticlePage from './ArticlePage'

import { Metadata, ResolvingMetadata } from "next";



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

type Props = {
  params: { hashtags: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const hashtags = params.hashtags
  const res = await fetch(`http://localhost:3000/data.json`);
  const data = await res.json();
  const articles: Article[] = data.articles;
  const article = articles.find(a => a.hashtags === hashtags);

  if (!article) {
    return {
      title: "ZNew | Error",
    };
  }

  return {
    title: `ZNew | ${article.nameArticle}`,
    openGraph: {
      images: [{
        url: `${article.imgArticle}`,
        width: 1200,
        height: 730,
      }],
    },
  }
}
export default function page() {
  console.log("Home component đang chạy trên:", typeof window === "undefined" ? "Server" : "Client");
  return (
    <>
      <ArticlePage />
    </>
  )
}
