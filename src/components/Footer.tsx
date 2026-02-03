import type { FC } from "react";
import { useEffect, useRef } from "react";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  const signupButtonRef = useRef<HTMLAnchorElement>(null);
  const signupFlairRef = useRef<HTMLSpanElement>(null);
  const ctaSectionRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const buttonContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = signupButtonRef.current;
    const flair = signupFlairRef.current;
    
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

  useEffect(() => {
    const ctaSection = ctaSectionRef.current;
    const badge = badgeRef.current;
    const headline = headlineRef.current;
    const buttonContainer = buttonContainerRef.current;

    if (!ctaSection || !badge || !headline || !buttonContainer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate badge
            if (badge) {
              badge.style.opacity = '0';
              badge.style.transform = 'translateY(30px) scale(0.95)';
              badge.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
              setTimeout(() => {
                badge.style.opacity = '1';
                badge.style.transform = 'translateY(0) scale(1)';
              }, 100);
            }

            // Animate headline
            if (headline) {
              headline.style.opacity = '0';
              headline.style.transform = 'translateY(30px) scale(0.95)';
              headline.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
              setTimeout(() => {
                headline.style.opacity = '1';
                headline.style.transform = 'translateY(0) scale(1)';
              }, 300);
            }

            // Animate button container
            if (buttonContainer) {
              buttonContainer.style.opacity = '0';
              buttonContainer.style.transform = 'translateY(30px) scale(0.95)';
              buttonContainer.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
              setTimeout(() => {
                buttonContainer.style.opacity = '1';
                buttonContainer.style.transform = 'translateY(0) scale(1)';
              }, 500);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(ctaSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="footer-five" style={{ width: "100%", overflowX: "hidden" }}>
      <div className="position-relative gradient-bg-70-top-bottom z-1 rounded-top-30-px" style={{ marginLeft: "0", marginRight: "0", width: "100%", maxWidth: "100%" }}>
        {/* Top CTA Section - Contact */}
        <div id="contact" className="row justify-content-center">
          <div className="col-xxl-11">
            <div
              ref={ctaSectionRef}
              className="tw-rounded-28-px tw-py-100-px"
              style={{
                background: "#1ECAD3",
                borderRadius: "28px",
                padding: "clamp(40px, 8vw, 100px) clamp(1.5rem, 4vw, 60px)",
              }}
            >
              <div className="text-center mx-auto max-w-724-px">
                {/* Badge */}
                <div
                  ref={badgeRef}
                  className="bg-white-13 tw-py-2 tw-px-7 rounded-pill text-white fw-semibold text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max common-shadow-twentyNine"
                >
                  Contact Us Now
                </div>
                {/* Headline */}
                <h2
                  ref={headlineRef}
                  className="text-56-px splitTextStyleOne text-capitalize tw-leading-none"
                  style={{
                    fontSize: "clamp(32px, 5vw, 56px)",
                    fontWeight: 800,
                    color: "#002B49",
                    lineHeight: 1.1,
                    marginTop: "1.5rem",
                    fontFamily: "'Filson Pro', sans-serif",
                  }}
                >
                  Transform Your Property Management Today
                </h2>
                {/* CTA Button */}
                <div
                  ref={buttonContainerRef}
                  className="tw-mt-9"
                  style={{ marginTop: "2rem" }}
                >
                  <a
                    ref={signupButtonRef}
                    href="https://wa.me/97312345678"
                    className="hover--translate-y-1 active--translate-y-scale-9 btn btn-white hover-style-one button--stroke d-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-14 rounded-pill tw-py-505 fw-semibold common-shadow-inset-one"
                    data-block="button"
                    style={{
                      backgroundColor: "#FFFFFF",
                      color: "#002B49",
                      textDecoration: "none",
                      padding: "clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2.5rem)",
                    }}
                  >
                    <span ref={signupFlairRef} className="button__flair"></span>
                    <span className="button__label">Sign up Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="pt-120 position-relative" style={{ paddingTop: "120px", marginLeft: "0", marginRight: "0" }}>
          <div className="container">
            <div
              className="d-flex tw-gap-6 d-flex justify-content-between flex-lg-nowrap flex-wrap"
              style={{
                borderTop: "3px solid #1ECAD3",
                borderBottom: "3px solid #1ECAD3",
                gap: "24px",
                padding: "80px 0",
              }}
            >
              {/* Column 1 - Logo and Contact */}
              <div>
                <a
                  href="#home"
                  style={{ marginBottom: "1.5rem", display: "inline-block" }}
                >
                  <img
                    src="/assets/images/logo/Logo.svg"
                    alt="Baitech Logo"
                    style={{ height: "60px", width: "auto" }}
                  />
                </a>
                <p
                  style={{
                    maxWidth: "250px",
                    fontSize: "clamp(14px, 2vw, 18px)",
                    color: "#002B49",
                    marginBottom: "1.5rem",
                    opacity: 0.8,
                  }}
                >
                  AI-first property management built in Bahrain for the GCC
                </p>
                <div className="d-flex flex-column" style={{ gap: "16px", marginTop: "1.5rem" }}>
                  <div className="d-flex align-items-center" style={{ gap: "12px" }}>
                    <span
                      style={{
                        width: "40px",
                        height: "40px",
                        background: "linear-gradient(135deg, #1ECAD3 0%, #0099A8 100%)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <i className="ph-bold ph-phone" style={{ fontSize: "clamp(16px, 2.5vw, 20px)", color: "#FFFFFF" }} />
                    </span>
                    <span style={{ fontWeight: 600, color: "#002B49", fontSize: "clamp(14px, 1.5vw, 16px)" }}>
                      +973 1234 5678
                    </span>
                  </div>
                  <div className="d-flex align-items-center" style={{ gap: "12px" }}>
                    <span
                      style={{
                        width: "40px",
                        height: "40px",
                        background: "linear-gradient(135deg, #FF4438 0%, #FF6B5E 100%)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <i className="ph-bold ph-envelope-simple" style={{ fontSize: "clamp(16px, 2.5vw, 20px)", color: "#FFFFFF" }} />
                    </span>
                    <span style={{ fontWeight: 600, color: "#002B49", fontSize: "clamp(14px, 1.5vw, 16px)" }}>
                      contact@baitech.app
                    </span>
                  </div>
                </div>
              </div>

              {/* Divider 1 */}
              <div className="d-lg-flex d-none footer-divider">
                <div style={{ width: "2px", height: "100%", background: "linear-gradient(180deg, #84DADE 0%, #1ECAD3 50%, #0099A8 100%)" }} />
              </div>

              {/* Column 2 - Navigation */}
              <div>
                <h5
                  style={{
                    fontWeight: 700,
                    color: "#002B49",
                    marginBottom: "2rem",
                    fontSize: "clamp(14px, 2vw, 18px)",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Quick Links
                </h5>
                <ul style={{ gap: "16px", listStyle: "none", padding: 0, display: "flex", flexDirection: "column" }}>
                  {["Home", "How It Works", "Features", "FAQ", "Contact"].map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                        style={{
                          color: "#002B49",
                          textDecoration: "none",
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          fontSize: "16px",
                          fontWeight: 500,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#1ECAD3";
                          e.currentTarget.style.paddingLeft = "8px";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#002B49";
                          e.currentTarget.style.paddingLeft = "0";
                        }}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider 2 */}
              <div className="d-lg-flex d-none footer-divider">
                <div style={{ width: "2px", height: "100%", background: "linear-gradient(180deg, #84DADE 0%, #1ECAD3 50%, #0099A8 100%)" }} />
              </div>

              {/* Column 3 - Newsletter */}
              <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
                <div>
                  <h5
                    style={{
                      fontWeight: 700,
                      color: "#002B49",
                      marginBottom: "2rem",
                      fontSize: "clamp(14px, 2vw, 18px)",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Newsletter
                  </h5>
                  <form
                    action="#"
                    style={{
                      position: "relative",
                      boxShadow: "0 4px 12px rgba(30, 202, 211, 0.2)",
                      borderRadius: "50px",
                      marginBottom: "2rem",
                    }}
                  >
                    <input
                      type="email"
                      placeholder="Enter your e-mail"
                      style={{
                        padding: "16px 56px 16px 48px",
                        border: "2px solid #84DADE",
                        borderRadius: "50px",
                        fontSize: "15px",
                        outline: "none",
                        width: "100%",
                        background: "#FFFFFF",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        left: "20px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        fontSize: "clamp(16px, 2.5vw, 20px)",
                        color: "#1ECAD3",
                      }}
                    >
                      <i className="ph-bold ph-envelope-simple" />
                    </span>
                    <button
                      type="button"
                      style={{
                        position: "absolute",
                        right: "8px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "44px",
                        height: "44px",
                        background: "linear-gradient(135deg, #1ECAD3 0%, #0099A8 100%)",
                        border: "none",
                        borderRadius: "50%",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "clamp(16px, 2.5vw, 20px)",
                        color: "#FFFFFF",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "linear-gradient(135deg, #FF4438 0%, #FF6B5E 100%)";
                        e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "linear-gradient(135deg, #1ECAD3 0%, #0099A8 100%)";
                        e.currentTarget.style.transform = "translateY(-50%) scale(1)";
                      }}
                    >
                      <i className="ph-bold ph-arrow-up-right" />
                    </button>
                  </form>
                </div>
                {/* Terms and Conditions Links */}
                <div 
                  className="footer-terms-links"
                  style={{ 
                    marginTop: "auto", 
                    paddingTop: "clamp(7.5rem, 3vw, 2rem)", 
                    display: "flex", 
                    gap: "1rem", 
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                  }}
                >
                  <a
                    href="/terms-and-conditions"
                    style={{
                      color: "#1ECAD3",
                      textDecoration: "none",
                      fontSize: "clamp(12px, 1.2vw, 14px)",
                      fontWeight: 600,
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#FF4438";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#1ECAD3";
                    }}
                  >
                    Terms and Conditions
                  </a>
                  <span className="terms-separator" style={{ color: "#84DADE" }}>|</span>
                  <a
                    href="/privacy-policy"
                    style={{
                      color: "#1ECAD3",
                      textDecoration: "none",
                      fontSize: "clamp(12px, 1.2vw, 14px)",
                      fontWeight: 600,
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#FF4438";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#1ECAD3";
                    }}
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div style={{ padding: "32px 0", borderTop: "1px solid #84DADE" }}>
              <div className="container">
                <div className="d-flex align-items-center justify-content-between tw-gap-4 flex-wrap" style={{ gap: "16px" }}>
                  <p style={{ fontWeight: 600, color: "#002B49", margin: 0, fontSize: "16px" }}>
                    Copyright &copy; {currentYear}{" "}
                    <a href="#home" style={{ color: "#1ECAD3", textDecoration: "none", fontWeight: 700 }}>
                      Baitech
                    </a>
                    . All Rights Reserved
                  </p>
                  <div className="d-flex align-items-center" style={{ gap: "12px" }}>
                    {[
                      { icon: "ph-facebook-logo", gradient: "linear-gradient(135deg, #1ECAD3 0%, #0099A8 100%)" },
                      { icon: "ph-twitter-logo", gradient: "linear-gradient(135deg, #0099A8 0%, #1ECAD3 100%)" },
                      { icon: "ph-instagram-logo", gradient: "linear-gradient(135deg, #FF4438 0%, #FF6B5E 100%)" },
                    ].map((social, idx) => (
                      <button
                        key={idx}
                        type="button"
                        style={{
                          width: "40px",
                          height: "40px",
                          background: social.gradient,
                          borderRadius: "50%",
                          fontSize: "clamp(16px, 2.5vw, 20px)",
                          color: "#FFFFFF",
                          cursor: "pointer",
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "none",
                          padding: 0,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      >
                        <i className={`ph-fill ${social.icon}`} style={{ display: "flex", alignItems: "center", justifyContent: "center" }} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
