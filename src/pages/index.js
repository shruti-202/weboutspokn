import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Features from "@/Components/Features/Features";
import Review from "@/Components/Review/Review";
import Footer from "@/Components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Features />
      <Review />
      <Footer />
    </div>
  );
}
