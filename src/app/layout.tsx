import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import { Terminal } from "lucide-react";

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
    <html lang="en" className="dark">
      <body
        className={`${poppins.className} dark:bg-[#111111] dark:text-gray-300`}
      >
        <nav className="w-full fixed bg-[#18181b]/90 z-10 backdrop-blur-lg py-4 px-2">
          <div className="w-full container flex justify-between">
            <div className="flex">
              Bipo
              <Terminal />
            </div>
            <div>
              <ul className="flex gap-2">
                <li>Home</li>
                <li>Work</li>
                <li>Projects</li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="pt-10">{children}</main>
      </body>
    </html>
  );
}
