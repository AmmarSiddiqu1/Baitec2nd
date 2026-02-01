import { useState, type FC } from "react";
import { headingStyles, bodyStyles } from "../utils/styles";
import { COLORS, TRANSITIONS } from "../constants";

const FAQ: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who is BaiTech for?",
      answer:
        "BaiTech is built for property owners, landlords, and property managers who want clearer oversight and less daily manual work.",
    },
    {
      question: "Who is Basem and how does he help me?",
      answer:
        "Basem is BaiTech’s AI assistant. You can talk to him on WhatsApp to ask questions, request updates, or take action. He helps organize information, provides instant updates, and assists with daily property management tasks.",
    },
    {
      question: "Do I need technical knowledge to use BaiTech?",
      answer:
        "No. BaiTech is designed to be simple and easy to use, even if you’ve never used property management software before",
    },
    {
      question: "Can I manage multiple properties and units?",
      answer:
        "Yes. BaiTech allows you to manage multiple properties and units from one dashboard.",
    },
    {
      question: "How does maintenance management work?",
      answer:
        "Tenants can take a photo of the issue and send it through the system.You review the request, choose the maintenance provider, set the time and price, and then follow the status of the maintenance until the work is completed.",
    },
    {
      question: "Is BaiTech available on mobile?",
      answer:
        "Yes. You can access BaiTech through the app, and interact with Basem directly on WhatsApp.",
    },
    {
      question: "How much does it cost to use BaiTech?",
      answer:
        "BaiTech is priced at 1 BHD per unit, with no complicated plans or tiers.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes. You can try BaiTech free for one month before committing.",
    },
  ];

  const cardStyle = {
    background: COLORS.white,
    borderRadius: "12px",
    border: "1px solid #E9ECEF",
    overflow: "hidden" as const,
    transition: TRANSITIONS.smooth,
  };

  const buttonStyle = {
    background: "none",
    border: "none",
    cursor: "pointer" as const,
    textAlign: "left" as const,
    transition: TRANSITIONS.smoothFast,
  };

  return (
    <section id='faq' className='tw-py-80-px'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center tw-mb-12'>
            <h2 className='tw-mb-4' style={headingStyles.h2} data-aos='fade-up'>
              Frequently Asked Questions
            </h2>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-8 mx-auto'>
            {faqs.map((faq, index) => (
              <div key={index} className='tw-mb-3' data-aos='fade-up' data-aos-delay={index * 100}>
                <div
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 43, 73, 0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className='w-100 p-4 d-flex align-items-center justify-content-between'
                    style={buttonStyle}
                  >
                    <h3 style={{ ...headingStyles.h4, fontSize: "clamp(14px, 2vw, 18px)", margin: 0 }}>
                      {faq.question}
                    </h3>
                    <div
                      style={{
                        flexShrink: 0,
                        marginLeft: "16px",
                        width: "24px",
                        height: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <i
                        className={`ph ph-${openIndex === index ? "minus" : "plus"}`}
                        style={{ fontSize: "clamp(20px, 3vw, 24px)", color: COLORS.mediumBlue, transition: "opacity 0.2s ease" }}
                      />
                    </div>
                  </button>
                  <div
                    style={{
                      maxHeight: openIndex === index ? "500px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease",
                      opacity: openIndex === index ? 1 : 0,
                    }}
                  >
                    <div className='p-4' style={{ borderTop: "1px solid #E9ECEF", background: "#F8F9FA" }}>
                      <p style={{ ...bodyStyles.medium, color: COLORS.neutral500, lineHeight: "1.8", margin: 0 }}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
