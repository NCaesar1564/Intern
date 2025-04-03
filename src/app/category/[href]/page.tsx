import Head from 'next/head';
import PageWrapper from './PageWrapper'
export default function page() {
  console.log("Home component đang chạy trên:", typeof window === "undefined" ? "Server" : "Client");
  return (
    <>
      <Head>
        <meta property="og:title" content="Tiêu đề trang" />
        <meta property="og:description" content="Mô tả trang" />
        <meta property="og:image" content="https://example.com/og-image.jpg" />
        <meta property="og:url" content="https://example.com" />
      </Head>
      <PageWrapper />
    </>
  )
}
