// src/app/layout.tsx : UI Layout, global context providers, and one off global components
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { AuthProvider } from "@/providers/AuthProvider";
import { AuthDialogProvider } from "@/providers/AuthDialogProvider";
import AuthModal from "@/components/AuthModal";
import Footer from "@/components/sections/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Agents Directory",
  description:
    "Discover the best AI agents for your use case based on verified user reviews. Updated daily.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {/* Providers are mounted ONCE here and wrap the whole app */}
        <AuthProvider>
          <AuthDialogProvider>
            {/* Your entire app can now use useAuth() and useAuthDialog() */}
            {children}
            {/* One global login modal instance controlled by useAuthDialog() */}
            <AuthModal />
            <Footer />
          </AuthDialogProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
