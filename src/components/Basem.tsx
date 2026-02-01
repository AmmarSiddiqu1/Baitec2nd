import type { FC } from "react";
import { useState } from "react";

const Basem: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
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
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
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
          top: "21rem",
          left: "20%",
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
          {/* Left Bars Container */}
          <div 
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

          {/* Basem Image */}
          <img 
            src="/assets/images/basem/Basem.webp" 
            alt="Basem" 
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
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontWeight: 700,
                  color: "#84DADE",
                  marginBottom: "1.25rem",
                  lineHeight: 1.2
                }}
              >
                {slides[currentSlide].title}
              </h2>

              {/* Description */}
              <p
                style={{
                  fontSize: "clamp(15px, 1.9vw, 19px)",
                  fontWeight: 400,
                  color: "#FFFFFF",
                  lineHeight: 1.7,
                  flex: "1 1 auto"
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
                      justifyContent: "center"
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
                        transition: "all 0.3s ease"
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
                  <div style={{ width: "4.5rem" }} />
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
                    justifyContent: "center"
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
                      transition: "all 0.3s ease"
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
        @media (max-width: 992px) {
          section#basem > div:first-of-type {
            left: 30% !important;
          }
          section#basem > div:last-of-type {
            flex-direction: column !important;
            gap: 2rem !important;
          }
          section#basem > div:last-of-type > div:first-of-type {
            flex: 1 1 auto !important;
            min-height: 50vh !important;
          }
          section#basem > div:last-of-type > div:last-of-type {
            flex: 1 1 auto !important;
            min-height: 50vh !important;
            padding: 2rem !important;
          }
        }
        @media (max-width: 768px) {
          section#basem > div:first-of-type {
            left: 0 !important;
            top: 50% !important;
          }
          section#basem > div:last-of-type > div:last-of-type {
            padding: 1.5rem !important;
          }
          section#basem > div:last-of-type > div:last-of-type > div {
            padding: 2rem 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Basem;
