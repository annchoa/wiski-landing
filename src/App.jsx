import { useRef } from "react";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import ProductShelf from "./components/ProductShelf/ProductShelf.jsx";
import Advantages from "./components/Advantages/Advantages.jsx";
import Steps from "./components/Steps/Steps.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";
import Faq from "./components/Faq/Faq.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
  const productShelfRef = useRef(null);

  const scrollToProducts = () => {
    productShelfRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Header />
      <main>
        <Hero onCtaClick={scrollToProducts} />
        <ProductShelf ref={productShelfRef} />
        <Advantages />
        <Steps />
        <Reviews />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
