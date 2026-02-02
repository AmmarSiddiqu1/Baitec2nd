import type { FC } from "react";

const NewFeatured: FC = () => {
  const features = [
    {
      title: "AI-powered automation",
      desc: "BaiTech uses AI to handle rent tracking, maintenance requests, and daily updates through WhatsApp, reducing manual follow-ups.",
      icon: "ai.svg",
      gradientDirection: "135deg"
    },
    {
      title: "Everything in one system",
      desc: "Units, tenants, rent records, and maintenance are all managed from one connected platform, eliminating scattered tools and spreadsheets.",
      icon: "system.svg",
      gradientDirection: "45deg"
    },
    {
      title: "Clear visibility and control",
      desc: "Get a real-time view of unit status, rent activity, tenant details, and maintenance progress so you always know what's happening.",
      icon: "clear.svg",
      gradientDirection: "90deg"
    },
    {
      title: "Less manual work",
      desc: "Automated processes and structured data reduce the need for constant calls, messages, and manual tracking.",
      icon: "lmw.svg",
      gradientDirection: "180deg"
    },
    {
      title: "24/7 assistance",
      desc: "Basem, BaiTech's AI assistant, is available 24/7 on WhatsApp to answer questions, provide updates, and take action when needed.",
      icon: "247.svg",
      gradientDirection: "225deg"
    },
    {
      title: "Built for real property workflows",
      desc: "BaiTech is designed around how property owners actually manage their properties, not generic software features.",
      icon: "built.svg",
      gradientDirection: "270deg"
    }
  ];

  return (
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
            Why property owners choose BaiTech
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
            A system built for clarity and control.
          </p>
        </div>

        {/* 6 Feature Cards - 2 rows × 3 columns */}
        <div className="row gy-4 g-3">
          {features.map((feature, idx) => (
            <div key={idx} className="col-xl-4 col-sm-6" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration={600 + idx * 200} style={{ maxWidth: "calc(33.333% + 20px)" }}>
              <div
                className="tw-rounded-2xl tw-py-14 tw-px-7 h-100"
                style={{
                  borderRadius: "20px",
                  background: "#002B49",
                  padding: "56px 32px",
                  transition: "background 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                  height: "100%",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  // Change to light gradient background with dynamic direction
                  e.currentTarget.style.background = `linear-gradient(${feature.gradientDirection}, #FFFFFF 0%, #84DADE 100%)`;
                  // Change text colors to dark navy
                  const title = e.currentTarget.querySelector('.card-title') as HTMLElement;
                  const desc = e.currentTarget.querySelector('.card-desc') as HTMLElement;
                  if (title) {
                    title.style.color = "#002B49";
                    title.style.transform = "translateY(-2px)";
                  }
                  if (desc) {
                    desc.style.color = "#002B49";
                    desc.style.transform = "translateY(-2px)";
                  }
                  // Enhanced glow and scale for icon
                  const iconImg = e.currentTarget.querySelector('.icon-img') as HTMLElement;
                  if (iconImg) {
                    iconImg.style.filter = "drop-shadow(0 0 20px rgba(255, 68, 56, 1.2))";
                    iconImg.style.transform = "scale(1.1)";
                  }
                }}
                onMouseLeave={(e) => {
                  // Change back to dark navy background
                  e.currentTarget.style.background = "#002B49";
                  // Change text colors back to white
                  const title = e.currentTarget.querySelector('.card-title') as HTMLElement;
                  const desc = e.currentTarget.querySelector('.card-desc') as HTMLElement;
                  if (title) {
                    title.style.color = "#FFFFFF";
                    title.style.transform = "translateY(0)";
                  }
                  if (desc) {
                    desc.style.color = "#FFFFFF";
                    desc.style.transform = "translateY(0)";
                  }
                  // Remove glow and reset scale from icon
                  const iconImg = e.currentTarget.querySelector('.icon-img') as HTMLElement;
                  if (iconImg) {
                    iconImg.style.filter = "none";
                    iconImg.style.transform = "scale(1)";
                  }
                }}
              >
                {/* Icon */}
                <div
                  className="card-icon d-flex align-items-center justify-content-center"
                  style={{
                    width: "76px",
                    height: "76px",
                    borderRadius: "50%",
                    background: "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "2rem",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <img
                    src={`/assets/images/icons/${feature.icon}`}
                    alt={feature.title}
                    className="icon-img"
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "contain",
                      transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  />
                </div>
                <h4
                  className="card-title splitTextStyleOne tw-mb-7"
                  style={{
                    fontSize: "clamp(18px, 2.5vw, 22px)",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    marginBottom: "1rem",
                    transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                    willChange: "transform, color",
                  }}
                >
                  {feature.title}
                </h4>
                <p
                  className="card-desc splitTextStyleOne fw-medium"
                  style={{
                    fontSize: "16px",
                    color: "#FFFFFF",
                    lineHeight: 1.5,
                    opacity: 0.9,
                    transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                    willChange: "transform, color",
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
  );
};

export default NewFeatured;
