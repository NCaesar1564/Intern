"use client"
import dynamic from "next/dynamic";
const CategoryPage = dynamic(() => import("./CategoryPage"), { ssr: false });
export default function UserWrapper() {
  return <CategoryPage />;
}