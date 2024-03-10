import type { Metadata } from "next";

import NavbarMain from "@/components/navbar/navbar-main";
import NavbarSubMini from "@/components/navbar/navbar-sub-mini";
import NavbarSub from "@/components/navbar/navbar-sub";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <NavbarSub /> */}
      {children}
    </>
  );
}
