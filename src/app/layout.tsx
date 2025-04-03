import fs from "fs";
import path from "path";
import "./globals.css";

const filePath = path.join(process.cwd(), "public", "data.json");
const jsonData = fs.readFileSync(filePath, "utf-8");
const data = JSON.parse(jsonData);
const articles = data.articles?.[0] || {}; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content={articles.imgArticle} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:title" content={articles.nameArticle} />
        <meta property="og:url" content={articles.hashtags} />
        <meta property="og:description" content={articles.description} />
      </head>
      <body>{children}</body>
    </html>
  );
}
