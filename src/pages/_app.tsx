// src/pages/_app.tsx
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import Head from "next/head";
import AuthWrapper from "../components/AuthWrapper";

//fonts
import "@fontsource/epilogue/800.css";
import "@fontsource/epilogue/700.css";
import "@fontsource/epilogue/400.css";

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
          <Component {...pageProps} />
        </AuthWrapper>
      </SessionProvider>
    </>
  );
};

export default trpc.withTRPC(MyApp);
