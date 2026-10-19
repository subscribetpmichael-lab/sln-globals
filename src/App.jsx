import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Strengths from "./components/Strengths";
import Certificates from "./components/Certificates";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { COMPANY } from "./data";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Strengths />
        <Certificates />
        <About />
        <Contact />
      </main>
      <Footer />

      {/* floating WhatsApp chat — removed for now */}
      {/* <a
        href={`https://wa.me/${COMPANY.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed right-4 bottom-4 z-50 grid place-items-center rounded-full bg-emerald-500 text-2xl text-white shadow-lg shadow-emerald-500/40 transition hover:scale-105 hover:bg-emerald-400"
        style={{ height: 52, width: 52 }}
      >
        💬
      </a> */}
    </>
  );
}
