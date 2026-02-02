import type { FC } from "react";
import { useEffect, useRef, useState } from "react";

const Metrics: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animate counter 1: 500
            const duration = 2000; // 2 seconds
            const startTime = Date.now();
            const target1 = 500;
            
            const animate1 = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              // Ease out cubic
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount1(Math.floor(eased * target1));
              
              if (progress < 1) {
                requestAnimationFrame(animate1);
              } else {
                setCount1(target1);
              }
            };
            
            // Animate counter 2: 98
            const target2 = 98;
            const animate2 = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount2(Math.floor(eased * target2));
              
              if (progress < 1) {
                requestAnimationFrame(animate2);
              } else {
                setCount2(target2);
              }
            };
            
            // Animate counter 3: 100
            const target3 = 100;
            const animate3 = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount3(Math.floor(eased * target3));
              
              if (progress < 1) {
                requestAnimationFrame(animate3);
              } else {
                setCount3(target3);
              }
            };
            
            requestAnimationFrame(animate1);
            requestAnimationFrame(animate2);
            requestAnimationFrame(animate3);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  return (
    <section id="impact" ref={sectionRef} className="pt-120" style={{ background: "linear-gradient(180deg, rgba(0, 153, 168, 0.05) 0%, rgba(132, 218, 222, 0.08) 100%)" }}>
      <div className="container">
        <div className="text-center mx-auto tw-pb-15 max-w-548-px">
          {/* Badge */}
          <div
            className="tw-py-2 tw-px-7 rounded-pill fw-bold text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="600"
            style={{
              background: "linear-gradient(135deg, #84DADE 0%, #1ECAD3 100%)",
              color: "#FFFFFF",
              boxShadow: "0 8px 24px rgba(132, 218, 222, 0.3)",
            }}
          >
            our impact
          </div>
          {/* Headline */}
          <h2
            className="splitTextStyleOne text-heading text-capitalize tw-leading-none"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              color: "#002B49",
              lineHeight: 1.2,
              marginTop: "1rem",
            }}
          >
            Trusted by property managers across the GCC
          </h2>
        </div>

        {/* Stats with Dividers */}
        <div
          className="d-flex justify-content-center flex-md-row flex-column tw-gap-148-px"
          style={{
            borderTop: "1px solid #1ECAD3",
            borderBottom: "1px solid #1ECAD3",
            gap: "clamp(20px, 5vw, 80px)",
            padding: "clamp(30px, 5vw, 60px) 0",
          }}
        >
          {/* Stat 1 */}
          <div
            className="text-center d-flex flex-column justify-content-center align-items-center"
            data-aos="fade-up"
            data-aos-duration="800"
            style={{
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <h2
              style={{
                fontSize: "clamp(40px, 6vw, 68px)",
                fontWeight: 700,
                background: "linear-gradient(135deg, #1ECAD3 0%, #0099A8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "0.5rem",
              }}
            >
              <span className="counter">{count1}</span>
              <span>+</span>
            </h2>
            <span
              style={{
                fontSize: "clamp(14px, 1.5vw, 16px)",
                fontWeight: 700,
                color: "#002B49",
                textTransform: "uppercase",
                marginTop: "0.5rem",
                letterSpacing: "1px",
              }}
            >
              Measured by real properties
            </span>
          </div>

          {/* Horizontal Divider 1 (Mobile) */}
          <div className="d-md-none d-block w-100 my-4">
            <div style={{ height: "1px", width: "100%", background: "linear-gradient(90deg, transparent 0%, #1ECAD3 20%, #1ECAD3 80%, transparent 100%)" }} />
          </div>

          {/* Divider 1 (Desktop) */}
          <div className="d-md-flex d-none">
            <div style={{ width: "1px", height: "100%", background: "linear-gradient(180deg, #1ECAD3 0%, #0099A8 100%)" }} />
          </div>

          {/* Stat 2 */}
          <div
            className="text-center d-flex flex-column justify-content-center align-items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            style={{
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <h2
              style={{
                fontSize: "clamp(40px, 6vw, 68px)",
                fontWeight: 700,
                background: "linear-gradient(135deg, #FF4438 0%, #FF6B5E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "0.5rem",
              }}
            >
              <span className="counter">{count2}</span>
              <span>%</span>
            </h2>
            <span
              style={{
                fontSize: "clamp(14px, 1.5vw, 16px)",
                fontWeight: 700,
                color: "#002B49",
                textTransform: "uppercase",
                marginTop: "0.5rem",
                letterSpacing: "1px",
              }}
            >
              real usage
            </span>
          </div>

          {/* Horizontal Divider 2 (Mobile) */}
          <div className="d-md-none d-block w-100 my-4">
            <div style={{ height: "1px", width: "100%", background: "linear-gradient(90deg, transparent 0%, #FF4438 20%, #FF4438 80%, transparent 100%)" }} />
          </div>

          {/* Divider 2 (Desktop) */}
          <div className="d-md-flex d-none">
            <div style={{ width: "1px", height: "100%", background: "linear-gradient(180deg, #FF4438 0%, #FF6B5E 100%)" }} />
          </div>

          {/* Stat 3 */}
          <div
            className="text-center d-flex flex-column justify-content-center align-items-center"
            data-aos="fade-up"
            data-aos-duration="1200"
            style={{
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <h2
              style={{
                fontSize: "clamp(40px, 6vw, 68px)",
                fontWeight: 700,
                background: "linear-gradient(135deg, #0099A8 0%, #002B49 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "0.5rem",
              }}
            >
              <span className="counter">{count3}</span>
              <span>+</span>
            </h2>
            <span
              style={{
                fontSize: "clamp(14px, 1.5vw, 16px)",
                fontWeight: 700,
                color: "#002B49",
                textTransform: "uppercase",
                marginTop: "0.5rem",
                letterSpacing: "1px",
              }}
            >
              real outcomes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
