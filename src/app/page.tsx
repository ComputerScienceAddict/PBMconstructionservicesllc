import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Banner from "@/components/Banner";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Banner />
        <Gallery />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
