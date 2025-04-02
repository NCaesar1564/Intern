"use client";
import Head from "next/head";
import User from "@/app/Container/User";

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Bài viết nổi bật" />
        <meta property="og:description" content="Danh sách các bài viết mới nhất" />
        <meta property="og:image" content="https://upload.wikimedia.org/wikipedia/commons/f/f5/Lotus_flower_%28978659%29.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="article" />
      </Head>
      <User />
    </>
  );
}
