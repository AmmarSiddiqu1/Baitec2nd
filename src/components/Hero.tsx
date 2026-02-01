import type { FC } from "react";
import { useEffect, useRef } from "react";

const Hero: FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Set responsive z-index for hero section
    const updateHeroZIndex = () => {
      if (heroRef.current) {
        const isMobile = window.innerWidth < 992;
        heroRef.current.style.zIndex = isMobile ? '1' : '1001';
      }
    };
    
    updateHeroZIndex();
    window.addEventListener('resize', updateHeroZIndex);
    
    return () => {
      window.removeEventListener('resize', updateHeroZIndex);
    };
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!heroRef.current || !contentRef.current || !imageRef.current) {
            ticking = false;
            return;
          }

          const heroRect = heroRef.current.getBoundingClientRect();
          const heroTop = heroRect.top;
          const heroHeight = heroRect.height;
          const windowHeight = window.innerHeight;

          // Calculate progress based on scroll position relative to hero section
          const progress = Math.max(0, Math.min(1, (windowHeight - heroTop) / (windowHeight + heroHeight * 0.5)));

          // Smooth parallax effect for content - keep full opacity at top
          const translateY = progress * 30; // Reduced parallax distance for smoother effect
          const opacity = Math.max(0.98, 1 - progress * 0.05); // Minimal fade, keep quality high
          
          if (contentRef.current) {
            contentRef.current.style.transform = `translateY(${translateY}px)`;
            contentRef.current.style.opacity = opacity.toString();
          }

          // Smooth parallax effect for image - keep full opacity at top
          if (imageRef.current) {
            const imageTranslateY = progress * -20; // Reduced for smoother effect
            const imageScale = Math.max(0.95, 1 - progress * 0.05); // Subtle scale
            imageRef.current.style.transform = `translateY(${imageTranslateY}px) scale(${imageScale})`;
            imageRef.current.style.opacity = Math.max(0.98, 1 - progress * 0.05).toString(); // Minimal fade, keep quality high
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={heroRef} id="home" className="banner-five" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative" }}>
      <div className="tw-pt-100-px tw-mx-48-px position-relative gradient-bg-seven rounded-top-30-px z-1" style={{ width: "100%", isolation: "isolate", marginTop: "clamp(40px, 6vw, 60px)", paddingTop: "clamp(60px, 8vw, 100px)", paddingLeft: "clamp(1rem, 3vw, 3.5rem)", paddingRight: "clamp(1rem, 3vw, 3.5rem)" }}>
        <img src="/assets/images/hero/wave-line-shadow.png" alt="Wave Line shape" className="position-absolute tw-start-0 w-100 bottom-0 pb-120" style={{ zIndex: -1 }} />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-10">
              <div ref={contentRef} className="text-center" style={{ willChange: "transform, opacity" }}>
                <div className="max-w-780-px text-center mx-auto">
                  {/* Headline */}
                  <h1
                    className="splitTextStyleOne text-heading text-capitalize tw-leading-none"
                    style={{
                      fontSize: "clamp(36px, 6vw, 72px)",
                      fontWeight: 700,
                      color: "#002B49",
                      marginBottom: "1rem",
                      lineHeight: 1.1,
                    }}
                  >
                    AI-first property management for landlords & tenants
                  </h1>
                  
                  {/* Subheadline */}
                  <p className="text-neutral-600 tw-text-xl tw-mt-605 splitTextStyleOne max-w-5 mx-auto fw-medium tw-leading-145 max-w-548-px">
                    Automate rent reminders, maintenance, and WhatsApp updates—built in Bahrain, ready for the GCC.
                  </p>
                  
                  {/* App Store Buttons */}
                  <div className="d-flex align-items-center justify-content-center tw-gap-405 tw-mt-10 flex-wrap" style={{ gap: "1rem" }}>
                    {/* Apple App Store Button */}
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="800">
                      <a
                        href="https://www.apple.com/app-store"
                        className="hover--translate-y-1 active--translate-y-scale-9 tw-rounded-2xl common-shadow-twentyEight"
                        style={{
                          display: "inline-block",
                          textDecoration: "none",
                        }}
                      >
                        <div
                          style={{
                            background: "#FFFFFF",
                            padding: "14px 24px",
                            borderRadius: "12px",
                            display: "flex",
                            alignItems: "center",
                            gap: "14px",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          }}
                        >
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, width: "28px", height: "28px" }}>
                            <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" fill="#000000"/>
                          </svg>
                          <div style={{ textAlign: "left", lineHeight: 1.2, minWidth: "120px" }}>
                            <div style={{ fontSize: "clamp(9px, 1.2vw, 11px)", color: "#000000", fontWeight: 400 }}>Download on the</div>
                            <div style={{ fontSize: "clamp(14px, 2vw, 17px)", color: "#000000", fontWeight: 600 }}>App Store</div>
                          </div>
                        </div>
                      </a>
                    </div>
                    {/* Google Play Button */}
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="800">
                      <a
                        href="https://play.google.com/store/apps"
                        className="hover--translate-y-1 active--translate-y-scale-9 tw-rounded-2xl common-shadow-twentyEight"
                        style={{
                          display: "inline-block",
                          textDecoration: "none",
                        }}
                      >
                        <div
                          style={{
                            background: "#FFFFFF",
                            padding: "14px 24px",
                            borderRadius: "12px",
                            display: "flex",
                            alignItems: "center",
                            gap: "14px",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          }}
                        >
                          <svg width="28" height="28" viewBox="0 0 512 512" fill="none" style={{ flexShrink: 0, width: "28px", height: "28px" }}>
                            <path d="M48 59.49v393a4.33 4.33 0 007.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0048 59.49z" fill="#4285F4"/>
                            <path d="M345.8 174L89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32z" fill="#34A853"/>
                            <path d="M84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95z" fill="#FBBC04"/>
                            <path d="M457.67 256c0-16.2-8.85-31.18-23.16-39.15l-52.84-31.26-60.61 57.95 60.61 57.95 52.84-31.26c14.31-7.97 23.16-22.95 23.16-39.15z" fill="#EA4335"/>
                          </svg>
                          <div style={{ textAlign: "left", lineHeight: 1.2, minWidth: "120px" }}>
                            <div style={{ fontSize: "clamp(9px, 1.2vw, 11px)", color: "#000000", fontWeight: 400 }}>GET IT ON</div>
                            <div style={{ fontSize: "clamp(14px, 2vw, 17px)", color: "#000000", fontWeight: 600 }}>Google Play</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hero Image */}
                <div className="tw-mt-14 d-inline-flex">
                  <img
                    ref={imageRef}
                    src="/assets/images/hero/hero_banner.png"
                    alt="Hero Banner"
                    data-aos="zoom-in"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1200"
                    style={{ willChange: "transform, opacity" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
