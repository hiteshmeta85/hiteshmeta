import type { Metadata, Viewport } from "next";
import { Epilogue } from "next/font/google";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Toaster } from "@/components/ui/Toaster";
import Nav from "@/components/Nav/Nav";
import Mail from "@/components/Nav/Mail";
import MobileNav from "@/components/Nav/MobileNav";
import Footer from "@/components/Footer";
import "./globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-epilogue",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "hiteshmeta",
    template: "%s | hiteshmeta",
  },
  description: "Personal Portfolio Website of Hitesh Meta",
  icons: {
    icon: "/favicon.ico",
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
      <body className={`${epilogue.variable} font-sans`} suppressHydrationWarning>
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
            <main className="no-scrollbar-visible container relative min-h-[100vh] pb-20">
              {children}
              <Footer />
              <Toaster />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
