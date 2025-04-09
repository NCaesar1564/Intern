import User from "@/app/Container/User";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trang chủ",
  openGraph: {
    type: "website",
    description: "Trang chủ",
  }
};
export default function Home() {
  return (
    <>
      <User />
    </>
  );
}
