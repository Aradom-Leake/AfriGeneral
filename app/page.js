"use client";
import Carousel from "./components/Coursel";
import Quote from "./components/qoute";
import Feature from "./components/feature";
import ServicePage from "./components/services";
import About from "./components/about";
import Fact from "./components/fact";
import Fade from "react-reveal/Fade";

export default function Home() {
  return (
    <>
      <Carousel />
      <main className="flex min-h-screen flex-col items-center justify-between p-3 md:p-8 w-11/12 m-auto">
        <Fade top duration={1000} distance="10%">
          <About />
        </Fade>
        <Fact />
        <ServicePage />
        <Feature />

        <Quote />
      </main>
    </>
  );
}
