import Head from "next/head";
import Features from "@/Components/Features/Features";
import Navbar from "@/Components/Navbar/Navbar";
import Header from "@/Components/Header/Header";
import ThirdSection from "@/Components/ThirdSection/ThirdSection";
import Review from "@/Components/Review/Review";
import Footer from "@/Components/Footer/Footer";
import Values from "@/Components/Values/Values";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Features />
      <ThirdSection />
      <Values />
      <Review />
      <Footer />
    </div>
  );
}
