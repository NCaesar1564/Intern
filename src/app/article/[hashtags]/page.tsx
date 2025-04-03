import Head from 'next/head';
import PageWrapper from './PageWrapper'
export default function page() {
  console.log("Home component đang chạy trên:", typeof window === "undefined" ? "Server" : "Client");
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : "http://localhost:3000");
  const ogImage = `${siteUrl}/Imagesbanner.png`;
  return (
    <>
      <Head>
        <meta property="og:image" content={ogImage} />
      </Head>
      <PageWrapper />
    </>
  )
}
