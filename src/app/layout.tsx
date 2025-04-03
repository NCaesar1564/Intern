import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "nameArticle",
  openGraph: {
    description: "description",
    images: "imgArticle"
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
