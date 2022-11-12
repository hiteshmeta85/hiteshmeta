import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import "@fontsource/epilogue/800.css";
import "@fontsource/epilogue/700.css";
import "@fontsource/epilogue/400.css";
import NextNProgress from "nextjs-progressbar";
import { ThemeProvider } from "next-themes";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <NextNProgress
        color="#a1a1aa"
        height={3}
        startPosition={0}
        options={{ showSpinner: false }}
      />
      <ThemeProvider defaultTheme="dark" attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
