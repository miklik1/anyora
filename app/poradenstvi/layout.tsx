import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anyora - Nutriční poradenství",
  description:
    "Objevte sebedůvěru, vyváženost a klid s Anyora - Nutričním poradenstvím. Aneta Bartková, vášnivá výživová poradkyně studující na Mendelově univerzitě v Brně, nabízí důkazem podložená řešení výživy. Od personalizovaných konzultací a výživových plánů po online koučink, Anyora zjednodušuje cestu k zdravějšímu a vyváženějšímu životnímu stylu. Přijměte filozofii zaměřenou na jednoduchost, empatii a udržitelnou změnu. Prioritou je vaše zdraví s odborníkem, který rozumí cestě. Připojte se k Anyora na cestě ke radosti a potěšení z jídla, bez zbytečných složitostí. Přečtěte si reference klientů a vydejte se na transformační a individuální přístup k celkovému blahobytu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
