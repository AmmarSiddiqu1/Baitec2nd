import type { FC } from "react";
import { useEffect } from "react";

const Hero: FC = () => {
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
  return (
    <section 
      id="home" 
      style={{ 
        height: "100vh",
        maxHeight: "100vh",
        position: "relative",
        backgroundColor: "#84DADE",
        overflow: "hidden"
      }}
    >
      {/* Background Clouds */}
      <img 
        src="/assets/images/hero/bg_clouds.webp" 
        alt="Background Clouds" 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          pointerEvents: "none"
        }}
      />

      {/* Main Content Container */}
      <div 
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          zIndex: 1,
          padding: "clamp(2rem, 4vw, 3rem) clamp(1rem, 3vw, 2rem)"
        }}
      >
        {/* Text Section - Headline and Subheadline */}
        <div
          style={{
            textAlign: "center",
            position: "absolute",
            top: "clamp(3rem, 6vw, 5rem)",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: "65em",
            zIndex: 3
          }}
        >
          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 66px)",
              fontWeight: 700,
              color: "#002B49",
              marginBottom: "clamp(1rem, 2vw, 1.5rem)",
              lineHeight: 1.4,
              letterSpacing: "-0.04em"
            }}
          >
            SMARTER PROPERTY <br /> MANAGEMENT, ALL IN ONE PLACE
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 30px)",
              fontWeight: 400,
              color: "#002B49",
              lineHeight: 1.6,
              opacity: 0.9,
              maxWidth: "55em",
              margin: "0 auto"
            }}
          >
            Manage units, tenants, rent, and maintenance through <br /> one connected, intelligent platform.
          </p>
        </div>

        {/* Images Container - All absolutely positioned */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 2
          }}
        >
          {/* House Image - Left side, slightly cropped on left */}
          <img 
            src="/assets/images/hero/Hero_house.webp" 
            alt="Hero House" 
            style={{
              position: "absolute",
              top: "15.625em",
              left: "-18.5em",
              bottom: "0",
              maxHeight: "59.375em",
              zIndex: 2,
              pointerEvents: "none"
            }}
          />

          {/* Red Bar Left - Decorative logo element (thinner, leftmost) */}
          <img 
            src="/assets/images/hero/redbar_left.webp" 
            alt="Red Bar Left" 
            style={{
              position: "absolute",
              top: "20.3125em",
              left: "7.2em",
              maxWidth: "6.875em",
              zIndex: 1,
              transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
              willChange: "transform",
              pointerEvents: "auto"
            }}
          />

          {/* Blue Bar Left - Decorative logo element (thicker, closer to house) */}
          <img 
            src="/assets/images/hero/bluebar_left.webp" 
            alt="Blue Bar Left" 
            style={{
              position: "absolute",
              top: "14.375em",
              left: "0",
              maxWidth: "6.875em",
              zIndex: 1,
              transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
              willChange: "transform",
              pointerEvents: "auto"
            }}
          />

          {/* Mobile Screen Image - Right side, half visible */}
          <img 
            src="/assets/images/hero/hero_mobile_screen.webp" 
            alt="Hero Mobile Screen" 
            style={{
              position: "absolute",
              top: "25em",
              right: "9%",
              bottom: "0",
              maxHeight: "70em",
              zIndex: 2
            }}
          />

          {/* Red Bar Right - Decorative logo element (second, between blue and mobile) */}
          <img 
            src="/assets/images/hero/redbar_right.webp" 
            alt="Red Bar Right" 
            style={{
              position: "absolute",
              top: "50em",
              right: "5.1%",
              maxWidth: "6.25em",
              zIndex: 1,
              transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
              willChange: "transform"
            }}
          />

          {/* Blue Bar Right - Decorative logo element (first, leftmost) */}
          <img 
            src="/assets/images/hero/bluebar_right.webp" 
            alt="Blue Bar Right" 
            style={{
              position: "absolute",
              top: "45em",
              right: "0%",
              maxWidth: "6.25em",
              zIndex: 1,
              transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
              willChange: "transform"
            }}
          />
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        /* Hover Effects for Bars */
        /* Left Bars */
        section#home > div > div:last-of-type img[alt="Red Bar Left"]:hover,
        section#home > div > div:last-of-type img[alt="Blue Bar Left"]:hover {
          transform: translateY(-25vh) !important;
        }
        
        /* Right Bars - Increased movement */
        section#home > div > div:last-of-type img[alt="Red Bar Right"]:hover,
        section#home > div > div:last-of-type img[alt="Blue Bar Right"]:hover {
          transform: translateY(-35vh) !important;
        }

        /* Tablet: 768px - 992px - Scaled horizontal layout using em */
        @media (max-width: 992px) and (min-width: 769px) {
          section#home > div > div:first-of-type {
            top: 2.5rem !important;
          }
          section#home > div > div:last-of-type img[alt="Hero House"] {
            top: 12.5em !important;
            left: -15em !important;
            max-height: 37.5em !important;
          }
          section#home > div > div:last-of-type img[alt="Red Bar Left"] {
            top: 15em !important;
            left: 3.5em !important;
            max-width: 5.9375em !important;
          }
          section#home > div > div:last-of-type img[alt="Blue Bar Left"] {
            top: 9.375em !important;
            left: 0.5em !important;
            max-width: 5.9375em !important;
          }
          section#home > div > div:last-of-type img[alt="Hero Mobile Screen"] {
            top: 21.875em !important;
            right: 7% !important;
            max-height: 40.625em !important;
          }
          section#home > div > div:last-of-type img[alt="Red Bar Right"] {
            top: 36.25em !important;
            right: 4.5% !important;
            max-width: 5.3125em !important;
          }
          section#home > div > div:last-of-type img[alt="Blue Bar Right"] {
            top: 32.5em !important;
            right: 1% !important;
            max-width: 5.3125em !important;
          }
        }

        /* Mobile: <768px - Clean vertical flex layout */
        @media (max-width: 768px) {
          section#home {
            height: auto !important;
            min-height: 100vh !important;
            max-height: none !important;
          }
          
          /* Main container - vertical flex */
          section#home > div {
            padding: 1.5rem 1rem !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: flex-start !important;
            gap: 2rem !important;
            height: auto !important;
          }

          /* Text section - first in flex stack */
          section#home > div > div:first-of-type {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            transform: none !important;
            width: 100% !important;
            max-width: 100% !important;
            padding: 0 1rem !important;
            margin-bottom: 0 !important;
            order: 1 !important;
            flex-shrink: 0 !important;
          }

          /* Images container - vertical flex stack */
          section#home > div > div:last-of-type {
            position: relative !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: flex-start !important;
            gap: 2.5rem !important;
            width: 100% !important;
            height: auto !important;
            min-height: auto !important;
            order: 2 !important;
            flex: 1 1 auto !important;
          }

          /* House - centered in flex */
          section#home > div > div:last-of-type img[alt="Hero House"] {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            bottom: auto !important;
            right: auto !important;
            max-width: 85% !important;
            width: auto !important;
            height: auto !important;
            max-height: 21.875em !important;
            margin: 0 auto !important;
            order: 1 !important;
            flex-shrink: 0 !important;
          }

          /* Left bars - hide on mobile for clean layout */
          section#home > div > div:last-of-type img[alt="Red Bar Left"],
          section#home > div > div:last-of-type img[alt="Blue Bar Left"] {
            display: none !important;
          }

          /* Mobile - centered below house */
          section#home > div > div:last-of-type img[alt="Hero Mobile Screen"] {
            position: relative !important;
            top: auto !important;
            right: auto !important;
            bottom: auto !important;
            left: auto !important;
            max-width: 65% !important;
            width: auto !important;
            height: auto !important;
            max-height: 25em !important;
            margin: 0 auto !important;
            transform: none !important;
            order: 2 !important;
            flex-shrink: 0 !important;
          }

          /* Right bars - hide on mobile for clean layout */
          section#home > div > div:last-of-type img[alt="Red Bar Right"],
          section#home > div > div:last-of-type img[alt="Blue Bar Right"] {
            display: none !important;
          }
        }

        /* Small mobile: <480px - Further adjustments */
        @media (max-width: 480px) {
          section#home > div {
            padding: 1rem 0.75rem !important;
            gap: 1.5rem !important;
          }
          
          section#home > div > div:first-of-type {
            padding: 0 0.75rem !important;
          }
          
          section#home > div > div:last-of-type {
            gap: 2rem !important;
          }
          
          section#home > div > div:last-of-type img[alt="Hero House"] {
            max-width: 90% !important;
            max-height: 17.5em !important;
          }

          section#home > div > div:last-of-type img[alt="Hero Mobile Screen"] {
            max-width: 70% !important;
            max-height: 21.875em !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
