import ArticlePage from './ArticlePage'
import { Metadata } from "next";

interface Article {
  id: number;
  idContent: number;
  nameArticle: string;
  imgArticle: string;
  hashtags: string;
  description?: string;
  author: string;
  content: string;
  category: string;
}

async function getArticle(): Promise<Article> {
  const res = await fetch("http://localhost:3000/data.json", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch data");
  const data = await res.json();
  return data.articles[0];
}
export async function generateMetadata(): Promise<Metadata> {
  const article = await getArticle();

  return {
    title: article.nameArticle || "Default Title",
    description: article.description || "Default Description",
    openGraph: {
      type: "website",
      title: article.nameArticle || "Default Title",
      description: article.description || "Default Description",
      images: [
        {
          url: article.imgArticle || "default-image.jpg",
          width: 1200,
          height: 720,
        },
      ],
    },
  };
}
interface Props {
  article: Article;
}
export default function page({ article }: Props) {
  const metadata: Metadata = {
    title:
      // `${article.nameArticle}` || 
      'defaultname',
    openGraph: {
      type: "website",
      description:
        // `${article.description}` || 
        'defaultdescription',
      images: [
        {
          url:
            // `${article.imgArticle}` || 
            'https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg',
          height: 1200,
          width: 720
        }
      ]
    }
  };
  return (
    <>
      <ArticlePage />
    </>
  )
}     
