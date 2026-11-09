import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Products } from "@/components/Products";
import { Showcase } from "@/components/Showcase";
import { Testimonials } from "@/components/Testimonials";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Showcase />
        <Products />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
