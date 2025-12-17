import { Metadata } from "next";
import Hero from "@/components/Hero/HeroSection";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import ProblemSection from "@/components/Problem";
import Testimonial from "@/components/Testimonial";
import AIWinsSection from "@/components/AI";

export const metadata: Metadata = {
  title: " InfiAlgo",

  // other metadata
  description: "This is Home for Solid Pro"
};

export default function Home() {
  return (
    <main>
      <Hero />
     
      <About />

      <FeaturesTab />
      <Feature />
      <ProblemSection />
      <AIWinsSection/>

       <FunFact />
      <Brands />


      {/* <Integration /> */}
      <FAQ />
      <Testimonial />
      <CTA />

      {/* <Pricing /> */}
      <Contact />
      {/* <Blog /> */}
    </main>
  );
}
