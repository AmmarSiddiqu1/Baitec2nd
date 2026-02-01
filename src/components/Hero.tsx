import type { FC } from "react";

const Hero: FC = () => {
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
            maxWidth: "900px",
            zIndex: 3
          }}
        >
          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 55px)",
              fontWeight: 700,
              color: "#002B49",
              marginBottom: "clamp(1rem, 2vw, 1.5rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em"
            }}
          >
            SMARTER PROPERTY MANAGEMENT, ALL IN ONE PLACE
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              fontWeight: 400,
              color: "#002B49",
              lineHeight: 1.6,
              opacity: 0.9,
              maxWidth: "700px",
              margin: "0 auto"
            }}
          >
            Manage units, tenants, rent, and maintenance through one connected, intelligent platform.
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
              top: "25%",
              left: "-19.5em",
              bottom: "0",
              maxHeight: "95vh",
              zIndex: 2
            }}
          />

          {/* Red Bar Left - Decorative logo element (thinner, leftmost) */}
          <img 
            src="/assets/images/hero/redbar_left.webp" 
            alt="Red Bar Left" 
            style={{
              position: "absolute",
              top: "30vh",
              left: "5.8vw",
              maxWidth: "110px",
              zIndex: 1,
              pointerEvents: "none"
            }}
          />

          {/* Blue Bar Left - Decorative logo element (thicker, closer to house) */}
          <img 
            src="/assets/images/hero/bluebar_left.webp" 
            alt="Blue Bar Left" 
            style={{
              position: "absolute",
              top: "18.8vh",
              left: "0vw",
              maxWidth: "110px",
              zIndex: 1,
              pointerEvents: "none"
            }}
          />

          {/* Mobile Screen Image - Right side, half visible */}
          <img 
            src="/assets/images/hero/hero_mobile_screen.webp" 
            alt="Hero Mobile Screen" 
            style={{
              position: "absolute",
              top: "42%",
              right: "9%",
              bottom: "0",
              maxHeight: "110vh",
              zIndex: 2
            }}
          />

          {/* Red Bar Right - Decorative logo element (second, between blue and mobile) */}
          <img 
            src="/assets/images/hero/redbar_right.webp" 
            alt="Red Bar Right" 
            style={{
              position: "absolute",
              top: "74vh",
              right: "5.5%",
              maxWidth: "100px",
              zIndex: 1,
              pointerEvents: "none"
            }}
          />

          {/* Blue Bar Right - Decorative logo element (first, leftmost) */}
          <img 
            src="/assets/images/hero/bluebar_right.webp" 
            alt="Blue Bar Right" 
            style={{
              position: "absolute",
              top: "65vh",
              right: "0%",
              maxWidth: "100px",
              zIndex: 1,
              pointerEvents: "none"
            }}
          />
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 992px) {
          section#home > div > div:first-of-type {
            top: clamp(2rem, 4vw, 3rem) !important;
          }
          section#home > div > div:last-of-type img[alt="Hero House"] {
            left: -40px !important;
            max-height: 50vh !important;
          }
          section#home > div > div:last-of-type img[alt="Hero Mobile Screen"] {
            right: -25% !important;
            max-height: 60vh !important;
          }
        }
        @media (max-width: 768px) {
          section#home {
            height: 100vh !important;
            max-height: 100vh !important;
          }
          section#home > div {
            padding: 1rem !important;
          }
          section#home > div > div:first-of-type {
            top: 1.5rem !important;
          }
          section#home > div > div:last-of-type img[alt="Hero House"] {
            left: -20px !important;
            max-height: 45vh !important;
          }
          section#home > div > div:last-of-type img[alt="Hero Mobile Screen"] {
            right: -20% !important;
            max-height: 55vh !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
