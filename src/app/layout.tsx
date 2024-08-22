"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [input, setInput] = useState("");
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <h1 className="bg-red-500 h-24">this is navbar</h1>

        <h1 className="bg-green-500 h-24">this is footer</h1>
      </body>
    </html>
  );
}
