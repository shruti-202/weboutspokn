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
      <Values
        inverted={true}
        title="Talk about Anything and Everything"
        desc="Improve your English by chatting with Loora about anything from sports to tech, business, fashion, or your latest book or show. Loora is up for any topic."
        src="https://outspoknweb.s3.us-east-2.amazonaws.com/Feature/Feature2.png"
        lottieUrl="https://outspokn-fr.s3.us-east-2.amazonaws.com/chat/login-cat.json"
      />
      <Values
        title="Earn daily rewards on your idle tokens"
        desc="   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aene. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Feugiat nulla suspendisse tortor aene. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse
          tortor aene."
        src="https://outspoknweb.s3.us-east-2.amazonaws.com/Feature/Feature1.png"
      />

      <Review />
      <ThirdSection />
      <Footer />
      {/* <Navbar />
      <Header lottieUrl="https://outspokn-fr.s3.us-east-2.amazonaws.com/chat/age-screen-cat.json" />
      <Values
        title="Earn daily rewards on your idle tokens"
        desc="   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aene. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Feugiat nulla suspendisse tortor aene. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse
          tortor aene."
        src="https://outspoknweb.s3.us-east-2.amazonaws.com/Feature/Feature1.png"
      />
      <Values
        inverted={true}
        title="Talk about Anything and Everything"
        desc="Improve your English by chatting with Loora about anything from sports to tech, business, fashion, or your latest book or show. Loora is up for any topic."
        src="https://outspoknweb.s3.us-east-2.amazonaws.com/Feature/Feature2.png"
        lottieUrl="https://outspokn-fr.s3.us-east-2.amazonaws.com/chat/login-cat.json"
      />

      <ThirdSection />
      <Review />
      <Features />
      <Footer /> */}
    </div>
  );
}
