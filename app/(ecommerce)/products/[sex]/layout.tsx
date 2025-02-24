import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fashion clother",
  description: "Author Duongdt_dev",
};

interface  LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return <>{children}</>
}