import { Metadata } from "next";
import GenerationPage from "@/components/layout/Generation";

export const metadata: Metadata = {
  title: "Dashboard Page",
  description: "Author Duongdt_dev",
};

interface  LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return(
    <GenerationPage children={children} />
  )
}