import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Sidebar from "@/components/Sidebar";
import BottomPlayer from "@/components/BottomPlayer";

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

      <body>
        <TooltipProvider>

          <div className="h-screen overflow-hidden flex flex-col bg-spotify-black text-white">
            <div className="flex flex-1 min-h-0">
              <div className="h-full">
                <Sidebar />
              </div>
              <div className="flex-1 h-full bg-spotify-dark p-8 overflow-y-auto relative min-h-0 flex flex-col justify-between">
                {/* Soothing Dot Matrix Grid Background */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.12] z-0"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #ffffff 1.2px, transparent 1.2px)',
                    backgroundSize: '24px 24px'
                  }}
                />

                {/* Glowing Ambient Backdrop Blurs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                  <div className="absolute top-[10%] left-[20%] w-[350px] h-[350px] rounded-full bg-gold-accent/5 blur-[90px] animate-blob-1" />
                  <div className="absolute bottom-[20%] right-[15%] w-[450px] h-[450px] rounded-full bg-indigo-500/5 blur-[100px] animate-blob-2" />
                </div>

                {/* Floating Geometric Outlines and Shapes (Aesthetic Music Environment) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
                  {/* Rotating Gold Accent Ring */}
                  <svg className="absolute top-[15%] right-[20%] w-24 h-24 text-gold-accent/20 animate-shape-1" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </svg>

                  {/* Rotating White Accent Cross */}
                  <svg className="absolute bottom-[25%] left-[25%] w-8 h-8 text-white/20 animate-shape-2" viewBox="0 0 100 100">
                    <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>

                  {/* sound concentric waves outline */}
                  <svg className="absolute top-[60%] left-[10%] w-32 h-32 text-white/10 animate-shape-1" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
                    <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 3" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </svg>

                  {/* Another rotating cross */}
                  <svg className="absolute top-[25%] left-[45%] w-6 h-6 text-gold-accent/15 animate-shape-2" viewBox="0 0 100 100">
                    <line x1="50" y1="15" x2="50" y2="85" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                    <line x1="15" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  </svg>

                  {/* Orbiting dot cluster */}
                  <svg className="absolute bottom-[10%] right-[30%] w-16 h-16 text-white/15 animate-shape-2" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="3" fill="currentColor" />
                    <circle cx="20" cy="50" r="2" fill="currentColor" />
                    <circle cx="80" cy="50" r="2" fill="currentColor" />
                    <circle cx="50" cy="20" r="2" fill="currentColor" />
                    <circle cx="50" cy="80" r="2" fill="currentColor" />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 9" />
                  </svg>
                </div>

                {/* Main Content Display*/}
                <div>
                  {children}
                </div>
              </div>
            </div>
            <div>
              <BottomPlayer />
            </div>
          </div>

          <Toaster richColors />
        </TooltipProvider>
      </body>

    </html>
  );
}
