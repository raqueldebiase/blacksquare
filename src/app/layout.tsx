
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/organisms/Navbar";
import "./globals.css";
import Footer from "./components/organisms/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Black Square",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/BS-favicon.png" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <header className="bg-white shadow p-4">
          <Navbar />
        </header>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
