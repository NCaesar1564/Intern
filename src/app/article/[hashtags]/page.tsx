import { Metadata } from 'next';
import ArticlePage from './ArticlePage'

export const metadata: Metadata = {
  title: "ZNew | nameArticle",
  openGraph: {
    url: "hashtags",
    type: 'website',
    description: "description for Article",
    images: [
      {
        url: "https://down-vn.img.susercontent.com/file/promo-dim-01003f4edf8cee6efa614ecc856ac3fd1efa",
        width: 1200,
        height: 630,
        alt: "Alt text cho hình ảnh"
      }
    ]
  }
};


export default function page() {
  return (
    <>
      <ArticlePage />
    </>
  )
}     
