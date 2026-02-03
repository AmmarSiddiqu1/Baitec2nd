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
    <section id="newfeatured" className="about-features py-120" style={{ background: "#FFFFFF" }}>
      <div className="container">
            <div className="text-center mx-auto tw-pb-15 max-w-910-px">
              {/* Headline */}
              <h2
                className="splitTextStyleOne text-heading tw-leading-none"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-easing="ease-out-cubic"
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 700,
                  color: "#002B49",
                  lineHeight: 1,
                  marginTop: "1rem",
                }}
              >
                Why property owners choose BaiTech or A system built for clarity and control.
              </h2>
            </div>

        {/* 6 Feature Cards - 2 rows × 3 columns */}
        <div className="row gy-4 g-3">
          {features.map((feature, idx) => (
            <div key={idx} className="col-xl-4 col-sm-6" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration={600 + idx * 200}>
              <div
                className="tw-rounded-2xl tw-py-14 tw-px-7 h-100 newfeatured-card"
                style={{
                  borderRadius: "20px",
                  background: "#002B49",
                  padding: "clamp(36px, 4vw, 56px) clamp(28px, 3vw, 44px)",
                  border: "none",
                  outline: "none",
                  transition: "background 1s ease",
                  height: "100%",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  // Ensure transition is set before changing background
                  e.currentTarget.style.transition = "background 1s ease";
                  // Change to light gradient background with dynamic direction
                  e.currentTarget.style.background = `linear-gradient(${feature.gradientDirection}, #FFFFFF 0%, #84DADE 100%)`;
                  // Change text colors to dark navy
                  const title = e.currentTarget.querySelector('.card-title') as HTMLElement;
                  const desc = e.currentTarget.querySelector('.card-desc') as HTMLElement;
                  if (title) {
                    title.style.transition = "color 1s ease, transform 1s ease";
                    title.style.color = "#002B49";
                    title.style.transform = "translateY(-2px)";
                  }
                  if (desc) {
                    desc.style.transition = "color 1s ease, transform 1s ease";
                    desc.style.color = "#002B49";
                    desc.style.transform = "translateY(-2px)";
                  }
                  // Enhanced glow and scale for icon
                  const iconImg = e.currentTarget.querySelector('.icon-img') as HTMLElement;
                  if (iconImg) {
                    iconImg.style.transition = "filter 1s ease, transform 1s ease";
                    iconImg.style.filter = "drop-shadow(0 0 20px rgba(255, 68, 56, 1.2))";
                    iconImg.style.transform = "scale(1.1)";
                  }
                }}
                onMouseLeave={(e) => {
                  // Ensure transition is set before changing background
                  e.currentTarget.style.transition = "background 1s ease";
                  // Change back to dark navy background
                  e.currentTarget.style.background = "#002B49";
                  // Change text colors back to white
                  const title = e.currentTarget.querySelector('.card-title') as HTMLElement;
                  const desc = e.currentTarget.querySelector('.card-desc') as HTMLElement;
                  if (title) {
                    title.style.transition = "color 1s ease, transform 1s ease";
                    title.style.color = "#FFFFFF";
                    title.style.transform = "translateY(0)";
                  }
                  if (desc) {
                    desc.style.transition = "color 1s ease, transform 1s ease";
                    desc.style.color = "#FFFFFF";
                    desc.style.transform = "translateY(0)";
                  }
                  // Remove glow and reset scale from icon
                  const iconImg = e.currentTarget.querySelector('.icon-img') as HTMLElement;
                  if (iconImg) {
                    iconImg.style.transition = "filter 1s ease, transform 1s ease";
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
                      transition: "filter 0.3s ease, transform 0.3s ease",
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
                    transition: "color 0.3s ease, transform 0.3s ease",
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
                    transition: "color 0.3s ease, transform 0.3s ease",
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
