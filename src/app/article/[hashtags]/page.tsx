import ArticleDetail from './ArticleDetail'
import type { Metadata } from 'next'

type Props = {
  params: {
    hashtags: string
  }
}
export const generateMetadata = async (
  { params }: Props
): Promise<Metadata> => {
  const res = await fetch(`http://localhost:4000/articles?hashtags=${params.hashtags}`, {
    cache: 'no-store',
  });

  const data = await res.json();

  const article = Array.isArray(data) ? data[0] : data;

  if (!article) {
    return {
      title: 'Không tìm thấy bài viết',
      description: 'Bài viết bạn tìm kiếm không tồn tại.',
    };
  }

  return {
    title: article.nameArticle,
    description: article.description,
    openGraph: {
      images: [{
        url: article.imgArticle,
        height: 1200,
        width: 800,
        alt: article.nameArticle
      }],
      url: article.hashtags
    },
  };
};

export default function Page({ params }: Props) {
  return <ArticleDetail />
}
