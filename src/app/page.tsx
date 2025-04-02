"use client";
import Head from "next/head";
import User from "@/app/Container/User";

export const metadata = {
  openGraph: {
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Lotus_flower_%28978659%29.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};
export default function Home() {
  return (
    <>
      <User />
    </>
  );
}
