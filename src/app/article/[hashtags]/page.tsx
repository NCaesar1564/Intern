import ArticlePage from './ArticlePage'

export default function page() {
  console.log("Home component đang chạy trên:", typeof window === "undefined" ? "Server" : "Client");
  return (
    <>
      <ArticlePage />
    </>
  )
}
