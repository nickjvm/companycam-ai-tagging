import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PhotosProvider } from "@/lib/context/PhotosContext";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CompanyCam Mock Integration — AI Photo Tagging",
  description: "By Nick VanMeter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PhotosProvider>
          <div className="m-auto max-w-[1200px]">{children}</div>
        </PhotosProvider>
      </body>
    </html>
  );
}
