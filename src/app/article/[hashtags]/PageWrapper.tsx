"use client"
import dynamic from "next/dynamic";
const ArticlePage = dynamic(() => import("./ArticlePage"), { ssr: false });
export default function UserWrapper() {
  return <ArticlePage />;
}