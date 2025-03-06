import type { Metadata } from "next";
import "./globals.css";
import HeroTop from "@/components/hero-top";

export const metadata: Metadata = {
  title: "QR Code Generator",
  description: "Generate custom QR codes instantly with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="container mx-auto w-full pt-20 px-4 md:px-10 ">
          <HeroTop />
          <main className="mt-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
