import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register Page",
  description: "Author Duongdt_dev",
};
export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}