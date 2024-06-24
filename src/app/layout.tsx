import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://bipinkhatri.com.np"),
  title: "Bipin Khatri",
  description: "Full stack Developer | Freelancer | UI/UX Designer",
  openGraph: {
    images: "og-image.png",
  },
  twitter: {
    images: "og-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-primary text-white">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
