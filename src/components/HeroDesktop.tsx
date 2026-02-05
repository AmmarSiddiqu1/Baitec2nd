import type { FC } from "react";

const HeroDesktop: FC = () => {
  return (
    <section 
      id="home" 
      className="hero-desktop-section"
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
        className="hero-desktop-container"
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
          className="hero-desktop-text"
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
              lineHeight: 1.4,
              letterSpacing: "-0.04em"
            }}
          >
            <span style={{ whiteSpace: "nowrap" }}>SMARTER PROPERTY MANAGEMENT</span> <br /> ALL IN ONE PLACE
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
            className="hero-desktop-buttons"
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
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.opacity = "0.9";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.opacity = "1";
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
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.opacity = "0.9";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.opacity = "1";
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
          className="hero-desktop-images"
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
            className="hero-desktop-house"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-delay="200"
            data-aos-easing="ease-out"
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

          {/* Red Bar Left */}
          <img 
            src="/assets/images/hero/redbar_left.webp" 
            alt="Red Bar Left" 
            className="hero-desktop-bars-left"
            data-aos="fade-down"
            data-aos-duration="600"
            data-aos-delay="600"
            data-aos-easing="ease-out"
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

          {/* Blue Bar Left */}
          <img 
            src="/assets/images/hero/bluebar_left.webp" 
            alt="Blue Bar Left" 
            className="hero-desktop-bars-left"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="600"
            data-aos-easing="ease-out"
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

          {/* Mobile Screen Image */}
          <img 
            src="/assets/images/hero/hero_mobile_screen.webp" 
            alt="Hero Mobile Screen" 
            className="hero-desktop-mobile-screen"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="300"
            data-aos-easing="ease-out"
            style={{
              position: "absolute",
              top: "25em",
              right: "9%",
              bottom: "0",
              maxHeight: "70em",
              zIndex: 2
            }}
          />

          {/* Red Bar Right */}
          <img 
            src="/assets/images/hero/redbar_right.webp" 
            alt="Red Bar Right" 
            className="hero-desktop-bars-right"
            style={{
              position: "absolute",
              top: "50em",
              right: "5.1%",
              maxWidth: "6.25em",
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
            className="hero-desktop-bars-right"
            style={{
              position: "absolute",
              top: "45em",
              right: "0%",
              maxWidth: "6.25em",
              zIndex: 1,
              transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
              willChange: "transform",
              pointerEvents: "auto"
            }}
          />
        </div>
      </div>

      {/* Desktop Styles */}
      <style>{`
        /* Hover Effects for Bars */
        .hero-desktop-bars-left:hover {
          transform: translateY(-25vh) !important;
        }
        
        .hero-desktop-bars-right:hover {
          transform: translateY(-35vh) !important;
        }
      `}</style>
    </section>
  );
};

export default HeroDesktop;
