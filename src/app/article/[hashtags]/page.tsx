import { Metadata } from 'next';
import ArticlePage from './ArticlePage'

export const metadata: Metadata = {
  title: "nameArticle",
  openGraph: {
    type: "article",
    url: "hashtags",
    description: "description",
    images: [
      {
        url: "imgArticle",
        width: 1200,
        height: 630,
        alt: "Alt text cho hình ảnh"
      }
    ]
  },
  other: {
    "fb:app_id": "https://www.facebook.com/NCaesar.1564"
  }
};

export default function page() {
  console.log("Home component đang chạy trên:", typeof window === "undefined" ? "Server" : "Client");

  return (
    <>
      <ArticlePage />
    </>
  )
}
