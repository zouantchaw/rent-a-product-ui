import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] });
const image = "/klutch-logo.png";

export const metadata: Metadata = {
  title: "Klutch Rentals",
  description: "DMV's premier party and event rental company",
  icons: [image],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* 
            NOTE: The ThemeProvider component is a client component being used 
            inside of a server component. React server components at play.
        */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
