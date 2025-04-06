import ArticleDetail from './ArticleDetail'
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { hashtags: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.hashtags;
  const res = await fetch(`http://localhost:4000/articles?hashtags=${slug}`);

  if (!res.ok) {
    return {
      title: "Bài viết không tồn tại",
      description: "Không tìm thấy bài viết này trong hệ thống.",
    };
  }

  const post = await res.json();

  return {
    title: post.nameArticle,
    description: post.description,
    openGraph: {
      images: [
        {
          url: post.imgArticle,
          height: 1200,
          width: 720,
        },
      ],
    },
  };
}


export default function Page({ params }: Props) {
  return <ArticleDetail slug={params.hashtags} />
}
