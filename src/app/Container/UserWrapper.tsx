"use client";
import dynamic from "next/dynamic";

const User = dynamic(() => import("./User"), { ssr: false });

export default function UserWrapper() {
  return <User />;
}