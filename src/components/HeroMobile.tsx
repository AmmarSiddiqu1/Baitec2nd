import type { FC } from "react";

const HeroMobile: FC = () => {
  return (
    <section 
      id="home" 
      className="hero-mobile-section"
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
        className="hero-mobile-container"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          zIndex: 1,
          padding: "clamp(2rem, 4vw, 3rem) clamp(1rem, 3vw, 2rem)"
        }}
      >
        {/* Text Section */}
        <div
          className="hero-mobile-text"
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
          {/* Headline - 3 lines */}
          <h1
            className="hero-mobile-headline"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-easing="ease-out-cubic"
            style={{
              fontSize: "clamp(32px, 5vw, 60px)",
              fontWeight: 700,
              color: "#002B49",
              marginBottom: "clamp(1rem, 2vw, 1.5rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em"
            }}
          >
            SMARTER PROPERTY <br /> MANAGEMENT <br /> ALL IN ONE PLACE
          </h1>

          {/* Subheadline */}
          <p
            className="hero-mobile-subheadline"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-easing="ease-out-cubic"
            style={{
              fontSize: "clamp(16px, 2vw, 28px)",
              fontWeight: 400,
              color: "#002B49",
              lineHeight: 1.6,
              opacity: 0.9,
              maxWidth: "55em",
              margin: "0 auto"
            }}
          >
            Manage units, tenants, rent, and maintenance through one connected, intelligent platform.
          </p>

          {/* Download Buttons */}
          <div
            className="hero-mobile-buttons"
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
          className="hero-mobile-images"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 2
          }}
        >
          {/* House Image */}
          <img 
            src="/assets/images/hero/Hero_house.webp" 
            alt="Hero House" 
            className="hero-mobile-house"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-delay="200"
            data-aos-easing="ease-out"
            style={{
              position: "absolute",
              top: "12.5em",
              left: "-15em",
              bottom: 0,
              maxHeight: "37.5em",
              zIndex: 2,
              pointerEvents: "none"
            }}
          />

          {/* Red Bar Left */}
          <img 
            src="/assets/images/hero/redbar_left.webp" 
            alt="Red Bar Left" 
            className="hero-mobile-bars-left"
            data-aos="fade-down"
            data-aos-duration="600"
            data-aos-delay="600"
            data-aos-easing="ease-out"
            style={{
              position: "absolute",
              top: "15em",
              left: "3.5em",
              maxWidth: "5.9375em",
              zIndex: 1,
              pointerEvents: "auto"
            }}
          />

          {/* Blue Bar Left */}
          <img 
            src="/assets/images/hero/bluebar_left.webp" 
            alt="Blue Bar Left" 
            className="hero-mobile-bars-left"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="600"
            data-aos-easing="ease-out"
            style={{
              position: "absolute",
              top: "9.375em",
              left: "0.5em",
              maxWidth: "5.9375em",
              zIndex: 1,
              pointerEvents: "auto"
            }}
          />

          {/* Mobile Screen Image */}
          <img 
            src="/assets/images/hero/hero_mobile_screen.webp" 
            alt="Hero Mobile Screen" 
            className="hero-mobile-screen"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="300"
            data-aos-easing="ease-out"
            style={{
              position: "absolute",
              top: "28em",
              right: "7%",
              bottom: 0,
              maxHeight: "40.625em",
              zIndex: 2
            }}
          />

          {/* Right bars - shown on tablet, hidden on mobile */}
          <img 
            src="/assets/images/hero/redbar_right.webp" 
            alt="Red Bar Right" 
            className="hero-mobile-bars-right"
            style={{
              position: "absolute",
              top: "36.25em",
              right: "4.5%",
              maxWidth: "5.3125em",
              zIndex: 1,
              transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
              willChange: "transform",
              pointerEvents: "auto"
            }}
          />
          <img 
            src="/assets/images/hero/bluebar_right.webp" 
            alt="Blue Bar Right" 
            className="hero-mobile-bars-right"
            style={{
              position: "absolute",
              top: "32.5em",
              right: "1%",
              maxWidth: "5.3125em",
              zIndex: 1,
              transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
              willChange: "transform",
              pointerEvents: "auto"
            }}
          />
        </div>
      </div>

      {/* Mobile/Tablet Responsive Styles */}
      <style>{`
        /* Tablet: 768px - 992px - Scaled horizontal layout */
        @media (max-width: 992px) and (min-width: 769px) {
          .hero-mobile-text {
            top: 2.5rem !important;
          }
          
          .hero-mobile-house {
            top: 12.5em !important;
            left: -15em !important;
            max-height: 37.5em !important;
          }
          
          .hero-mobile-bars-left[alt="Red Bar Left"] {
            top: 15em !important;
            left: 3.5em !important;
            max-width: 5.9375em !important;
          }
          
          .hero-mobile-bars-left[alt="Blue Bar Left"] {
            top: 9.375em !important;
            left: 0.5em !important;
            max-width: 5.9375em !important;
          }
          
          .hero-mobile-screen {
            top: 28em !important;
            right: 7% !important;
            max-height: 40.625em !important;
          }
          
          .hero-mobile-bars-right[alt="Red Bar Right"] {
            top: 36.25em !important;
            right: 4.5% !important;
            max-width: 5.3125em !important;
          }
          
          .hero-mobile-bars-right[alt="Blue Bar Right"] {
            top: 32.5em !important;
            right: 1% !important;
            max-width: 5.3125em !important;
          }
          
          /* Hover effects for tablet bars */
          .hero-mobile-bars-left:hover {
            transform: translateY(-25vh) !important;
          }
          
          .hero-mobile-bars-right:hover {
            transform: translateY(-35vh) !important;
          }
        }

        /* Mobile: <768px - Side-by-side bottom layout */
        @media (max-width: 768px) {
          .hero-mobile-section {
            height: 100vh !important;
            max-height: 100vh !important;
            min-height: 100vh !important;
            padding: 0 !important;
            box-sizing: border-box !important;
          }
          
          .hero-mobile-container {
            padding: 0 !important;
            margin: 0 !important;
            height: 100vh !important;
            max-height: 100vh !important;
            box-sizing: border-box !important;
          }

          .hero-mobile-text {
            position: absolute !important;
            top: 4rem !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            width: 100% !important;
            max-width: 100% !important;
            padding: 0 1rem !important;
            z-index: 3 !important;
          }

          .hero-mobile-images {
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

          .hero-mobile-house {
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

          .hero-mobile-bars-left {
            position: absolute !important;
            display: block !important;
            top: auto !important;
            bottom: 5.5vh !important;
            max-width: 3em !important;
            z-index: 0 !important;
            pointer-events: auto !important;
          }

          .hero-mobile-bars-left[alt="Red Bar Left"] {
            left: 4em !important;
          }

          .hero-mobile-bars-left[alt="Blue Bar Left"] {
            bottom: 8.5vh !important;
            left: 0.5em !important;
          }

          .hero-mobile-screen {
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

          .hero-mobile-headline {
            font-size: 28px !important;
            font-weight: 700 !important;
            line-height: 1.15 !important;
            letter-spacing: -0.02em !important;
          }

          .hero-mobile-buttons {
            margin-top: 4rem !important;
            gap: 0.75rem !important;
            flex-direction: row !important;
            justify-content: center !important;
          }

          .hero-mobile-buttons > a {
            height: 42px !important;
          }

          .hero-mobile-buttons > a img {
            height: 42px !important;
            width: auto !important;
          }

          /* Hide right bars on mobile */
          .hero-mobile-bars-right {
            display: none !important;
          }
        }

        /* Small mobile: <480px */
        @media (max-width: 480px) {
          .hero-mobile-text {
            top: 11rem !important;
            padding: 0 0.75rem !important;
          }
          
          .hero-mobile-headline {
            font-size: 24px !important;
            font-weight: 700 !important;
            line-height: 1.15 !important;
            letter-spacing: -0.02em !important;
          }
            
          .hero-mobile-subheadline {
            font-size: 14px !important;
            line-height: 1.5 !important;
          }
          
          .hero-mobile-house {
            height: 43vh !important;
            left: -25% !important;
            bottom: -7em !important;
            z-index: 2 !important;
          }

          .hero-mobile-screen {
            height: 50vh !important;
            right: -0.5% !important;
            bottom: -9.8em !important;
          }

          .hero-mobile-bars-left[alt="Red Bar Left"] {
            top: auto !important;
            bottom: 6.5vh !important;
            left: 7.5em !important;
            max-width: 3em !important;
            z-index: 0 !important;
          }
          
          .hero-mobile-bars-left[alt="Blue Bar Left"] {
            top: auto !important;
            bottom: 9.5vh !important;
            left: 4.3em !important;
            max-width: 3em !important;
            z-index: 0 !important;
          }

          .hero-mobile-buttons {
            margin-top: 3.5rem !important;
            gap: 0.75rem !important;
            flex-direction: row !important;
            align-items: center !important;
            justify-content: center !important;
          }

          .hero-mobile-buttons > a {
            height: 38px !important;
          }

          .hero-mobile-buttons > a img {
            height: 38px !important;
            width: auto !important;
          }
        }

        /* Mobile M: 375px - Adjust bar positioning */
        @media (max-width: 375px) {
          .hero-mobile-bars-left[alt="Red Bar Left"] {
            left: 5.5em !important;
            max-width: 2.8em !important;
          }
          
          .hero-mobile-bars-left[alt="Blue Bar Left"] {
            left: 3em !important;
            max-width: 2.8em !important;
          }
        }

        /* Mobile S: 320px - Further adjust for smallest screens */
        @media (max-width: 320px) {
          .hero-mobile-bars-left[alt="Red Bar Left"] {
            left: 4em !important;
            max-width: 2.3em !important;
            bottom: 5.5vh !important;
          }
          
          .hero-mobile-bars-left[alt="Blue Bar Left"] {
            left: 2em !important;
            max-width: 2.3em !important;
            bottom: 8.5vh !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroMobile;
