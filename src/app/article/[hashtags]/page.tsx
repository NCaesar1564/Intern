import ArticlePage from './ArticlePage'
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { hashtags: string }
}

export async function generateMetadata(
  { params }: Props,
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


export default function page({ params }: Props) {
  return (
    <>
      <ArticlePage />
    </>
  )
}     
