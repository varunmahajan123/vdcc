import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomBar } from "@/components/cta/MobileBottomBar";
import { AuthProvider } from "@/lib/firebase/AuthContext";
import { Toaster } from "react-hot-toast";
import { siteMetadata } from "@/config/metadata";
import { brand } from "@/config/brand";

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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Varun Dev Coaching Centre",
    "alternateName": "VDCC",
    "url": "https://vdcc-web.vercel.app",
    "logo": "https://vdcc-web.vercel.app/images/logo/logo.png",
    "description": "Amritsar's most trusted coaching centre offering concept-based learning from Playpen to Class 10 with experienced faculty and personalized mentoring.",
    "foundingDate": "1999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "A1 West Kashmir Avenue",
      "addressLocality": "Amritsar",
      "addressRegion": "Punjab",
      "addressCountry": "IN"
    },
    "telephone": ["+919915255710", "+919217659069"],
    "email": "varundev26081982@gmail.com",
    "areaServed": {
      "@type": "City",
      "name": "Amritsar"
    },
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": 15
    },
    "sameAs": [
      brand.social.facebook,
      brand.social.instagram
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark`}>
      <head>
        <Script
          id="vdcc-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
          <MobileBottomBar />
        </AuthProvider>
      </body>
    </html>
  );
}
