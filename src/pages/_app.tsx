import "../styles/globals.css";
import "@fontsource/epilogue/800.css";
import "@fontsource/epilogue/700.css";
import "@fontsource/epilogue/400.css";
import NextNProgress from "nextjs-progressbar";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <NextNProgress
        color="#a1a1aa"
        height={3}
        startPosition={0}
        options={{ showSpinner: false }}
      />
      <ThemeProvider defaultTheme="dark" attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
};

export default MyApp;
