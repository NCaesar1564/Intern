import { Metadata } from 'next';
import ArticlePage from './ArticlePage'

export const metadata: Metadata = {
  title: "Trang chủ",
  openGraph: {
    url: "hashtags",
    description: "description",
    images: [
      {
        url: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
        width: 1200,
        height: 630,
        alt: "Alt text cho hình ảnh"
      }
    ]
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
