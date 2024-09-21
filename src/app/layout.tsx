import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "./_components/sidebar";
const inter = Inter({
  subsets: ["latin"],
  display: "auto",
});

export const metadata: Metadata = {
  title: "NSW Sales",
  description: "Este projeto serve como uma base para sistemas mais complexos, sendo ideal para pequenos comércios ou projetos de estudo voltados à gestão de vendas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <div className="flex h-full">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
