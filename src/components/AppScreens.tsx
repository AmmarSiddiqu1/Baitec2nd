import type { FC } from "react";
import { headingStyles, bodyStyles } from "../utils/styles";
import { COLORS, SPACING } from "../constants";

const AppScreens: FC = () => {
  const sectionStyle = {
    background: "linear-gradient(180deg, #ffffff 0%, #f5f5fd 25.08%, #d7f2ff 100%)",
    minHeight: "100vh",
    height: "auto",
    display: "flex",
    flexDirection: "column" as const,
    padding: `${SPACING.section.paddingTop} ${SPACING.container.paddingX} 0 ${SPACING.container.paddingX}`,
  };

  const textContent = {
    headline: "Experience the future of property management",
    description: "Discover how Baitech not only simplifies your management process but also empowers you to make smarter, data-driven decisions.",
  };

  return (
    <section className="app-screenshot position-relative z-1 overflow-hidden" style={sectionStyle}>
      <style>{`
        @media (max-width: 991px) {
          .app-screenshot {
            padding: ${SPACING.margin.large} ${SPACING.container.paddingX} !important;
            min-height: auto !important;
          }
        }
      `}</style>
      
      {/* Desktop Text Section */}
      <div className="container d-lg-block d-none" style={{ flex: "0 0 auto" }}>
        <div className="text-center mx-auto tw-pb-15 max-w-910-px">
          <h2 className="splitTextStyleOne text-heading text-capitalize tw-leading-none" style={{ ...headingStyles.h2, marginTop: "1rem" }}>
            {textContent.headline}
          </h2>
          <p className="splitTextStyleOne text-neutral-500 max-w-602-px tw-text-lg mx-auto fw-medium tw-mt-5" style={{ ...bodyStyles.medium, color: COLORS.darkNavy, opacity: 0.8 }}>
            {textContent.description}
          </p>
        </div>
      </div>

      {/* Mobile-Only Text Section */}
      <div className="container d-lg-none d-block" style={{ flex: "0 0 auto", paddingBottom: SPACING.margin.large }}>
        <div className="text-center mx-auto max-w-910-px">
          <h2 className="splitTextStyleOne text-heading text-capitalize tw-leading-none" style={{ ...headingStyles.h2, marginTop: "1rem", marginBottom: "1rem" }}>
            {textContent.headline}
          </h2>
          <p className="splitTextStyleOne text-neutral-500 max-w-602-px tw-text-lg mx-auto fw-medium" style={{ ...bodyStyles.medium, color: COLORS.darkNavy, opacity: 0.8 }}>
            {textContent.description}
          </p>
        </div>
      </div>

      {/* App Showcase Image - Desktop Only */}
      <div className="text-center d-lg-block d-none" style={{ flex: "1 1 auto", display: "flex", alignItems: "flex-end", justifyContent: "center", minHeight: "0" }}>
        <img
          src="/assets/images/app_showcase3/Experience_the_future_of_property_management.png"
          alt="Experience the future of property management"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1200"
          style={{ width: "100%", maxWidth: "clamp(85%, 70%, 100%)", height: "auto", display: "block", objectFit: "contain", objectPosition: "bottom" }}
        />
      </div>
    </section>
  );
};

export default AppScreens;
