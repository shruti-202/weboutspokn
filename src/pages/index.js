import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Features from "@/Components/Features/Features";
import Navbar from "@/Components/Navbar/Navbar";
import Header from "@/Components/Header/Header";
import ThirdSection from "@/Components/ThirdSection/ThirdSection";

export default function Home() {
  return (
    <div>
      <Header />
      <ThirdSection />
      {/* <Navbar /> */}
      {/* <Features /> */}
    </div>
  );
}
