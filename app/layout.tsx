import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { siteContent } from "@/content/site";
import { homeContent } from "@/content/home";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const homeOgTitle = homeContent.hero.title.replace(/\n/g, " ");

// TODO: swap for the real production domain before launch (also remove the
// `robots: noindex` below at the same time).
const siteUrl = "https://www.seniorhealthcare.org.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteContent.name,
    template: `%s | ${siteContent.name}`,
  },
  description: siteContent.tagline,
  openGraph: {
    title: homeOgTitle,
    description: homeContent.hero.subhead,
    siteName: siteContent.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: homeOgTitle,
    description: homeContent.hero.subhead,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
