import type { FC } from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Metrics from "./components/Metrics";
import AppScreens from "./components/AppScreens";
import FinalCTA from "./components/FinalCTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import SmoothScroll from "./helper/SmoothScroll";
import InitializeAOS from "./helper/InitializeAOS";

const App: FC = () => {
  // Initialize state based on current pathname to avoid initial render issue
  const getInitialPage = (): string => {
    const path = window.location.pathname;
    if (path === "/privacy-policy") {
      return "privacy-policy";
    } else if (path === "/terms-and-conditions") {
      return "terms-and-conditions";
    }
    return "home";
  };

  const [currentPage, setCurrentPage] = useState<string>(getInitialPage());

  useEffect(() => {
    // Check current pathname on mount and updates
    const path = window.location.pathname;
    if (path === "/privacy-policy") {
      setCurrentPage("privacy-policy");
    } else if (path === "/terms-and-conditions") {
      setCurrentPage("terms-and-conditions");
    } else {
      setCurrentPage("home");
    }

    // Listen for popstate events (back/forward buttons and programmatic navigation)
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === "/privacy-policy") {
        setCurrentPage("privacy-policy");
      } else if (path === "/terms-and-conditions") {
        setCurrentPage("terms-and-conditions");
      } else {
        setCurrentPage("home");
        // Handle hash navigation if present
        const hash = window.location.hash;
        if (hash) {
          setTimeout(() => {
            const element = document.getElementById(hash.substring(1));
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }, 100);
        }
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Handle navigation
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a[href^='/']");
      if (link) {
        const href = link.getAttribute("href");
        if (href === "/privacy-policy" || href === "/terms-and-conditions") {
          e.preventDefault();
          e.stopPropagation();
          const newPage = href === "/privacy-policy" ? "privacy-policy" : "terms-and-conditions";
          window.history.pushState({ page: newPage }, "", href);
          setCurrentPage(newPage);
          // Scroll to top
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleClick, true); // Use capture phase
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  // Scroll to top when page changes
  useEffect(() => {
    if (currentPage === "privacy-policy" || currentPage === "terms-and-conditions") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage]);

  if (currentPage === "privacy-policy") {
    return <PrivacyPolicy />;
  }

  if (currentPage === "terms-and-conditions") {
    return <TermsAndConditions />;
  }

  return (
    <div>
      <SmoothScroll />
      <InitializeAOS />
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <Metrics />
      <FinalCTA />
      <AppScreens />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
