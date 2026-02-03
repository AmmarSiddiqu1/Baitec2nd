import type { FC } from "react";
import { useState } from "react";

const Basem: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      title: "Let Basem handle it",
      description: "Your Ai property assistant on Whatsapp. Available 24/7."
    },
    {
      title: "Rent tracking",
      description: "Basem keeps rent records up to date, shows payment status, and helps you stay on top of rent without manual follow-ups."
    },
    {
      title: "Maintenance management",
      description: "Tenants send issues directly to Basem. Requests are logged, reviewed, assigned, and tracked until the work is completed."
    },
    {
      title: "Tenant information",
      description: "Basem organizes tenant details including contact information, unit data, rent amount, balance, and lease dates."
    },
    {
      title: "Unit status updates",
      description: "Ask Basem about any unit to instantly know its status, rent situation, or active maintenance."
    },
    {
      title: "Instant updates and responses",
      description: "You can ask Basem questions or request updates anytime, and he responds instantly with clear information."
    }
  ];

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  return (
    <section 
      id="basem" 
      style={{ 
        minHeight: "100vh",
        position: "relative",
        backgroundColor: "#ffffff",
        padding: "0",
        display: "flex",
        alignItems: "stretch",
        overflow: "hidden"
      }}
    >
      {/* Color Box Background Layer - At section level for full height */}
      <div
        style={{
          position: "absolute",
          top: "clamp(10rem, 25vh, 21rem)",
          left: "clamp(15%, 20vw, 20%)",
          right: 0,
          bottom: 0,
          backgroundColor: "#002B49",
          zIndex: 0
        }}
      />

      <div 
        style={{
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          gap: "0rem",
          flex: "1 1 auto",
          position: "relative",
          zIndex: 1
        }}
      >
        {/* Left Column - Basem Image + Bars */}
        <div 
          className="basem-left-column"
          style={{
            flex: "1 1 50%",
            position: "relative",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            overflow: "hidden",
            minHeight: "100vh",
            paddingRight: "15rem"
          }}
        >
          {/* Desktop Bars Container - Hidden on mobile */}
          <div 
            className="desktop-bars"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              zIndex: 1,
              pointerEvents: "none",
              overflow: "hidden"
            }}
          >
            {/* Red Bar Left */}
            <img 
              src="/assets/images/basem/redbar_left.webp" 
              alt="Red Bar Left" 
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="150"
              data-aos-easing="ease-out"
              style={{
                position: "absolute",
                top: "30em",
                left: "30em",
                width: "20em",
                height: "auto",
                zIndex: 1,
                pointerEvents: "none"
              }}
            />

            {/* Blue Bar Left */}
            <img 
              src="/assets/images/basem/bluebar_left.webp" 
              alt="Blue Bar Left" 
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
              data-aos-easing="ease-out"
              style={{
                position: "absolute",
                top: "15em",
                left: "0",
                width: "15em",
                height: "auto",
                zIndex: 1,
                pointerEvents: "none",
                overflow: "hidden"
              }}
            />
          </div>

          {/* Mobile Bars Container - Only visible on mobile, centered behind Basem */}
          <div 
            className="mobile-bars"
            style={{
              display: "none",
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              height: "auto",
              zIndex: 1,
              pointerEvents: "none",
              alignItems: "flex-end",
              justifyContent: "center",
              gap: "1rem"
            }}
          >
            {/* Blue Bar Mobile - left */}
            <img 
              src="/assets/images/basem/basem_rb.svg" 
              alt="Blue Bar Mobile" 
              style={{
                height: "400px",
                width: "auto",
                pointerEvents: "none"
              }}
            />
            {/* Red Bar Mobile - right */}
            <img 
              src="/assets/images/basem/Basem_r.svg" 
              alt="Red Bar Mobile" 
              style={{
                height: "350px",
                width: "auto",
                pointerEvents: "none",
                marginBottom: "0.1rem"
              }}
            />
          </div>

          {/* Basem Image */}
          <img 
            src="/assets/images/basem/Basem.webp" 
            alt="Basem" 
            className="basem-image"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-delay="0"
            data-aos-easing="ease-out"
            style={{
              position: "relative",
              width: "auto",
              maxHeight: "1000px",
              objectFit: "contain",
              right: "2em",
              zIndex: 2
            }}
          />
        </div>

        {/* Right Column - Slider */}
        <div 
          style={{
            flex: "1 1 50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "0",
            position: "relative",
            minHeight: "100vh"
          }}
        >
          {/* Slider Container - Easy to move with top/left/right/bottom */}
          <div
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-delay="100"
            data-aos-easing="ease-out"
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "90em",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
              transform: "translateX(-10em) translateY(5em)",  // Move right 30px, up 20px
            }}
          >
            {/* Text Box Container - Fixed size */}
            <div
              style={{
                backgroundColor: "transparent",
                border: "3px solid #ffffff",
                borderRadius: "1.5rem",
                padding: "3rem 2.5rem 5.5rem 2.5rem",
                width: "100%",
                minHeight: "400px",
                display: "flex",
                flexDirection: "column",
                position: "relative"
              }}
            >
              {/* Title */}
              <h2
                style={{
                  fontSize: "clamp(36px, 4vw, 52px)",
                  fontWeight: 700,
                  color: "#84DADE",
                  marginBottom: "1.25rem",
                  lineHeight: 1.2,
                  minHeight: "clamp(60px, 8vw, 80px)",
                  transition: "opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning ? "translateY(10px)" : "translateY(0)"
                }}
              >
                {slides[currentSlide].title}
              </h2>

              {/* Description */}
              <p
                style={{
                  fontSize: "clamp(18px, 1.9vw, 26px)",
                  fontWeight: 400,
                  color: "#FFFFFF",
                  lineHeight: 1.7,
                  flex: "1 1 auto",
                  transition: "opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.05s, transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.05s",
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning ? "translateY(10px)" : "translateY(0)"
                }}
              >
                {slides[currentSlide].description}
              </p>

              {/* Arrows - Inside box at bottom corners */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1.75rem",
                  left: "2.5rem",
                  right: "2.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                {/* Left Arrow */}
                {currentSlide > 0 ? (
                  <div
                    style={{
                      width: "4.5rem",
                      height: "4.5rem",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #84DADE 0%, #002B49 100%)",
                      padding: "0.3rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      opacity: isTransitioning ? 0.5 : 1,
                      transform: isTransitioning ? "scale(0.95)" : "scale(1)"
                    }}
                  >
                    <button
                      onClick={handlePrev}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        border: "none",
                        backgroundColor: "#FFFFFF",
                        color: "#002B49",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "2.75rem",
                        fontWeight: 400,
                        lineHeight: 0,
                        padding: 0,
                        margin: 0,
                        boxShadow: "0 0 0 2px rgba(0, 43, 73, 0.3), 0 2px 8px rgba(0, 0, 0, 0.15)",
                        position: "relative",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                      }}
                      onMouseEnter={(e) => {
                        if (!isTransitioning) {
                          e.currentTarget.style.transform = "scale(1.05)";
                          e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0, 43, 73, 0.4), 0 4px 12px rgba(0, 0, 0, 0.2)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "0 0 0 2px rgba(0, 43, 73, 0.3), 0 2px 8px rgba(0, 0, 0, 0.15)";
                      }}
                    >
                      <span style={{ 
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, calc(-50% - 2px))",
                        lineHeight: 1,
                        margin: 0,
                        padding: 0,
                        display: "block"
                      }}>
                        ←
                      </span>
                    </button>
                  </div>
                ) : (
                  <div style={{ width: "4.5rem", transition: "opacity 0.3s ease", opacity: isTransitioning ? 0 : 1 }} />
                )}

                {/* Right Arrow */}
                <div
                  style={{
                    width: "4.5rem",
                    height: "4.5rem",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #84DADE 0%, #002B49 100%)",
                    padding: "0.3rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    opacity: isTransitioning ? 0.5 : 1,
                    transform: isTransitioning ? "scale(0.95)" : "scale(1)"
                  }}
                >
                  <button
                    onClick={handleNext}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      border: "none",
                      backgroundColor: "#FFFFFF",
                      color: "#002B49",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2.75rem",
                      fontWeight: 400,
                      lineHeight: 0,
                      padding: 0,
                      margin: 0,
                      boxShadow: "0 0 0 2px rgba(0, 43, 73, 0.3), 0 2px 8px rgba(0, 0, 0, 0.15)",
                      position: "relative",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    }}
                    onMouseEnter={(e) => {
                      if (!isTransitioning) {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0, 43, 73, 0.4), 0 4px 12px rgba(0, 0, 0, 0.2)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "0 0 0 2px rgba(0, 43, 73, 0.3), 0 2px 8px rgba(0, 0, 0, 0.15)";
                    }}
                  >
                    <span style={{ 
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, calc(-50% - 2px))",
                      lineHeight: 1,
                      margin: 0,
                      padding: 0,
                      display: "block"
                    }}>
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Progress Indicator - Outside below the box */}
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%"
              }}
            >
              {slides.map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: index === currentSlide ? "8rem" : "5rem",
                    height: "0.25rem",
                    backgroundColor: index === currentSlide ? "#FF4438" : "#1ECAD3",
                    borderRadius: "0.125rem",
                    transition: "all 0.3s ease"
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        /* Mobile: <768px - 1 column layout */
        @media (max-width: 768px) {
          /* Section - no fixed height */
          section#basem {
            min-height: auto !important;
            padding: 2rem 0 !important;
          }

          /* Navy background box - adjust to cover slider area */
          section#basem > div:first-of-type {
            top: clamp(8rem, 20vh, 12rem) !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
          }

          /* Main container - column layout */
          section#basem > div:last-of-type {
            flex-direction: column !important;
            gap: 0 !important;
            width: 100% !important;
          }

          /* Basem Image Column - First, full width */
          .basem-left-column {
            flex: none !important;
            width: 100% !important;
            min-height: auto !important;
            padding-right: 0 !important;
            padding-bottom: 0 !important;
            display: flex !important;
            align-items: flex-end !important;
            justify-content: center !important;
            order: 1 !important;
            position: relative !important;
          }

          /* Hide desktop bars on mobile */
          .desktop-bars {
            display: none !important;
          }

          /* Show mobile bars on mobile - centered behind Basem */
          .mobile-bars {
            display: flex !important;
            position: absolute !important;
            bottom: 0 !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            z-index: 1 !important;
            gap: 1rem !important;
            justify-content: center !important;
            align-items: flex-end !important;
          }

          /* Basem Image - scaled down, aligned at bottom */
          .basem-image {
            max-height: 400px !important;
            width: auto !important;
            right: 0 !important;
            position: relative !important;
            z-index: 2 !important;
          }

          /* Slider Column - Second, full width */
          section#basem > div:last-of-type > div:last-of-type {
            flex: none !important;
            width: 100% !important;
            min-height: auto !important;
            padding: 0.5rem 1rem 2rem 1rem !important;
            order: 2 !important;
            margin-top: -1.6rem !important;
          }

          /* Slider Container - remove transform offset */
          section#basem > div:last-of-type > div:last-of-type > div {
            transform: none !important;
            max-width: 100% !important;
            padding: 0 !important;
          }

          /* Text Box - scaled down */
          section#basem > div:last-of-type > div:last-of-type > div > div:first-of-type {
            min-height: 280px !important;
            padding: 2rem 1.5rem 4rem 1.5rem !important;
          }

          /* Title - smaller font */
          section#basem > div:last-of-type > div:last-of-type > div > div:first-of-type > h2 {
            font-size: 28px !important;
            min-height: auto !important;
            margin-bottom: 1rem !important;
          }

          /* Description - smaller font */
          section#basem > div:last-of-type > div:last-of-type > div > div:first-of-type > p {
            font-size: 16px !important;
          }

          /* Arrows container - move to bottom corners */
          section#basem > div:last-of-type > div:last-of-type > div > div:first-of-type > div:last-of-type {
            position: absolute !important;
            bottom: 1rem !important;
            left: 1.5rem !important;
            right: 1.5rem !important;
          }

          /* Arrows - smaller size */
          section#basem > div:last-of-type > div:last-of-type > div > div:first-of-type > div > div {
            width: 3rem !important;
            height: 3rem !important;
          }

          section#basem > div:last-of-type > div:last-of-type > div > div:first-of-type > div > div > button {
            font-size: 2rem !important;
          }

          /* Progress bars - smaller */
          section#basem > div:last-of-type > div:last-of-type > div > div:last-of-type > div {
            max-width: 4rem !important;
            min-width: 2.5rem !important;
            height: 0.2rem !important;
          }
        }

        /* Small Mobile: <480px */
        @media (max-width: 480px) {
          section#basem {
            padding: 1.5rem 0 !important;
          }

          /* Basem Image - even smaller */
          .basem-image {
            max-height: 300px !important;
          }

          /* Mobile bars - same size as Basem */
          .mobile-bars img[alt="Blue Bar Mobile"] {
            height: 300px !important;
          }

          .mobile-bars img[alt="Red Bar Mobile"] {
            height: 250px !important;
            margin-bottom: 0.1rem !important;
          }

          /* Slider padding */
          section#basem > div:last-of-type > div:last-of-type {
            padding: 1.5rem 0.75rem !important;
          }

          /* Text Box - smaller */
          section#basem > div:last-of-type > div:last-of-type > div > div:first-of-type {
            min-height: 240px !important;
            padding: 1.5rem 1rem 3.5rem 1rem !important;
          }

          /* Title - smaller */
          section#basem > div:last-of-type > div:last-of-type > div > div:first-of-type > h2 {
            font-size: 24px !important;
          }

          /* Description - smaller */
          section#basem > div:last-of-type > div:last-of-type > div > div:first-of-type > p {
            font-size: 14px !important;
          }

          /* Arrows - smaller */
          section#basem > div:last-of-type > div:last-of-type > div > div:first-of-type > div > div {
            width: 2.5rem !important;
            height: 2.5rem !important;
          }

          section#basem > div:last-of-type > div:last-of-type > div > div:first-of-type > div > div > button {
            font-size: 1.75rem !important;
          }

          /* Progress bars - smaller */
          section#basem > div:last-of-type > div:last-of-type > div > div:last-of-type > div {
            max-width: 3rem !important;
            min-width: 2rem !important;
            height: 0.15rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Basem;
