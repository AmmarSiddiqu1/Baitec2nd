import type { FC } from "react";
import { useEffect, useState } from "react";
import HeroDesktop from "./HeroDesktop";
import HeroMobile from "./HeroMobile";

const Hero: FC = () => {
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 993;
    }
    return true; // Default to desktop for SSR
  });

  useEffect(() => {
    // Add class to body when Hero is mounted
    document.body.classList.add('hero-section-active');
    
    // Remove class when Hero is unmounted
    return () => {
      document.body.classList.remove('hero-section-active');
    };
  }, []);

  useEffect(() => {
    // Hide WhatsApp button when Hero section is in viewport
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      const whatsappButton = document.querySelector('.floating-whatsapp-btn') as HTMLElement;
      
      if (heroSection && whatsappButton) {
        const rect = heroSection.getBoundingClientRect();
        const isHeroVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isHeroVisible) {
          whatsappButton.style.display = 'none';
        } else {
          whatsappButton.style.display = 'flex';
        }
      }
    };

    // Check on mount and scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Handle viewport resize to switch between desktop and mobile
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 993);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isDesktop ? <HeroDesktop /> : <HeroMobile />;
};

export default Hero;
