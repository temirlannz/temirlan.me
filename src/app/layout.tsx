import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

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
        <div className='max-w-[540px] mx-auto py-10'>
          <header>
            <Header />
          </header>
          <main>
            {children}
          </main>
          <footer>
            footer
          </footer>
        </div>
      </body>
    </html>
  );
}
