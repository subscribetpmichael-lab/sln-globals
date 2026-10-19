import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import SourcingMap from "./components/SourcingMap";
import Process from "./components/Process";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <SourcingMap />
        <Process />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
