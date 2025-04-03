import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trang chủ",
  openGraph: {
    url: "hashtags",
    description: "description",
    images: [
      {
        url: "imgArticle",
        width: 1200, 
        height: 630,
        alt: "Alt text cho hình ảnh"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
