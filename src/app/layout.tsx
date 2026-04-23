import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { FloatingWhatsApp } from "@/components/cta/FloatingWhatsApp";
import { MobileBottomBar } from "@/components/cta/MobileBottomBar";
import { AuthProvider } from "@/lib/firebase/AuthContext";
import { Toaster } from "react-hot-toast";
import { siteMetadata } from "@/config/metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark`}>
      <body className="antialiased min-h-screen flex flex-col bg-bg-primary text-text-primary pb-16 md:pb-0">
        <AuthProvider>
          <Toaster 
            position="top-center" 
            toastOptions={{
              style: {
                background: '#1E293B',
                color: '#F8FAFC',
                border: '1px solid #334155'
              }
            }} 
          />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <ChatWidget />
          <MobileBottomBar />
        </AuthProvider>
      </body>
    </html>
  );
}
