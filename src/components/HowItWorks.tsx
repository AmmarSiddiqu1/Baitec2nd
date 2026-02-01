import type { FC } from "react";
import { useState, useEffect } from "react";

const HowItWorks: FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0); // 0 = Sign Up, 1 = Set Preferences, 2 = Start Managing
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Content configuration with state-specific text and images
  const content = [
    {
      heading: "Sign up and secure your account",
      description: "In today's competitive business, the demand for efficient and cost-effective property management solutions has never been more critical.",
      image: "/assets/images/work_process/work-process-five-thumb.png",
    },
    {
      heading: "Set your preferences",
      description: "Customize your property management experience by setting your preferences. Tailor the platform to match your unique business needs and workflow requirements.",
      image: "/assets/images/work_process/preferences.png",
    },
    {
      heading: "Start managing",
      description: "Begin managing your properties with ease. Access powerful tools and features designed to streamline your operations and maximize efficiency.",
      image: "/assets/images/work_process/modification.png",
    },
  ];

  // Preload all images on component mount
  useEffect(() => {
    const imagePromises = content.map((item) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve(); // Resolve even on error to not block
        img.src = item.image;
      });
    });

    Promise.all(imagePromises);
  }, []);

  const handleCircleClick = (step: number) => {
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

  return (
    <section id="how-it-works" className="work-process-five py-120">
      <div className="container">
        <div className="text-center mx-auto tw-pb-15">
          {/* Badge */}
          <div
            className="tw-py-2 tw-px-7 rounded-pill fw-bold text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max common-shadow-twentyNine"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="600"
            style={{
              backgroundColor: "#FF4438",
              color: "#FFFFFF",
            }}
          >
            How It Works
          </div>
          {/* Headline */}
          <h2
            className="splitTextStyleOne text-heading text-capitalize tw-leading-none"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              color: "#002B49",
              lineHeight: 1.2,
            }}
          >
            Simplifying your property management journey
          </h2>
        </div>

        <div className="position-relative tw-mt-17 stair-bg tw-rounded-28-px" style={{ marginTop: "clamp(2rem, 4vw, 4rem)" }}>
          <div className="tw-px-40-px d-flex tw-pt-14 gradient-bg-seven tw-rounded-28-px position-relative flex-md-nowrap flex-wrap tw-gap-6" style={{ paddingTop: "clamp(2rem, 4vw, 3.5rem)", paddingLeft: "clamp(1rem, 2.5vw, 2.5rem)", paddingRight: "clamp(1rem, 2.5vw, 2.5rem)", paddingBottom: 0 }}>
            <div className="max-w-780-px mx-auto">
              <div className="text-center" style={{ minHeight: "clamp(120px, 15vw, 180px)", position: "relative" }}>
                {/* Title */}
                <h2
                  className="splitTextStyleOne text-heading text-capitalize tw-leading-none max-w-500-px mx-auto how-it-works-text"
                  style={{
                    fontSize: "clamp(24px, 3vw, 36px)",
                    fontWeight: 700,
                    color: "#002B49",
                    marginBottom: "1rem",
                    minHeight: "clamp(60px, 8vw, 90px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: isTransitioning ? 0 : 1,
                    transition: "opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                >
                  {content[activeStep].heading}
                </h2>
                {/* Description */}
                <p 
                  className="text-neutral-600 tw-text-xl tw-mt-605 splitTextStyleOne max-w-5 mx-auto fw-medium tw-leading-145 max-w-548-px how-it-works-text"
                  style={{
                    minHeight: "clamp(64px, 8vw, 96px)",
                    opacity: isTransitioning ? 0 : 1,
                    transition: "opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.05s",
                  }}
                >
                  {content[activeStep].description}
                </p>
              </div>

              {/* 3 Steps */}
              <div className="d-flex justify-content-center position-relative z-1 tw-gap-2 tw-pb-6 how-it-works-steps-container" style={{ marginTop: "clamp(3rem, 6vw, 5rem)", gap: "clamp(3rem, 10vw, 6rem)" }}>
                {/* Connecting Line */}
                <span className="tw-h-px how-it-works-connecting-line position-absolute z-n1" style={{ top: "11px", left: "50%", transform: "translateX(-50%)", width: "calc(70.66% - 23px)" }}></span>

                {/* Step 1 */}
                <div 
                  className="text-center how-it-works-circle-container how-it-works-step-1"
                  onClick={() => handleCircleClick(0)}
                  style={{ 
                    cursor: "pointer",
                    transform: activeStep === 0 ? "scale(1.1)" : "scale(1)",
                    opacity: activeStep === 0 ? 1 : 1,
                  }}
                >
                  <span className={`tw-w-405 tw-h-405 bg-deep-green rounded-circle ${activeStep === 0 ? 'how-it-works-active-circle' : ''}`}></span>
                  <span className="text-heading fw-semibold d-block tw-mt-4 text-capitalize how-it-works-step-text">Sign up</span>
                </div>

                {/* Step 2 */}
                <div 
                  className="text-center how-it-works-circle-container how-it-works-step-2"
                  onClick={() => handleCircleClick(1)}
                  style={{ 
                    marginLeft: "1rem",
                    cursor: "pointer",
                    transform: activeStep === 1 ? "scale(1.1)" : "scale(1)",
                    opacity: activeStep === 1 ? 1 : 1,
                  }}
                >
                  <span className={`tw-w-405 tw-h-405 rounded-circle bg-white common-shadow-twentyEight ${activeStep === 1 ? 'how-it-works-active-circle' : ''}`}></span>
                  <span className="text-heading fw-semibold d-block tw-mt-4 text-capitalize how-it-works-step-text">Preferences</span>
                </div>

                {/* Step 3 */}
                <div 
                  className="text-center how-it-works-circle-container how-it-works-step-3"
                  onClick={() => handleCircleClick(2)}
                  style={{ 
                    cursor: "pointer",
                    transform: activeStep === 2 ? "scale(1.1)" : "scale(1)",
                    opacity: activeStep === 2 ? 1 : 1,
                  }}
                >
                  <span className={`tw-w-405 tw-h-405 rounded-circle how-it-works-step3-circle ${activeStep === 2 ? 'how-it-works-active-circle' : ''}`}></span>
                  <span className="text-heading fw-semibold d-block tw-mt-4 text-capitalize how-it-works-step-text">Managing</span>
                </div>
              </div>
            </div>

            {/* Right Side Image */}
            <div className="d-flex flex-column justify-content-end how-it-works-image-container" style={{ alignSelf: "flex-end", position: "relative", minHeight: "300px", willChange: "contents" }}>
              <img
                src={content[activeStep].image}
                alt="How It Works"
                className="how-it-works-image"
                style={{ 
                  display: "block", 
                  marginBottom: 0,
                  width: "100%",
                  height: "auto",
                  willChange: "transform, opacity",
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning ? "translate3d(0, 12px, 0) scale(0.96)" : "translate3d(0, 0, 0) scale(1)",
                  transition: "opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
