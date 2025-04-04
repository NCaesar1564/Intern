import ArticlePage from './ArticlePage'
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    'defaultname',
  openGraph: {
    type: "website",
    description:
      'defaultdescription',
    images: [
      {
        url:
          'https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg',
        height: 1200,
        width: 720
      }
    ]
  }
};

export default function Page() {
  return (
    <>
      <ArticlePage />
    </>
  )
}     
