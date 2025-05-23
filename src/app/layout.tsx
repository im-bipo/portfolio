import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import { Terminal } from "lucide-react";
import Footer from "@/components/Footer";

import GoogleAnalytics from "@/components/custom/GoogleAnalytics";
import MicrosoftClarity from "@/components/custom/MicrosoftClarity";
import Theme from "@/components/custom/Theme";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bipo.tech"),
  title: "Bipin Khatri",
  description: "Full stack Developer | App Developer",
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
    <html lang="en">
      <head>
        <GoogleAnalytics />
        <MicrosoftClarity />
      </head>
      <body
        className={`${poppins.className} dark:bg-[#0d1117] dark:text-gray-300`}
      >
        <nav className="w-full fixed bg-gray-100/80 dark:bg-[#010409]/80 z-10 backdrop-blur-lg py-4 px-2">
          <div className="w-full container flex justify-between">
            <div className="flex">
              Bipo
              <Terminal />
            </div>
            <Theme />
          </div>
        </nav>
        <main className="pt-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
