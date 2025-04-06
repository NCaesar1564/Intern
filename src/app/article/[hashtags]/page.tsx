import ArticlePage from './ArticleDetail'
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { id: string }  
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = parseInt(params.id) 

  const article = await fetch(`http://localhost:4000/articles/${id}`)
    .then((res) => res.json())
    .catch(() => null)

  if (!article) {
    return {
      title: 'Bài viết không tồn tại',
      description: 'Không tìm thấy bài viết được yêu cầu'
    }
  }

  return {
    title: article.nameArticle,
    description: article.description,
    openGraph: {
      title: article.nameArticle,
      description: article.description,
      url: article.hashtags,
      images: [
        {
          url: article.imgArticle,
          width: 800,
          height: 1200,
        }
      ],
    },
  }
}

export default function Page({ params }: Props) {
  return <ArticlePage params={params} />
}