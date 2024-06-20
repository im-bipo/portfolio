import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase : new URL('localhost:3000'),
  title: "Bipin Khatri",
  description: "Full stack Developer | Freelancer | UI/UX Designer",
  openGraph: {
    type: "website",
    title: "Bipin Khatri ",
    description: "Full stack Developer | Freelancer | UI/UX Designer",
    siteName: "Bipin Khatri",
    images: [
      {
        url: "og-image.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
