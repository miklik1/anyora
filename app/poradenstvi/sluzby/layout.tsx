import type { Metadata } from "next";
import { ServiceHero } from "@/components/poradenstvi/sluzby/service-hero";
import jsonData from "@/data/services.json";
import NavbarSubMini from "@/components/navbar/navbar-sub-mini";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavbarSubMini />
      <ServiceHero services={jsonData} />
      {children}
    </>
  );
}
