import type { FC } from "react";
import { useState, useEffect, useRef } from "react";
import AOS from "aos";

const HowItWorks2: FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const contentBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Refresh AOS after component mounts to ensure animations work
    AOS.refresh();
  }, []);

  useEffect(() => {
    // Only apply transition opacity when transitioning between steps
    if (contentBoxRef.current) {
      if (isTransitioning) {
        contentBoxRef.current.style.transition = "opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        contentBoxRef.current.style.opacity = "0";
      } else {
        // Let AOS handle the opacity, only override during transitions
        contentBoxRef.current.style.transition = "none";
        contentBoxRef.current.style.opacity = "";
      }
    }
  }, [isTransitioning]);

  const handleStepChange = (step: number) => {
    if (step === activeStep || isTransitioning) return;
    
    // Prevent rapid clicking
    setIsTransitioning(true);
    
    // Fade out current content
    setTimeout(() => {
      // Change content while faded out
      setActiveStep(step);
      // Fade in new content
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  const steps = [
    {
      title: "Sign up",
      description: "Create your account in minutes and securely access your property management dashboard."
    },
    {
      title: "Set up",
      description: "Onboard your units and tenants by adding details or uploading your existing data."
    },
    {
      title: "Start managing",
      description: "Oversee your properties with clarity, control, and minimal manual work."
    }
  ];

  const stepImages = [
    "/assets/images/how_it_works2/step1.svg",
    "/assets/images/how_it_works2/step2.svg",
    "/assets/images/how_it_works2/step3.svg"
  ];

  const buttonColors = ["#0a8a22", "#84DADE", "#FF4438"]; // Green, Blue, Red

  return (
    <section id="how-it-works2" style={{ background: "#FFFFFF", overflowX: "hidden" }}>
      {/* Top Section - Header */}
      <div style={{ 
        background: "#FFFFFF",
        padding: "clamp(0.5rem, 1vw, 1rem) clamp(1rem, 3vw, 2rem) clamp(6rem, 8vw, 9rem)", // Increased bottom padding even more for larger gap
        textAlign: "center"
      }}>
        <h2
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-out-cubic"
          style={{
            fontSize: "clamp(40px, 6vw, 68px)",
            fontWeight: 700,
            color: "#002B49",
            lineHeight: 1.2,
            margin: 0
          }}
        >
          From setup to full control
        </h2>
      </div>

      {/* Bottom Section - Main Content */}
      <div style={{ 
        background: "#002B49",
        padding: "clamp(3rem, 5vw, 4.5rem) clamp(1rem, 3vw, 2rem) clamp(2rem, 4vw, 3.5rem)",
        minHeight: "55vh",
        maxHeight: "70vh"
      }}>
        <div className="container">
          <div className="row align-items-center g-4" style={{ marginTop: "-15rem" }}> 
            {/* Left Column - Step Content & Timeline */}
            <div className="col-lg-6 hiw2-content-column" style={{ paddingLeft: "clamp(0, 2vw, 2rem)" }}>
              {/* Content Box */}
              <div
                ref={contentBoxRef}
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
                data-aos-easing="ease-out"
                style={{
                  background: "transparent",
                  border: "1px solid #FFFFFF",
                  borderRadius: "20px",
                  padding: "clamp(2rem, 4vw, 3.5rem)",
                  marginBottom: "clamp(2rem, 4vw, 3rem)"
                }}
              >
                <h3
                  style={{
                    fontSize: "clamp(32px, 5vw, 48px)",
                    fontWeight: 700,
                    color: "#84DADE",
                    marginBottom: "1.5rem",
                    lineHeight: 1.2,
                    minHeight: "clamp(60px, 8vw, 90px)",
                    display: "flex",
                    alignItems: "center",
                    transition: "opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                  }}
                >
                  {steps[activeStep].title}
                </h3>
                <p
                  style={{
                    fontSize: "clamp(18px, 2.5vw, 24px)",
                    fontWeight: 400,
                    color: "#FFFFFF",
                    lineHeight: 1.6,
                    margin: 0,
                    opacity: 0.9,
                    minHeight: "clamp(64px, 8vw, 96px)",
                    transition: "opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.05s"
                  }}
                >
                  {steps[activeStep].description}
                </p>
              </div>

              {/* Timeline */}
              <div 
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
                data-aos-easing="ease-out-cubic"
                style={{ position: "relative", paddingTop: "1rem" }}
              >
                {/* Timeline Line - ADJUST: top (line 101) to center circles, left/right (lines 102-103) for length */}
                <div
                  style={{
                    position: "absolute",
                    top: "clamp(30px, 4vw, 45px)", // Centered on circles
                    left: "15%", // ADJUST: Decrease to make line shorter
                    right: "15%", // ADJUST: Decrease to make line shorter
                    height: "2px",
                    background: "#FFFFFF",
                    zIndex: 0
                  }}
                />

                {/* Timeline Nodes */}
                <div style={{ 
                  display: "flex", 
                  justifyContent: "space-between",
                  position: "relative",
                  zIndex: 1
                }}>
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        cursor: "pointer",
                        flex: 1,
                        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                      }}
                      onClick={() => handleStepChange(index)}
                    >
                      {/* Basem-style Button Node */}
                      <div
                        style={{
                          width: "clamp(4rem, 5vw, 4.5rem)",
                          height: "clamp(4rem, 5vw, 4.5rem)",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #84DADE 0%, #002B49 100%)",
                          padding: "0.3rem",
                          border: "1px solid #FFFFFF",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "1rem",
                          transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                          position: "relative",
                          zIndex: 2,
                          transform: index === activeStep ? "scale(1.1)" : "scale(1)",
                          animation: index !== activeStep 
                            ? (index === 0 
                                ? "2s ease infinite pulse-green-hw2"
                                : index === 1
                                ? "2s ease infinite pulse-blue-hw2"
                                : "2s ease infinite pulse-red-hw2")
                            : "none"
                        }}
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                            backgroundColor: buttonColors[index],
                            boxShadow: "0 0 0 2px rgba(0, 43, 73, 0.3), 0 2px 8px rgba(0, 0, 0, 0.15)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.3s ease"
                          }}
                        />
                      </div>

                      {/* Label */}
                      <span
                        style={{
                          fontSize: "clamp(16px, 2vw, 20px)",
                          fontWeight: index === activeStep ? 700 : 400,
                          color: index === activeStep ? "#84DADE" : "#FFFFFF",
                          textAlign: "center",
                          transition: "all 0.4s ease"
                        }}
                      >
                        {step.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Mobile Phone & Timeline Bars */}
            <div className="col-lg-6 hiw2-mobile-column" style={{ position: "relative", overflow: "visible" }}>
              {/* Timeline Bars Background - ADJUST: top (line 172), right (line 173), width/height (lines 174-176) for position and size */}
              <img
                src="/assets/images/how_it_works2/timeline_bars.svg"
                alt="Timeline Bars"
                style={{
                  position: "absolute",
                  top: "4rem", // ADJUST: Move up/down
                  right: "-2.4rem", // ADJUST: Move left/right
                  width: "auto", // ADJUST: Change to specific width like "500px" to increase size
                  height: "50em", // Fixed size in em - keeps bars constant regardless of mobile image
                  maxHeight: "51em", // Fixed max height in em
                  zIndex: 0,
                  pointerEvents: "none",
                  objectFit: "contain"
                }}
              />

                  {/* Mobile Phone Container - ADJUST: padding (line 194), transform (line 195) for position */}
                  <div
                    data-aos="fade-left"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                    data-aos-easing="ease-out-cubic"
                    style={{
                      position: "relative",
                      zIndex: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "2rem 0",
                      transform: "translateX(10rem) (translateY-5rem)", // ADJUST: Change value to move left/right
                      width: "auto",
                      minWidth: "30em", // Changed to em units
                      animation: "floatMobile 8s ease-in-out infinite"
                    }}
                  >
                <img
                  src={stepImages[activeStep]}
                  alt={steps[activeStep].title}
                  style={{
                    width: "clamp(35em, 70vw, 65em)", // Much larger size using em units - make it huge
                    minWidth: "5em", // Changed to em units
                    height: "auto",
                    objectFit: "contain",
                    willChange: "transform, opacity",
                    opacity: isTransitioning ? 0 : 1,
                    transform: isTransitioning ? "translate3d(0, 12px, 0) scale(0.96)" : "translate3d(0, 0, 0) scale(1)",
                    transition: "opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateX(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-green-hw2 {
          0% {
            box-shadow: 0 0 0 0 rgba(10, 138, 34, 0.8);
          }
          100% {
            box-shadow: 0 0 0 30px rgba(10, 138, 34, 0);
          }
        }

        @keyframes pulse-blue-hw2 {
          0% {
            box-shadow: 0 0 0 0 rgba(132, 218, 222, 0.8);
          }
          100% {
            box-shadow: 0 0 0 30px rgba(132, 218, 222, 0);
          }
        }

        @keyframes pulse-red-hw2 {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 68, 56, 0.8);
          }
          100% {
            box-shadow: 0 0 0 30px rgba(255, 68, 56, 0);
          }
        }

        @keyframes fadeInUpSmooth {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInSlideSmooth {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes floatMobile {
          0% {
            transform: translateX(8rem) translateY(-2rem) translate(0, 0);
          }
          25% {
            transform: translateX(8rem) translateY(-2rem) translate(3px, -5px);
          }
          50% {
            transform: translateX(8rem) translateY(-2rem) translate(-2px, 3px);
          }
          75% {
            transform: translateX(8rem) translateY(-2rem) translate(4px, 2px);
          }
          100% {
            transform: translateX(8rem) translateY(-2rem) translate(0, 0);
          }
        }

        @media (max-width: 992px) {
          #how-it-works2 > div:last-of-type > div > div > div:last-of-type {
            margin-top: 3rem;
          }
          #how-it-works2 > div:last-of-type > div > div > div:last-of-type img[alt="Timeline Bars"] {
            display: none;
          }
        }

        /* Mobile: <768px - 1 column layout */
        @media (max-width: 768px) {
          /* Section padding - reduced navy background, allow overflow */
          #how-it-works2 > div:last-of-type {
            padding: 0.75rem 0.5rem !important;
            min-height: auto !important;
            max-height: none !important;
            overflow: visible !important;
          }

          /* Row - column layout */
          #how-it-works2 > div:last-of-type > div > div {
            flex-direction: column !important;
            margin-top: 0 !important;
          }

          /* Mobile Column - First (order 1), pull up to overflow */
          .hiw2-mobile-column {
            order: 1 !important;
            width: 100% !important;
            padding: 0 !important;
            margin-bottom: -2rem !important; /* Reduced gap */
            margin-top: -8rem !important;
            overflow: visible !important;
            z-index: 10 !important;
          }

          /* Mobile Phone Container - remove transform, center, allow overflow for shadow */
          .hiw2-mobile-column > div {
            transform: none !important;
            animation: none !important;
            padding: 1rem 0 !important;
            width: 100% !important;
            min-width: auto !important;
            justify-content: center !important;
            overflow: visible !important;
          }

          /* Mobile Phone Image - LARGER, allow overflow for shadow */
          .hiw2-mobile-column > div > img {
            width: 100% !important;
            max-width: 400px !important;
            min-width: auto !important;
            object-fit: contain !important;
            margin-left: 30% !important; /* Move right to compensate for image whitespace */
          }

          /* Timeline Bars - MUCH smaller */
          .hiw2-mobile-column > img[alt="Timeline Bars"] {
            display: block !important;
            position: absolute !important;
            top: 3rem !important;
            right: 50% !important;
            transform: translateX(50%) !important;
            height: 12em !important;
            max-height: 12em !important;
            width: auto !important;
            z-index: 0 !important;
          }

          /* Content Column - Second (order 2) */
          .hiw2-content-column {
            order: 2 !important;
            width: 100% !important;
            padding-left: 0 !important;
          }

          /* Content Box - scaled down, narrower width */
          .hiw2-content-column > div:first-of-type {
            padding: 2rem 1.5rem !important;
            margin-bottom: 1.5rem !important;
            width: 85% !important;
            max-width: 400px !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }

          /* Title - smaller */
          .hiw2-content-column > div:first-of-type > h3 {
            font-size: 28px !important;
            min-height: auto !important;
            margin-bottom: 1rem !important;
          }

          /* Description - smaller */
          .hiw2-content-column > div:first-of-type > p {
            font-size: 16px !important;
            min-height: auto !important;
          }

          /* Timeline - scaled down, narrower width */
          .hiw2-content-column > div:last-of-type {
            padding-top: 0.5rem !important;
            width: 75% !important;
            max-width: 300px !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }

          /* Timeline Line - centered on circles, shorter length */
          .hiw2-content-column > div:last-of-type > div:first-of-type {
            top: 1.5rem !important; /* Center of 3rem circle */
            left: 20% !important;
            right: 20% !important;
          }

          /* Timeline Buttons - smaller */
          .hiw2-content-column > div:last-of-type > div:last-of-type > div > div:first-of-type {
            width: 3rem !important;
            height: 3rem !important;
            margin-bottom: 0.75rem !important;
          }

          /* Timeline Labels - smaller */
          .hiw2-content-column > div:last-of-type > div:last-of-type > div > span {
            font-size: 14px !important;
          }
        }

        /* Small Mobile: <480px */
        @media (max-width: 480px) {
          #how-it-works2 > div:last-of-type {
            padding: 0.5rem 0rem !important;
          }

          /* Mobile Column - pull up less on small screens */
          .hiw2-mobile-column {
            margin-top: -6rem !important;
            margin-bottom: -2rem !important; /* Reduced gap */
          }

          /* Mobile Phone Image - still large */
          .hiw2-mobile-column > div > img {
            width: 100% !important;
            max-width: 400px !important;
          }

          /* Timeline Bars - smaller */
          .hiw2-mobile-column > img[alt="Timeline Bars"] {
            height: 10em !important;
            max-height: 10em !important;
            top: 2rem !important;
          }

          /* Content Box - smaller, narrower width */
          .hiw2-content-column > div:first-of-type {
            padding: 1.5rem 1rem !important;
            margin-bottom: 1rem !important;
            width: 85% !important;
            max-width: 350px !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }

          /* Title - smaller */
          .hiw2-content-column > div:first-of-type > h3 {
            font-size: 24px !important;
          }

          /* Description - smaller */
          .hiw2-content-column > div:first-of-type > p {
            font-size: 14px !important;
          }

          /* Timeline - narrower width for small mobile */
          .hiw2-content-column > div:last-of-type {
            width: 70% !important;
            max-width: 280px !important;
          }

          /* Timeline Line - centered on smaller circles */
          .hiw2-content-column > div:last-of-type > div:first-of-type {
            top: 1.25rem !important; /* Center of 2.5rem circle */
            left: 20% !important;
            right: 20% !important;
          }

          /* Timeline Buttons - smaller */
          .hiw2-content-column > div:last-of-type > div:last-of-type > div > div:first-of-type {
            width: 2.5rem !important;
            height: 2.5rem !important;
          }

          /* Timeline Labels - smaller */
          .hiw2-content-column > div:last-of-type > div:last-of-type > div > span {
            font-size: 12px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks2;
