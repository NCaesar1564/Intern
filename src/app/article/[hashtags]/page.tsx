import axios from 'axios'
import ArticlePage from './ArticleDetail'
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { id: number }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id

  const article = await axios.get(`http://localhost:4000/articles/${id}`)
    .then((res) => res.data)
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
      url: article.hashtags,
      images: [
        {
          url: article.imgArticle,
          height: 1200,
          width: 800
        }
      ],
    },
  }
}

export default function Page() {
  return <ArticlePage />
}
