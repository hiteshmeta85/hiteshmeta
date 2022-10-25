// src/pages/_app.tsx
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import Head from "next/head";
import AuthWrapper from "../components/AuthWrapper";

// fonts
import "@fontsource/epilogue/800.css";
import "@fontsource/epilogue/700.css";
import "@fontsource/epilogue/400.css";

// nprogress bar
import NextNProgress from "nextjs-progressbar";
import PageTransitionEffect from "../components/PageTransitionEffect";

// navbar
import Nav from "../components/Nav/Nav";
import Mail from "../components/Nav/Mail";
import MobileNav from "../components/Nav/MobileNav";

// next-themes - theme provider
import { ThemeProvider } from "next-themes";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <Head>
        <title>hiteshmeta</title>
      </Head>
      <SessionProvider session={session}>
        <AuthWrapper>
          <NextNProgress
            color="#a1a1aa"
            height={3}
            startPosition={0}
            options={{ showSpinner: false }}
          />
          <ThemeProvider defaultTheme="dark" attribute="class">
            <Nav />
            <Mail />
            <MobileNav />
            <PageTransitionEffect>
              <Component {...pageProps} />
            </PageTransitionEffect>
          </ThemeProvider>
        </AuthWrapper>
      </SessionProvider>
    </>
  );
};

export default trpc.withTRPC(MyApp);
