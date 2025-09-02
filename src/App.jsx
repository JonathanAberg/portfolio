import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import WorkShowcase from "./components/WorkShowcase";
import Skills from "./components/Skills";
import About from "./components/About";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import { useEffect, useRef } from "react";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  const currentIndexRef = useRef(-1);

  useEffect(() => {
    const order = ["home", "work-featured", "about", "skills", "contact"];
    let scrolling = false;
    let scrollTimeout;

    const sections = () =>
      order.map((id) => document.getElementById(id)).filter(Boolean);

    const updateIndexFromScroll = () => {
      if (scrolling) return;
      const s = sections();
      const scrollY = window.scrollY;
      let active = -1;
      s.forEach((el, idx) => {
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top - 10 <= scrollY) active = idx;
      });
      currentIndexRef.current = active;
    };

    const handleScroll = () => updateIndexFromScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    updateIndexFromScroll();

    const handleKeyDown = (e) => {
      if (e.key !== "Enter") return;
      const tag = document.activeElement?.tagName;
      if (["INPUT", "TEXTAREA", "SELECT"].includes(tag)) return;
      if (document.body.dataset.modalOpen === "true") return;

      const s = sections();
      if (!s.length) return;
      if (currentIndexRef.current === -1) updateIndexFromScroll();
      if (currentIndexRef.current >= s.length - 1) return;

      const next = s[currentIndexRef.current + 1];
      if (next) {
        window.dispatchEvent(new Event("simulateEnterPress"));
        scrolling = true;
        // Use global scroll-padding-top (or nav height fallback) for consistent alignment
        const rootStyle = getComputedStyle(document.documentElement);
        const scrollPaddingTop =
          parseInt(rootStyle.scrollPaddingTop || "0") || 0;
        const nav = document.querySelector("nav");
        const navH = nav ? Math.round(nav.getBoundingClientRect().height) : 0;
        const baseOffset = scrollPaddingTop || navH; // prefer CSS value
        const extra = parseInt(next.dataset.enterOffset || "0"); // usually 0 now
        const targetTop =
          next.getBoundingClientRect().top +
          window.scrollY -
          baseOffset +
          extra;
        window.scrollTo({
          top: targetTop < 0 ? 0 : targetTop,
          behavior: "smooth",
        });
        currentIndexRef.current += 1;
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          scrolling = false;
          updateIndexFromScroll();
        }, 650);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen" id="main">
        <ScrollProgress />
        <Navigation />
        <Hero />
        <WorkShowcase variant="featured" />
        <About />
        <Skills />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
