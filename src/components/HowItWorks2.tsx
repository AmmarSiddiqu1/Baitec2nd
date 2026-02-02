import type { FC } from "react";
import { useState } from "react";

const HowItWorks2: FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

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

  return (
    <section id="how-it-works2" style={{ background: "#FFFFFF" }}>
      {/* Top Section - Header */}
      <div style={{ 
        background: "#FFFFFF",
        padding: "clamp(0.5rem, 1vw, 1rem) clamp(1rem, 3vw, 2rem) clamp(0.5rem, 1vw, 1rem)", // Reduced top and bottom padding significantly
        textAlign: "center"
      }}>
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 56px)",
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
            <div className="col-lg-6" style={{ paddingLeft: "clamp(0, 2vw, 2rem)" }}>
              {/* Content Box */}
              <div
                style={{
                  background: "transparent",
                  border: "1px solid #1ECAD3",
                  borderRadius: "20px",
                  padding: "clamp(2rem, 4vw, 3.5rem)",
                  marginBottom: "clamp(2rem, 4vw, 3rem)",
                  transition: "all 0.5s ease"
                }}
                key={`content-${activeStep}`}
              >
                <h3
                  style={{
                    fontSize: "clamp(28px, 4vw, 42px)",
                    fontWeight: 700,
                    color: "#84DADE",
                    marginBottom: "1.5rem",
                    lineHeight: 1.2,
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    animation: "fadeInUp 0.5s ease"
                  }}
                >
                  {steps[activeStep].title}
                </h3>
                <p
                  style={{
                    fontSize: "clamp(16px, 2vw, 20px)",
                    fontWeight: 400,
                    color: "#FFFFFF",
                    lineHeight: 1.6,
                    margin: 0,
                    opacity: 0.9,
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    animation: "fadeInUp 0.6s ease"
                  }}
                >
                  {steps[activeStep].description}
                </p>
              </div>

              {/* Timeline */}
              <div style={{ position: "relative", paddingTop: "1rem" }}>
                {/* Timeline Line - ADJUST: top (line 101) to center circles, left/right (lines 102-103) for length */}
                <div
                  style={{
                    position: "absolute",
                    top: "clamp(30px, 4vw, 45px)", // Centered on circles
                    left: "15%", // ADJUST: Decrease to make line shorter
                    right: "15%", // ADJUST: Decrease to make line shorter
                    height: "2px",
                    background: "#1ECAD3",
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
                      onClick={() => setActiveStep(index)}
                    >
                      {/* Circle Node */}
                      <div
                        className={index === activeStep ? "timeline-node-active" : ""}
                        style={{
                          width: "clamp(50px, 6vw, 70px)", // Increased size
                          height: "clamp(50px, 6vw, 70px)", // Increased size
                          borderRadius: "50%",
                          background: index === activeStep ? "#FF4438" : "#1ECAD3",
                          border: "3px solid #002B49",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "1rem",
                          transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                          position: "relative",
                          zIndex: 2,
                          transform: index === activeStep ? "scale(1.1)" : "scale(1)"
                        }}
                      />

                      {/* Label */}
                      <span
                        style={{
                          fontSize: "clamp(14px, 1.8vw, 18px)",
                          fontWeight: index === activeStep ? 700 : 400,
                          color: index === activeStep ? "#FF4438" : "#1ECAD3",
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
            <div className="col-lg-6" style={{ position: "relative", overflow: "visible" }}>
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
                  maxHeight: "44em", // Fixed max height in em
                  zIndex: 0,
                  pointerEvents: "none",
                  objectFit: "contain"
                }}
              />

              {/* Mobile Phone Container - ADJUST: padding (line 194), transform (line 195) for position */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "2rem 0",
                  transform: "translateX(22rem)", // ADJUST: Change value to move left/right
                  width: "auto",
                  minWidth: "50em" // Changed to em units
                }}
              >
                <img
                  src={stepImages[activeStep]}
                  alt={steps[activeStep].title}
                  style={{
                    width: "clamp(50em, 90vw, 90em)", // Much larger size using em units - make it huge
                    minWidth: "75em", // Changed to em units
                    height: "auto",
                    objectFit: "contain",
                    transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: "scale(1)",
                    animation: activeStep !== undefined ? "fadeInSlide 0.6s ease" : "none"
                  }}
                  key={activeStep}
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

        @keyframes timelinePulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
        }

        #how-it-works2 .timeline-node-active {
          animation: timelinePulse 0.5s ease;
        }

        @media (max-width: 992px) {
          #how-it-works2 > div:last-of-type > div > div > div:last-of-type {
            margin-top: 3rem;
          }
          #how-it-works2 > div:last-of-type > div > div > div:last-of-type img[alt="Timeline Bars"] {
            display: none;
          }
        }
        @media (max-width: 768px) {
          #how-it-works2 > div:last-of-type {
            padding: 2rem 1rem !important;
          }
          #how-it-works2 > div:last-of-type > div > div {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks2;
