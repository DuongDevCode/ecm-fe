import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Author Duongdt_dev",
};
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}