import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Musicon | Stream Unlimited Ad-Free High-Quality Music",
    template: "%s | Musicon",
  },
  description: "Stream unlimited, high-quality music for free on Musicon. Enjoy a seamless, ad-free listening experience with personalized playlists, custom stations, and offline playback.",
  keywords: [
    "music streaming",
    "ad-free music",
    "high-quality audio",
    "free music player",
    "stream music",
    "personalized playlists",
    "Musicon"
  ],
  authors: [{ name: "Musicon Team" }],
  creator: "Musicon Team",
  metadataBase: new URL("https://musicon.vercel.app"), // Replace with your actual production domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://musicon.vercel.app",
    title: "Musicon | Stream Unlimited Ad-Free High-Quality Music",
    description: "Stream unlimited, high-quality music for free on Musicon. Enjoy a seamless, ad-free listening experience with personalized playlists, custom stations, and offline playback.",
    siteName: "Musicon",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Musicon - Stream Unlimited Ad-Free High-Quality Music",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Musicon | Stream Unlimited Ad-Free High-Quality Music",
    description: "Stream unlimited, high-quality music for free on Musicon. Enjoy a seamless, ad-free listening experience with personalized playlists, custom stations, and offline playback.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
  },
  verification: {
    google: "y179-I-DJJ4IBn50gwSu-sM5KM--jfo6ujRGv5Gt1Uk"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className}`} suppressHydrationWarning>

      <body className="min-h-full flex flex-col">
        <TooltipProvider>
          <main>
            {children}
          </main>
          <Toaster richColors />
        </TooltipProvider>
      </body>

    </html>
  );
}
