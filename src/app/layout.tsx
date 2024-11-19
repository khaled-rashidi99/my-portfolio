import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Khaled AlRashidi | Portfolio",
  description: "Khaled AlRashidi | Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#121212]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
