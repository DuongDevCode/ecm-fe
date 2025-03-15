import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detail production",
  description: "",
};
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>
}