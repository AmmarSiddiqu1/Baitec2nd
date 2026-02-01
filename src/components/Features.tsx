import type { FC } from "react";

const Features: FC = () => {
  return (
    <>
      {/* Offer Five Section */}
      <section id="features" className="offer-five py-120" style={{ background: "linear-gradient(180deg, rgba(132, 218, 222, 0.08) 0%, rgba(255, 255, 255, 0) 100%)" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="row gy-5 flex-wrap-reverse align-items-center">
                {/* Left Image */}
                <div className="col-md-6" style={{ marginBottom: "clamp(1rem, 3vw, 0)" }}>
                  <div className="pe-lg-5 d-flex h-100" style={{ paddingRight: "clamp(0, 2vw, 3rem)" }}>
                    <img
                      src="/assets/images/why_choose_us/transactions.png"
                      alt="Why choose Baitech"
                      className="w-100"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                      style={{
                        borderRadius: "24px",
                        objectFit: "contain",
                        height: "auto",
                      }}
                    />
                  </div>
                </div>

                {/* Right Content */}
                <div className="col-md-6" style={{ paddingLeft: "clamp(0, 2vw, 3rem)" }}>
                  <div className="">
                    <div className="max-w-780-px text-lg-start text-center mx-auto">
                      {/* Badge */}
                      <div
                        className="tw-py-2 tw-px-7 rounded-pill fw-bold text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="600"
                        style={{
                          background: "linear-gradient(135deg, #1ECAD3 0%, #0099A8 100%)",
                          color: "#FFFFFF",
                          boxShadow: "0 8px 24px rgba(30, 202, 211, 0.3)",
                        }}
                      >
                        why choose us
                      </div>
                      {/* Headline */}
                      <h2
                        className="splitTextStyleOne text-heading text-capitalize tw-leading-none"
                        style={{
                          fontSize: "clamp(28px, 4vw, 42px)",
                          fontWeight: 700,
                          color: "#002B49",
                          lineHeight: 1.2,
                          marginTop: "1rem",
                        }}
                      >
                        Why property owners choose BaiTech
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
                        Baitech simplifies property management, allowing you to focus more on your business and enjoy peace of mind.
                      </p>
                    </div>

                    {/* Feature Cards */}
                    <div className="tw-mt-11 d-flex flex-column tw-gap-7">
                      {/* Feature 1 */}
                      <div
                        className="tw-rounded-3xl tw-py-8 tw-px-9 d-flex align-items-start tw-gap-605"
                        data-aos="fade-left"
                        data-aos-duration="800"
                        style={{
                          borderRadius: "24px",
                          background: "linear-gradient(135deg, rgba(132, 218, 222, 0.15) 0%, rgba(30, 202, 211, 0.1) 100%)",
                          padding: "24px 36px",
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                          const icon = e.currentTarget.querySelector('.feature-icon') as HTMLElement;
                          if (icon) {
                            icon.style.transform = "scale(1.15)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          const icon = e.currentTarget.querySelector('.feature-icon') as HTMLElement;
                          if (icon) {
                            icon.style.transform = "scale(1)";
                          }
                        }}
                      >
                        <div className="">
                          <div
                            className="feature-icon"
                            style={{
                              width: "52px",
                              height: "52px",
                              background: "linear-gradient(135deg, #84DADE 0%, #1ECAD3 100%)",
                              borderRadius: "14px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            }}
                          >
                            <i className="ph ph-list-checks" style={{ fontSize: "28px", color: "#FFFFFF", fontWeight: 400 }} />
                          </div>
                        </div>
                        <div className="">
                          <h6
                            className="feature-text tw-mb-405 splitTextStyleOne"
                            style={{
                              fontSize: "clamp(16px, 2.5vw, 20px)",
                              fontWeight: 700,
                              color: "#002B49",
                              marginBottom: "0.25rem",
                              marginTop: "-0.5rem",
                              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            }}
                          >
                            AI-Powered Automation
                          </h6>
                          <p
                            className="feature-text tw-text-lg max-w-278-px tw-leading-153 splitTextStyleOne"
                            style={{
                              fontSize: "clamp(14px, 1.5vw, 16px)",
                              color: "#002B49",
                              lineHeight: 1.5,
                              opacity: 0.8,
                              marginTop: "0",
                              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            }}
                          >
                            Automate rent reminders, maintenance requests, and WhatsApp communications with AI.
                          </p>
                        </div>
                      </div>

                      {/* Feature 2 */}
                      <div
                        className="tw-rounded-3xl tw-py-8 tw-px-9 d-flex align-items-start tw-gap-605"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        style={{
                          borderRadius: "24px",
                          background: "linear-gradient(135deg, rgba(255, 68, 56, 0.12) 0%, rgba(255, 68, 56, 0.08) 100%)",
                          padding: "32px 36px",
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                          const icon = e.currentTarget.querySelector('.feature-icon') as HTMLElement;
                          if (icon) {
                            icon.style.transform = "scale(1.15)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          const icon = e.currentTarget.querySelector('.feature-icon') as HTMLElement;
                          if (icon) {
                            icon.style.transform = "scale(1)";
                          }
                        }}
                      >
                        <div className="">
                          <div
                            className="feature-icon"
                            style={{
                              width: "52px",
                              height: "52px",
                              background: "linear-gradient(135deg, #FF4438 0%, #FF6B5E 100%)",
                              borderRadius: "14px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            }}
                          >
                            <i className="ph ph-wallet" style={{ fontSize: "28px", color: "#FFFFFF", fontWeight: 400 }} />
                          </div>
                        </div>
                        <div className="">
                          <h6
                            className="feature-text tw-mb-405 splitTextStyleOne"
                            style={{
                              fontSize: "clamp(16px, 2.5vw, 20px)",
                              fontWeight: 700,
                              color: "#002B49",
                              marginBottom: "0.25rem",
                              marginTop: "-0.5rem",
                              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            }}
                          >
                            Local Payment Integration
                          </h6>
                          <p
                            className="feature-text tw-text-lg max-w-278-px tw-leading-153 splitTextStyleOne"
                            style={{
                              fontSize: "clamp(14px, 1.5vw, 16px)",
                              color: "#002B49",
                              lineHeight: 1.5,
                              opacity: 0.8,
                              marginTop: "0",
                              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            }}
                          >
                            BenefitPay for Bahrain and Tap for GCC with automatic reconciliation and receipts.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Features Section - 4 Cards */}
      <section className="about-features py-120" style={{ background: "#FFFFFF" }}>
        <div className="container">
          <div className="text-center mx-auto tw-pb-15 max-w-910-px">
            {/* Badge */}
            <div
              className="tw-py-2 tw-px-7 rounded-pill fw-bold text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="600"
              style={{
                background: "linear-gradient(135deg, #002B49 0%, #0099A8 100%)",
                color: "#FFFFFF",
                boxShadow: "0 8px 24px rgba(0, 43, 73, 0.3)",
              }}
            >
              key features
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
              Simplifying your property management
            </h2>
            {/* Description */}
            <p
              className="splitTextStyleOne max-w-602-px mx-auto fw-medium tw-mt-5"
              style={{
                fontSize: "18px",
                color: "#002B49",
                marginTop: "1rem",
                opacity: 0.8,
              }}
            >
              Discover how Baitech not only simplifies your management process but also empowers you to make smarter decisions.
            </p>
          </div>

          {/* 4 Feature Cards */}
          <div className="row gy-4 g-3">
            {[
              { icon: "ph-users", title: "User-friendly Interface", desc: "Designed for everyone, from tech-savvy users to elderly tenants and landlords.", color: "#1ECAD3" },
              { icon: "ph-wallet", title: "Payment Solutions", desc: "Integrated with BenefitPay and Tap for seamless GCC-wide transactions.", color: "#0099A8" },
              { icon: "ph-wrench", title: "Maintenance Management", desc: "Auto-categorize requests, get approvals, and assign vendors efficiently.", color: "#84DADE" },
              { icon: "ph-bell", title: "Smart Notifications", desc: "WhatsApp, SMS, and email alerts with configurable quiet hours for respect.", color: "#FF4438" },
            ].map((feature, idx) => (
              <div key={idx} className="col-xl-3 col-sm-6" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration={600 + idx * 200}>
                <div
                  className="tw-rounded-2xl tw-py-14 tw-px-7 h-100"
                  style={{
                    borderRadius: "20px",
                    background: `linear-gradient(135deg, ${feature.color}15 0%, ${feature.color}08 100%)`,
                    padding: "56px 28px",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    height: "100%",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `linear-gradient(135deg, ${feature.color} 0%, ${feature.color}DD 100%)`;
                    e.currentTarget.style.boxShadow = `0 20px 60px ${feature.color}40`;
                    // Scale up the icon only
                    const icon = e.currentTarget.querySelector('.card-icon') as HTMLElement;
                    if (icon) {
                      icon.style.transform = "scale(1.15)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `linear-gradient(135deg, ${feature.color}15 0%, ${feature.color}08 100%)`;
                    e.currentTarget.style.boxShadow = "none";
                    // Reset icon scale
                    const icon = e.currentTarget.querySelector('.card-icon') as HTMLElement;
                    if (icon) {
                      icon.style.transform = "scale(1)";
                    }
                  }}
                >
                  <span
                    className="card-icon rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "76px",
                      height: "76px",
                      borderRadius: "50%",
                      background: "#FFFFFF",
                      border: `2px solid ${feature.color}`,
                      boxShadow: `0 8px 24px rgba(0, 0, 0, 0.1)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "2rem",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <i className={`ph-bold ${feature.icon}`} style={{ fontSize: "38px", color: feature.color, transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)" }} />
                  </span>
                  <h4
                    className="card-text splitTextStyleOne tw-mb-7"
                    style={{
                      fontSize: "clamp(18px, 2.5vw, 22px)",
                      fontWeight: 700,
                      color: "#002B49",
                      marginBottom: "1rem",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    {feature.title}
                  </h4>
                  <p
                    className="card-text splitTextStyleOne fw-medium"
                    style={{
                      fontSize: "16px",
                      color: "#002B49",
                      lineHeight: 1.5,
                      opacity: 0.8,
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
