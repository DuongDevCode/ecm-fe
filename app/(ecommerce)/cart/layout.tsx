import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart production item",
  description: "",
};
export default function Cart({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>
}