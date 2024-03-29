import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
const image = "/frederickpartyrentalslogo.png";

export const metadata: Metadata = {
  title: "Frederick Party Rentals",
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
