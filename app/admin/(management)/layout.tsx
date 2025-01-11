import { Metadata } from "next";
// import AdminPage from "@/components/layout/Generation";
import AdminPage from "./page"

export const metadata: Metadata = {
  title: "Admin Login",
  description: "Author Duongdt_dev",
};

interface  LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return(
    <AdminPage children={children} />
  )
}