import ArticleDetail from './ArticleDetail'
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: Promise<{ hashtags: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { hashtags } = await params
  const a = await fetch(`http://localhost:4000/articles?hashtags=${hashtags}`).then((res) => res.json())

  return {
    title: a.nameArticle,
    description: a.description,
    openGraph: {
      url: a.hashtags,
      images: [
        {
          url: a.imgArticle,
          height: 1200,
          width: 800,
          alt: a.nameArticle
        }
      ],
    },
  }
}
export default async function Page({ params }: Props) {
  const { hashtags } = await params;
  return (
    <>
      <ArticleDetail hashtags={hashtags} />
    </>
  )
}