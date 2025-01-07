import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users",
  description: "Author Duongdt_dev",
};
export default function SignInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}