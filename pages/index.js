import Head from "next/head";
import HomePage from "../src/components/home";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>My store</title>
        <meta name="description" content="ecommerce website using next js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo-2.png" />
      </Head>
      <HomePage />
    </>
  );
}
