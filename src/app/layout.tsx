import type { Metadata } from "next";
import { inter } from "@/config/fonts";
import TopMenu from "@/components/ui/Top-menu/TopMenu";
import "./globals.css";
import SideBar from "@/components/ui/SideBar/SideBar";

export const metadata: Metadata = {
  title: "Teslo shop",
  description: "tienda virtual de tesla",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopMenu />
        <SideBar />
        <div className="md:px-2 sm:px-6">{children}</div>
      </body>
    </html>
  );
}
