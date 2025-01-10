import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Author Duongdt_dev",
};
export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}