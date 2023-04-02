import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";

import "@/styles/globals.css";
import customTheme from "@/styles/global-style";
import Navigation from "@/components/Navigation";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Navigation />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
