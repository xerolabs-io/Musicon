import type { Metadata } from "next";
import { Inter, M_PLUS_Code_Latin, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import Sidebar from "@/components/Sidebar";
import BottomPlayer from "@/components/BottomPlayer";
import { DotPattern } from "@/components/ui/dot-pattern";
import Header from "@/components/Header";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const logofont = M_PLUS_Code_Latin({ subsets: ['latin'], variable: '--font-logofont', weight: ["400"] })
const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', weight: ['400'] })

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
      className={`${inter.className} ${logofont.variable} ${poppins.variable}`} suppressHydrationWarning>

      <body>
        <TooltipProvider>

          <div className="h-screen overflow-hidden flex flex-col bg-spotify-black text-white">

            {/* Dot Pattern */}
            <div className="absolute top-0 bottom-0 left-0 right-0 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
              <DotPattern
                glow={false}
                className={cn(
                  "[mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
                )}
              />
            </div>

            <div className="hidden sm:flex flex-1 min-h-0">
              <Sidebar />
              <div className="flex-1 h-full bg-transparent p-8 overflow-y-auto relative min-h-0 flex flex-col justify-between">
                {/* Main Content Display*/}
                <div className="h-full">
                  <div className="flex flex-col">
                    <Header />
                    <div>
                      {children}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:hidden justify-center items-center min-h-full">
              <div>MUSICON FOR MOBILE</div>
              <div>COMMING SOON...</div>
            </div>

            <div className='hidden sm:flex w-full '>
              <BottomPlayer />
            </div>

          </div>

          <Toaster richColors />
        </TooltipProvider>
      </body>

    </html>
  );
}