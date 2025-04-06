import ArticlePage from './ArticleDetail'
import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: Promise<{ hashtag: string }>
  searchParams: Promise<{[key: string]: string | string[] | undefined }>
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug =(await params).hashtag 
  const post = await fetch(`http://localhost:4000/articles/${slug}`).then((res) =>
    res.json()
  )
 
  return {  
    title: post.nameArticle,
    description: post.description,
    openGraph: {
      images: [
        {
          url: post.imgArticle,
          height: 1200,
          width: 720,
        }
      ]
    }
  }
}

export default function Page() {
  return <ArticlePage  />
}