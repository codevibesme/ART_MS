import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StateProvider from "./StateProvider";
import DashProvider from "./contexts/dashContext/DashContext";
import AuthProvider from "./contexts/authContext/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ART Management Services",
  description: "Automated Rent Management & Reports application",

  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.png",
        href: "/logo.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo.png",
        href: "/logo.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
