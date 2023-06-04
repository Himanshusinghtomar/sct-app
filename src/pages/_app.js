import "@/styles/globals.css";
import Head from "next/head";
import Footer from "@/components/Footer";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Singh Car Trade - Best Used Car Dealer</title>
        <meta
          name="description"
          content="Singh Car Trade - Best Used Car Dealer in Purnia,Bihar."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/navlogo.png" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
