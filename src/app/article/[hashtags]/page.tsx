import { Metadata } from 'next';
import ArticleDetail from './ArticleDetail'; 
import axios from 'axios';

type Params = { hashtags: string };

interface PageProps {
  params: Params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { hashtags } = params;

  const res = await axios.get(`http://localhost:4000/articles`);
  const article = res.data.find((a: { hashtags: string }) => a.hashtags === hashtags);

  if (!article) {
    return {
      title: 'Bài viết không tồn tại',
      description: 'Không tìm thấy bài viết yêu cầu',
    };
  }

  return {
    title: article.nameArticle,
    description: article.description,
    openGraph: {
      title: article.nameArticle,
      description: article.description,
      url: `http://localhost:4000/articles/${article.hashtags}`,
      images: [
        {
          url: article.imgArticle,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default function Page({ params }: PageProps) {
  return <ArticleDetail />;
}
