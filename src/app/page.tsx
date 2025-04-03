import User from "@/app/Container/User";

export default function Home() {
  console.log("Home component đang chạy trên:", typeof window === "undefined" ? "Server" : "Client");
  return (
    <>
      <User />
    </>
  );
}
