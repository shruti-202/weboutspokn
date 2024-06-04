import "@/styles/globals.css";
import { Nunito_Sans } from "next/font/google";
import styles from "@/styles/Home.module.css";
const Nunito = Nunito_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={Nunito.className}>
      <Component {...pageProps} />
    </main>
  );
}
