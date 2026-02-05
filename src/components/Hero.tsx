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
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-easing="ease-out-cubic"
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
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100"
                data-aos-easing="ease-out-cubic"
                style={{
                  fontSize: "clamp(32px, 5vw, 60px)",
                  fontWeight: 700,
                  color: "#002B49",
                  marginBottom: "clamp(1rem, 2vw, 1.5rem)",
                  lineHeight: "1.4",
                  letterSpacing: "-0.04em"
                }}
              >
                <span className="desktop-headline">
                  <span style={{ whiteSpace: "nowrap" }}>SMARTER PROPERTY MANAGEMENT</span> <br /> ALL IN ONE PLACE
                </span>
                <span className="mobile-headline">
                  SMARTER PROPERTY <br /> MANAGEMENT <br /> ALL IN ONE PLACE
                </span>
              </h1>

              {/* Subheadline */}
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-easing="ease-out-cubic"
                style={{
                  fontSize: "clamp(16px, 2vw, 28px)",
                  fontWeight: 400,
                  color: "#002B49",
                  lineHeight: "1.6",
                  opacity: 0.9,
                  maxWidth: "55em",
                  margin: "0 auto"
                }}
              >
                Manage units, tenants, rent, and maintenance through one connected, intelligent platform.
              </p>

              {/* Download Buttons */}
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
                data-aos-easing="ease-out-cubic"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "clamp(1rem, 2vw, 1.5rem)",
                  marginTop: "clamp(2rem, 3vw, 2.5rem)",
                  flexWrap: "wrap"
                }}
              >
                <a
                  href="https://play.google.com/store/apps"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    height: "clamp(45px, 6vw, 60px)"
                  }}
                >
                  <img
                    src="/assets/images/hero/GetItOnGooglePlay_Badge_Web_color_English.svg"
                    alt="Get it on Google Play"
                    style={{
                      height: "clamp(45px, 6vw, 60px)",
                      width: "auto"
                    }}
                  />
                </a>

                <a
                  href="https://apps.apple.com/app"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    height: "clamp(45px, 6vw, 60px)"
                  }}
                >
                  <img
                    src="/assets/images/hero/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                    alt="Download on the App Store"
                    style={{
                      height: "clamp(45px, 6vw, 60px)",
                      width: "auto"
                    }}
                  />
                </a>
              </div>
            </div>

        {/* Images Container */}
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
          {/* House Image - Left Bottom */}
          <img 
            src="/assets/images/hero/Hero_house.webp" 
            alt="Hero House" 
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-delay="200"
            data-aos-easing="ease-out"
            style={{
              position: "absolute",
              top: "15.625rem",
              left: "max(-18.5rem, -15vw)",
              bottom: 0,
              maxHeight: "59.375rem",
              zIndex: 2,
              pointerEvents: "none"
            }}
          />

          {/* Red Bar Left */}
          <img 
            src="/assets/images/hero/redbar_left.webp" 
            alt="Red Bar Left" 
            data-aos="fade-down"
            data-aos-duration="600"
            data-aos-delay="600"
            data-aos-easing="ease-out"
            style={{
              position: "absolute",
              top: "20.3125rem",
              left: "7.2rem",
              maxWidth: "6.875rem",
              zIndex: 1,
              transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
              willChange: "transform",
              pointerEvents: "auto"
            }}
          />

          {/* Blue Bar Left */}
          <img 
            src="/assets/images/hero/bluebar_left.webp" 
            alt="Blue Bar Left" 
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="600"
            data-aos-easing="ease-out"
            style={{
              position: "absolute",
              top: "14.375rem",
              left: "0",
              maxWidth: "6.875rem",
              zIndex: 1,
              transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
              willChange: "transform",
              pointerEvents: "auto"
            }}
          />

          {/* Mobile Screen Image - Right Bottom */}
          <img 
            src="/assets/images/hero/hero_mobile_screen.webp" 
            alt="Hero Mobile Screen" 
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="300"
            data-aos-easing="ease-out"
            style={{
              position: "absolute",
              top: "25rem",
              right: "9%",
              bottom: 0,
              maxHeight: "70rem",
              zIndex: 2
            }}
          />

          {/* Red Bar Right */}
          <img 
            src="/assets/images/hero/redbar_right.webp" 
            alt="Red Bar Right" 
            style={{
              position: "absolute",
              top: "50rem",
              right: "5.1%",
              maxWidth: "6.25rem",
              zIndex: 1,
              transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
              willChange: "transform",
              pointerEvents: "auto"
            }}
          />

          {/* Blue Bar Right */}
          <img 
            src="/assets/images/hero/bluebar_right.webp" 
            alt="Blue Bar Right" 
            style={{
              position: "absolute",
              top: "45rem",
              right: "0%",
              maxWidth: "6.25rem",
              zIndex: 1,
              transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
              willChange: "transform",
              pointerEvents: "auto"
            }}
          />
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        /* Desktop: Show desktop headline, hide mobile headline */
        section#home > div > div:first-of-type h1 .desktop-headline {
          display: block;
        }
        section#home > div > div:first-of-type h1 .mobile-headline {
          display: none;
        }

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
            top: 28em !important;
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

        /* Mobile: <768px - Side-by-side bottom layout */
        @media (max-width: 768px) {
          section#home {
            height: 100vh !important;
            max-height: 100vh !important;
            min-height: 100vh !important;
            padding: 0 !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            margin: 0 !important;
            box-sizing: border-box !important;
          }
          
          /* Main container - no padding */
          section#home > div {
            padding: 0 !important;
            margin: 0 !important;
            height: 100vh !important;
            max-height: 100vh !important;
            box-sizing: border-box !important;
          }

          /* Text section - stays at top */
          section#home > div > div:first-of-type {
            position: absolute !important;
            top: 4rem !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            width: 100% !important;
            max-width: 100% !important;
            padding: 0 1rem !important;
            z-index: 3 !important;
          }

          /* Images container - full viewport */
          section#home > div > div:last-of-type {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            z-index: 2 !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          /* House - bottom-left, same size as mobile */
          section#home > div > div:last-of-type img[alt="Hero House"] {
            position: absolute !important;
            bottom: -7em !important;
            left: -20% !important;
            top: auto !important;
            right: auto !important;
            height: 43vh !important;
            max-height: none !important;
            width: auto !important;
            z-index: 2 !important;
            pointer-events: none !important;
          }

          /* Left bars - show on mobile, behind house */
          section#home > div > div:last-of-type img[alt="Red Bar Left"] {
            position: absolute !important;
            display: block !important;
            top: auto !important;
            bottom: 4.5em !important;
            left: 4em !important;
            max-width: 3em !important;
            z-index: 0 !important;
            pointer-events: auto !important;
          }
          
          section#home > div > div:last-of-type img[alt="Blue Bar Left"] {
            position: absolute !important;
            display: block !important;
            top: auto !important;
            bottom: 6.5em !important;
            left: 0.5em !important;
            max-width: 3em !important;
            z-index: 0 !important;
            pointer-events: auto !important;
          }

          /* Disable hover effects on mobile */
          section#home > div > div:last-of-type img[alt="Red Bar Left"]:hover,
          section#home > div > div:last-of-type img[alt="Blue Bar Left"]:hover {
            transform: none !important;
          }

          /* Mobile - bottom-right, same size as house */
          section#home > div > div:last-of-type img[alt="Hero Mobile Screen"] {
            position: absolute !important;
            bottom: -5em !important;
            right: 0% !important;
            left: auto !important;
            top: auto !important;
            height: 45vh !important;
            max-height: none !important;
            width: auto !important;
            z-index: 2 !important;
            pointer-events: none !important;
          }

          /* Right bars - hide on mobile */
          section#home > div > div:last-of-type img[alt="Red Bar Right"],
          section#home > div > div:last-of-type img[alt="Blue Bar Right"] {
            display: none !important;
          }

          /* Heading - Mobile - 3 lines with reduced line spacing */
          section#home > div > div:first-of-type h1 {
            font-size: 28px !important;
            font-weight: 700 !important;
            line-height: 1.15 !important;
            letter-spacing: "-0.02em" !important;
          }

          /* Hide desktop headline on mobile */
          section#home > div > div:first-of-type h1 .desktop-headline {
            display: none !important;
          }

          /* Show mobile headline on mobile */
          section#home > div > div:first-of-type h1 .mobile-headline {
            display: block !important;
          }

          /* Download Buttons - Mobile - 2 columns side-by-side */
          section#home > div > div:first-of-type > div:last-of-type {
            margin-top: 4rem !important;
            gap: 0.75rem !important;
            flex-direction: row !important;
            justify-content: center !important;
          }

          section#home > div > div:first-of-type > div:last-of-type > a {
            height: 42px !important;
          }

          section#home > div > div:first-of-type > div:last-of-type > a img {
            height: 42px !important;
            width: auto !important;
          }
        }

        /* Small mobile: <480px */
        @media (max-width: 480px) {
          section#home > div > div:first-of-type {
            top: 11rem !important;
            padding: 0 0.75rem !important;
          }
          
          section#home > div > div:first-of-type h1 {
            font-size: 24px !important;
            font-weight: 700 !important;
            line-height: 1.15 !important;
            letter-spacing: "-0.02em" !important;
          }
            
          
          section#home > div > div:first-of-type p {
            font-size: 14px !important;
            line-height: 1.5 !important;
          }
          
          section#home > div > div:last-of-type img[alt="Hero House"] {
            height: 43vh !important;
            left: -25% !important;
            bottom: -7em !important;
            z-index: 2 !important;
          }

          section#home > div > div:last-of-type img[alt="Hero Mobile Screen"] {
            height: 50vh !important;
            right: -0.5% !important;
            bottom: -9.8em !important;
          }

          /* Left bars - small mobile positioning, behind house */
          section#home > div > div:last-of-type img[alt="Red Bar Left"] {
            top: auto !important;
            bottom: 5.5em !important;
            left: 7.5em !important;
            max-width: 3em !important;
            z-index: 0 !important;
          }
          
          section#home > div > div:last-of-type img[alt="Blue Bar Left"] {
            top: auto !important;
            bottom: 7.5em !important;
            left: 4.3em !important;
            max-width: 3em !important;
            z-index: 0 !important;
          }

          /* Download Buttons - Small Mobile - Keep 2 columns */
          section#home > div > div:first-of-type > div:last-of-type {
            margin-top: 3.5rem !important;
            gap: 0.75rem !important;
            flex-direction: row !important;
            align-items: center !important;
            justify-content: center !important;
          }

          section#home > div > div:first-of-type > div:last-of-type > a {
            height: 38px !important;
          }

          section#home > div > div:first-of-type > div:last-of-type > a img {
            height: 38px !important;
            width: auto !important;
          }
        }

        /* Mobile M: 375px - Adjust bar positioning */
        @media (max-width: 375px) {
          section#home > div > div:last-of-type img[alt="Red Bar Left"] {
            left: 5.5em !important;
            max-width: 2.8em !important;
          }
          
          section#home > div > div:last-of-type img[alt="Blue Bar Left"] {
            left: 3em !important;
            max-width: 2.8em !important;
          }
        }

        /* Mobile S: 320px - Further adjust for smallest screens */
        @media (max-width: 320px) {
          section#home > div > div:last-of-type img[alt="Red Bar Left"] {
            left: 4em !important;
            max-width: 2.3em !important;
            bottom: 4.5em !important;
          }
          
          section#home > div > div:last-of-type img[alt="Blue Bar Left"] {
            left: 2em !important;
            max-width: 2.3em !important;
            bottom: 6.5em !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
