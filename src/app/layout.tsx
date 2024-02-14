import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import {Boxes} from "@/components/ui/background-boxes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zhanibek Temirlan",
  description: "Zhanibek Temirlan an enthusiast Full-stack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='max-w-[540px] mx-auto py-5 sm:py-10 px-3 sm:px-0 flex flex-col gap-10'>
          <header>
            <Header />
          </header>
          <main>
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
