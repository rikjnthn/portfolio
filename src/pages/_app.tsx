import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";

import "@/styles/globals.css";
import customTheme from "@/styles/global-style";
import { Navigation, HTMLHead } from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <HTMLHead />
      <Navigation />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
