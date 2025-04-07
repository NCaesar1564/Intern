import ArticleDetail from './ArticleDetail'
import type { Metadata } from 'next'

type PageParams = {
  hashtags: string
}

type PageProps = {
  params: PageParams
}

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  try {
    const res = await fetch(`http://localhost:4000/articles?hashtags=${params.hashtags}`, {
      cache: 'no-store',
    });

    if (!res.ok) throw new Error('Failed to fetch article');
    
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
  } catch (error) {
    return {
      title: 'Lỗi hệ thống',
      description: 'Đã xảy ra lỗi khi tải thông tin bài viết',
    };
  }
};

export default function Page({ params }: PageProps) {
  return <ArticleDetail hashtags={params.hashtags}/> 
}