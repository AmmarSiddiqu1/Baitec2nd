import type { FC } from "react";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { headingStyles, bodyStyles } from "../utils/styles";
import { COLORS } from "../constants";

const ContactUs: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sectionStyle = {
    paddingTop: "clamp(100px, 14vw, 160px)",
    paddingBottom: "120px",
    minHeight: "80vh",
    background: "#F5F8FC",
  };

  const contentStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const cardStyle = {
    background: COLORS.white,
    padding: "clamp(2rem, 4vw, 3rem)",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
  };

  const pStyle = {
    ...bodyStyles.medium,
    color: COLORS.neutral500,
    lineHeight: 1.8,
    marginBottom: "1.5rem",
  };

  const inputGroupStyle = {
    position: "relative" as const,
    marginBottom: "1.5rem",
  };

  const inputStyle = {
    width: "100%",
    padding: "clamp(0.75rem, 1.5vw, 1rem) clamp(0.75rem, 1.5vw, 1rem) clamp(0.75rem, 1.5vw, 1rem) clamp(2.5rem, 4vw, 3rem)",
    border: "1px solid #E0E0E0",
    borderRadius: "8px",
    fontSize: "clamp(14px, 1.5vw, 16px)",
    fontFamily: "'Filson Pro', sans-serif",
    color: COLORS.darkNavy,
    transition: "all 0.3s ease",
    outline: "none",
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: "120px",
    resize: "vertical" as const,
    fontFamily: "'Filson Pro', sans-serif",
  };

  const iconStyle = {
    position: "absolute" as const,
    left: "clamp(0.75rem, 1.5vw, 1rem)",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "clamp(18px, 2vw, 20px)",
    color: COLORS.mediumBlue,
  };

  const buttonStyle = {
    backgroundColor: COLORS.mediumBlue,
    color: COLORS.white,
    border: "none",
    borderRadius: "8px",
    padding: "clamp(0.75rem, 1.5vw, 1rem) clamp(2rem, 3vw, 2.5rem)",
    fontSize: "clamp(14px, 1.5vw, 16px)",
    fontWeight: 600,
    fontFamily: "'Filson Pro', sans-serif",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    transition: "all 0.3s ease",
    marginTop: "1rem",
  };

  const contactItemStyle = {
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
    marginBottom: "2rem",
  };

  const contactIconStyle = {
    width: "clamp(40px, 5vw, 50px)",
    height: "clamp(40px, 5vw, 50px)",
    borderRadius: "50%",
    background: `linear-gradient(135deg, ${COLORS.mediumBlue} 0%, ${COLORS.darkerBlue} 100%)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    fontSize: "clamp(18px, 2vw, 22px)",
    color: COLORS.white,
  };

  const contactContentStyle = {
    flex: 1,
  };

  const contactTitleStyle = {
    ...headingStyles.h4,
    fontSize: "clamp(16px, 2vw, 18px)",
    marginBottom: "0.5rem",
    color: COLORS.darkNavy,
  };

  const contactTextStyle = {
    ...bodyStyles.medium,
    color: COLORS.neutral600,
    lineHeight: 1.6,
    margin: 0,
  };

  const socialIconStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "1px solid #E0E0E0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    color: COLORS.darkNavy,
    background: COLORS.white,
    transition: "all 0.3s ease",
    cursor: "pointer",
    textDecoration: "none",
  };

  return (
    <div>
      <Header />
      <style>{`
        @media (max-width: 991px) {
          .contact-page-section {
            padding-top: clamp(100px, 20vw, 180px) !important;
          }
        }

        .contact-form-input:focus {
          border-color: ${COLORS.mediumBlue} !important;
          box-shadow: 0 0 0 3px rgba(30, 202, 211, 0.1) !important;
        }

        .contact-button:hover {
          background: ${COLORS.darkerBlue} !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(30, 202, 211, 0.3);
        }

        .contact-button:active {
          transform: translateY(0);
        }

        .social-icon:hover {
          background: ${COLORS.mediumBlue} !important;
          color: ${COLORS.white} !important;
          border-color: ${COLORS.mediumBlue} !important;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .contact-grid {
            flex-direction: column !important;
          }
          
          .contact-form-section,
          .contact-info-section {
            width: 100% !important;
          }
        }
      `}</style>
      <section className="contact-page-section" style={sectionStyle}>
        <div className="container">
          <div style={contentStyle}>
            <h1 style={{ ...headingStyles.h1, marginBottom: "1rem", textAlign: "center" as const }}>
              Contact Us
            </h1>
            <p style={{ ...pStyle, textAlign: "center" as const, marginBottom: "3rem" }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque inventore
            </p>

            <div className="contact-grid" style={{ display: "flex", gap: "clamp(2rem, 4vw, 3rem)", flexWrap: "wrap" }}>
              {/* Contact Form Section */}
              <div className="contact-form-section" style={{ ...cardStyle, flex: "1 1 500px" }}>
                <h2 style={{ ...headingStyles.h3, fontSize: "clamp(20px, 3vw, 24px)", marginBottom: "1rem" }}>
                  Fill Up The Form
                </h2>
                <p style={{ ...bodyStyles.small, color: COLORS.neutral500, marginBottom: "2rem" }}>
                  Your email address will not be published. Required fields are marked *
                </p>

                <form onSubmit={handleSubmit}>
                  {/* Name Field */}
                  <div style={inputGroupStyle}>
                    <i className="ph-bold ph-user" style={iconStyle}></i>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name*"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="contact-form-input"
                      style={inputStyle}
                    />
                  </div>

                  {/* Email Field */}
                  <div style={inputGroupStyle}>
                    <i className="ph-bold ph-envelope-simple" style={iconStyle}></i>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address*"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="contact-form-input"
                      style={inputStyle}
                    />
                  </div>

                  {/* Message Field */}
                  <div style={inputGroupStyle}>
                    <i className="ph-bold ph-pencil" style={{ ...iconStyle, top: "clamp(0.75rem, 1.5vw, 1rem)", transform: "none" }}></i>
                    <textarea
                      name="message"
                      placeholder="Enter Your Message here"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="contact-form-input"
                      style={textareaStyle}
                    />
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="contact-button" style={buttonStyle}>
                    <i className="ph-bold ph-paper-plane-tilt"></i>
                    Get In Touch
                  </button>
                </form>
              </div>

              {/* Contact Information Section */}
              <div className="contact-info-section" style={{ flex: "1 1 400px", marginTop: "clamp(2rem, 4vw, 3rem)" }}>
                {/* Phone */}
                <div style={contactItemStyle}>
                  <div style={contactIconStyle}>
                    <i className="ph-bold ph-phone"></i>
                  </div>
                  <div style={contactContentStyle}>
                    <h3 style={contactTitleStyle}>Phone</h3>
                    <p style={contactTextStyle}>+973 1234 5678</p>
                    <p style={contactTextStyle}>+973 9876 5432</p>
                  </div>
                </div>

                {/* Email & Website */}
                <div style={contactItemStyle}>
                  <div style={contactIconStyle}>
                    <i className="ph-bold ph-envelope-simple"></i>
                  </div>
                  <div style={contactContentStyle}>
                    <h3 style={contactTitleStyle}>Email</h3>
                    <p style={contactTextStyle}>contact@baitech.app</p>
                    <p style={contactTextStyle}>www.baitech.app</p>
                  </div>
                </div>

                {/* Social Media */}
                <div style={contactItemStyle}>
                  <div style={contactIconStyle}>
                    <i className="ph-bold ph-share-network"></i>
                  </div>
                  <div style={contactContentStyle}>
                    <h3 style={contactTitleStyle}>Social</h3>
                    <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" style={socialIconStyle}>
                        <i className="ph-bold ph-facebook-logo"></i>
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" style={socialIconStyle}>
                        <i className="ph-bold ph-twitter-logo"></i>
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" style={socialIconStyle}>
                        <i className="ph-bold ph-instagram-logo"></i>
                      </a>
                      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon" style={socialIconStyle}>
                        <i className="ph-bold ph-youtube-logo"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
