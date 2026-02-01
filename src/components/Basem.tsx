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
          gap: "0",
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
            padding: "3rem",
            position: "relative",
            minHeight: "100vh"
          }}
        >
          {/* Text Box Container */}
          <div
            style={{
              backgroundColor: "transparent",
              border: "1px solid #1ECAD3",
              borderRadius: "1rem",
              padding: "3rem 2.5rem",
              width: "100%",
              maxWidth: "600px",
              position: "relative"
            }}
          >
            {/* Title */}
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 700,
                color: "#1ECAD3",
                marginBottom: "1.5rem",
                lineHeight: 1.3,
                minHeight: "3em"
              }}
            >
              {slides[currentSlide].title}
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: "clamp(16px, 2vw, 20px)",
                fontWeight: 400,
                color: "#FFFFFF",
                lineHeight: 1.6,
                marginBottom: "2.5rem",
                minHeight: "4.5em"
              }}
            >
              {slides[currentSlide].description}
            </p>

            {/* Navigation Arrows */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1.5rem"
              }}
            >
              {/* Left Arrow - Only show if not on first slide */}
              {currentSlide > 0 && (
                <button
                  onClick={handlePrev}
                  style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    borderRadius: "50%",
                    border: "2px solid #1ECAD3",
                    backgroundColor: "#002B49",
                    color: "#1ECAD3",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#1ECAD3";
                    e.currentTarget.style.color = "#002B49";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#002B49";
                    e.currentTarget.style.color = "#1ECAD3";
                  }}
                >
                  ←
                </button>
              )}

              {/* Progress Indicator */}
              <div
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "center",
                  flex: currentSlide === 0 ? "1 1 auto" : "0 0 auto",
                  justifyContent: currentSlide === 0 ? "flex-end" : "center"
                }}
              >
                {slides.map((_, index) => (
                  <div
                    key={index}
                    style={{
                      width: index === currentSlide ? "2rem" : "1.5rem",
                      height: "0.25rem",
                      backgroundColor: index === currentSlide ? "#FF4438" : "#1ECAD3",
                      borderRadius: "0.125rem",
                      transition: "all 0.3s ease"
                    }}
                  />
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  borderRadius: "50%",
                  border: "2px solid #1ECAD3",
                  backgroundColor: "#002B49",
                  color: "#1ECAD3",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#1ECAD3";
                  e.currentTarget.style.color = "#002B49";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#002B49";
                  e.currentTarget.style.color = "#1ECAD3";
                }}
              >
                →
              </button>
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
