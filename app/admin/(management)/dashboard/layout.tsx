import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Author Duongdt_dev",
};
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}