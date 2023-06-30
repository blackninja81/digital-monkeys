"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

import { Inter } from "next/font/google";
import Navbar from "@/Layouts/Navbar";
import Footer from "@/Layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <CacheProvider>
            <ChakraProvider>{children}</ChakraProvider>
          </CacheProvider>
          <Footer />
        </body>
      </html>
    </>
  );
}
