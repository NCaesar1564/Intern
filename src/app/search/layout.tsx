import Footer from "../Components/Footer";
import Header from "./Container/HeaderSearch";
export default function LayoutSearch({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
