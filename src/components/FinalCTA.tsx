import type { FC } from "react";
import { useEffect, useState, useRef } from "react";

const FinalCTA: FC = () => {
  const [downloadUrl, setDownloadUrl] = useState("https://play.google.com/store/apps");
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const flairRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Detect platform
    const userAgent = navigator.userAgent || navigator.platform || "";
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
    const isAndroid = /Android/.test(userAgent);

    if (isIOS) {
      setDownloadUrl("https://www.apple.com/app-store");
    } else if (isAndroid) {
      setDownloadUrl("https://play.google.com/store/apps");
    } else {
      // Default to Google Play for other platforms
      setDownloadUrl("https://play.google.com/store/apps");
    }
  }, []);

  useEffect(() => {
    const button = buttonRef.current;
    const flair = flairRef.current;
    
    if (!button || !flair) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate cursor position as percentage
      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;
      
      // Set transform origin to cursor position, fill expands to opposite
      flair.style.transformOrigin = `${percentX}% ${percentY}%`;
      
      // Ensure smooth transition
      if (!flair.style.transition) {
        flair.style.transition = 'transform 0.85s cubic-bezier(0.645, 0.045, 0.355, 1)';
      }
    };

    const handleMouseEnter = () => {
      button.addEventListener('mousemove', handleMouseMove);
    };

    const handleMouseLeave = () => {
      button.removeEventListener('mousemove', handleMouseMove);
      flair.style.transformOrigin = '50% 50%';
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
      button.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <section className="download-app py-120" style={{ background: "#FFFFFF" }}>
      <div className="container">
              <div className="row gy-4 align-items-center">
                {/* Left Image */}
                <div className="col-md-6" style={{ paddingRight: "clamp(0, 2vw, 2rem)", paddingBottom: "clamp(1rem, 3vw, 0)" }}>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              style={{
                width: "100%",
                borderRadius: "24px",
                overflow: "hidden",
              }}
            >
              <img
                src="/assets/images/get_started_today/why_should_you_choose.png"
                alt="Why should you choose Baitech"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "24px",
                }}
              />
            </div>
          </div>

                {/* Right Content */}
                <div className="col-md-6" style={{ paddingLeft: "clamp(0, 2vw, 2rem)" }}>
            <div className="">
              <div className="max-w-780-px text-lg-start text-center mx-auto">
                {/* Badge */}
                <div
                  className="tw-py-2 tw-px-7 rounded-pill fw-bold text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-6 min-w-max"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="600"
                  style={{
                    background: "linear-gradient(135deg, #FF4438 0%, #FF6B5E 100%)",
                    color: "#FFFFFF",
                    boxShadow: "0 8px 24px rgba(255, 68, 56, 0.3)",
                  }}
                >
                  get started today
                </div>
                {/* Headline */}
                <h2
                  className="splitTextStyleOne text-heading text-capitalize tw-leading-none"
                  style={{
                    fontSize: "clamp(28px, 4vw, 42px)",
                    fontWeight: 700,
                    color: "#002B49",
                    lineHeight: 1.2,
                  }}
                >
                  Ready to transform your property management?
                </h2>
                {/* Description */}
                  <p
                    className="tw-text-lg tw-mt-605 splitTextStyleOne max-w-5 fw-medium tw-leading-145 max-w-570-px"
                    style={{
                      fontSize: "clamp(14px, 2vw, 18px)",
                      color: "#002B49",
                      marginTop: "1rem",
                      opacity: 0.8,
                    }}
                  >
                  Join hundreds of property managers in Bahrain and across the GCC who trust Baitech for their daily operations.
                </p>
              </div>

              {/* Checkmark List */}
              <div className="d-flex flex-column tw-gap-5 tw-mt-12" style={{ gap: "20px", marginTop: "3rem" }}>
                {[
                  { text: "Quick onboarding and setup", color: "#1ECAD3" },
                  { text: "Local payment integration", color: "#0099A8" },
                  { text: "24/7 AI-powered support", color: "#FF4438" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="d-flex align-items-center tw-gap-205"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration={700 + idx * 200}
                    style={{ gap: "12px" }}
                  >
                    <span
                      style={{
                        width: "36px",
                        height: "36px",
                        background: item.color,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: `0 4px 16px ${item.color}40`,
                      }}
                    >
                      <i className="ph-bold ph-check" style={{ fontSize: "20px", color: "#FFFFFF" }} />
                    </span>
                    <span
                      style={{
                        fontSize: "clamp(15px, 2vw, 19px)",
                        fontWeight: 600,
                        color: "#002B49",
                      }}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Download App Now Button */}
              <div
                className="tw-mt-13"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1200"
                style={{ marginTop: "3rem" }}
              >
                <a
                  ref={buttonRef}
                  href={downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke d-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-9 rounded-pill tw-py-505 fw-semibold common-shadow-inset-one btn-red-navy"
                  data-block="button"
                  style={{
                    backgroundColor: "#FF4438",
                    color: "#FFFFFF",
                    width: "100%",
                    maxWidth: "100%",
                  }}
                >
                  <span ref={flairRef} className="button__flair"></span>
                  <span className="button__label">Download app now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
