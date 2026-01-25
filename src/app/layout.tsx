import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Epilogue } from "next/font/google";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import Mail from "@/components/Nav/Mail";
import MobileNav from "@/components/Nav/MobileNav";
import Nav from "@/components/Nav/Nav";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Toaster } from "@/components/ui/Toaster";
import { siteConfig, themeConfig } from "@/lib/config";
import "./globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-epilogue",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name }],
  creator: siteConfig.author.name,
  icons: {
    icon: siteConfig.images.favicon,
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - Software Engineer`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.images.avatar,
        width: 400,
        height: 400,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.name} - Software Engineer`,
    description: siteConfig.description,
    images: [siteConfig.images.avatar],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: themeConfig.colors.light.themeColor,
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: themeConfig.colors.dark.themeColor,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body
        className={`${epilogue.variable} font-sans`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme={themeConfig.defaultTheme}
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-white dark:bg-[#18181b]">
            <Nav />
            <Mail />
            <MobileNav />
            <main className="container relative min-h-screen pb-20">
              {children}
              <div className="mt-16">
                <Footer />
              </div>
            </main>
          </div>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
