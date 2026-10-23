import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import ProductBrief from "./components/ProductBrief";
import { BRIEFS } from "./productBriefs";
import Strengths from "./components/Strengths";
import Certificates from "./components/Certificates";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { COMPANY } from "./data";

// products with a full catalogue page — refresh-safe, browser back works
const BRIEF_ROUTES = {
  "#chilli": "chilli",
  "#coffee": "coffee",
  "#basmati": "basmati",
  "#non-basmati-rice": "non-basmati-rice",
  "#turmeric": "turmeric",
  "#corn": "corn",
};

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const brief = BRIEFS[BRIEF_ROUTES[hash.toLowerCase()]] || null;

  useEffect(() => {
    if (brief) {
      window.scrollTo(0, 0);
      return;
    }
    // leaving a brief page for an in-page anchor: the target section may
    // have just mounted, so scroll to it explicitly
    if (hash) document.querySelector(hash)?.scrollIntoView();
    // eslint-disable-next-line
  }, [hash]);

  if (brief) {
    return (
      <>
        <Navbar solid />
        <main>
          <ProductBrief brief={brief} />
        </main>
        <Footer />
      </>
    );
  }

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
