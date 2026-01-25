import type { Metadata, Viewport } from "next";
import { Epilogue } from "next/font/google";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import Mail from "@/components/Nav/Mail";
import MobileNav from "@/components/Nav/MobileNav";
import Nav from "@/components/Nav/Nav";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Toaster } from "@/components/ui/Toaster";
import "./globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-epilogue",
  display: "swap",
});

const baseUrl = "https://hiteshmeta.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Hitesh Meta",
    template: "%s | Hitesh Meta",
  },
  description:
    "Software Engineer specializing in React, TypeScript, and Node.js. Building dynamic web applications.",
  keywords: [
    "Hitesh Meta",
    "Software Engineer",
    "React",
    "TypeScript",
    "Node.js",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Hitesh Meta" }],
  creator: "Hitesh Meta",
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Hitesh Meta",
    title: "Hitesh Meta - Software Engineer",
    description:
      "Software Engineer specializing in React, TypeScript, and Node.js. Building dynamic web applications.",
    images: [
      {
        url: "/avatar.jpeg",
        width: 400,
        height: 400,
        alt: "Hitesh Meta",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Hitesh Meta - Software Engineer",
    description:
      "Software Engineer specializing in React, TypeScript, and Node.js. Building dynamic web applications.",
    images: ["/avatar.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#18181b" },
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
          defaultTheme="dark"
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
      </body>
    </html>
  );
}
