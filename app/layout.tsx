import "./globals.css";
import type { Metadata } from "next";

import NavigationBar from "@/components/navigation-bar";

export const metadata: Metadata = {
  title: "Nexium UI",
  description: "A UI Component Library for Building Modern User Interfaces with Next.js. ",
  // icons: {
  //   icon: "/favicon.ico",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-[#09090b]`}>
        <main className="min-h-screen">
          <NavigationBar />
          {children}
        </main>
      </body>
    </html>
  );
}
