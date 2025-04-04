import ArticlePage from './ArticlePage'
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ hashtags: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const hashtags = (await params).hashtags

  const article = await fetch(`http://localhost:3000/article/${hashtags}`)
    .then((res) =>
      res.json()
    )

  return {
    title: article.nameArticle,
    description: article.description,
    openGraph: {
      images: [
        {
          url: `${article.imgArticle}`,
          height: 1200,
          width: 720
        }
      ]
    }
  }
}


export default function page({ params, searchParams }: Props) {
  console.log("Home component đang chạy trên:", typeof window === "undefined" ? "Server" : "Client");
  return (
    <>
      <ArticlePage />
    </>
  )
}     
