import { Metadata } from 'next';
import ArticleDetail from './ArticleDetail'; // Giả sử bạn đã có component ArticleDetail
import axios from 'axios';

type Props = {
  params: { hashtags: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { hashtags } = params;

  // Fetch bài viết từ API dựa trên hashtag
  const res = await axios.get(`http://localhost:4000/articles`);
  const article = res.data.find((a: { hashtags: string }) => a.hashtags === hashtags);

  if (!article) {
    // Nếu không tìm thấy bài viết, trả về metadata mặc định
    return {
      title: 'Bài viết không tồn tại',
      description: 'Không tìm thấy bài viết yêu cầu',
    };
  }

  // Trả về metadata từ dữ liệu bài viết
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

export default function Page({ params }: Props) {
  return <ArticleDetail />;
}
