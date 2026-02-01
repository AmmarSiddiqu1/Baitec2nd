import type { FC } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { headingStyles, bodyStyles } from "../utils/styles";
import { COLORS } from "../constants";

const PrivacyPolicy: FC = () => {
  const sectionStyle = {
    paddingTop: "clamp(100px, 14vw, 160px)",
    paddingBottom: "120px",
    minHeight: "80vh",
    background: "#F5F8FC",
  };

  const contentStyle = {
    maxWidth: "900px",
    margin: "0 auto",
  };

  const cardStyle = {
    background: COLORS.white,
    padding: "3rem",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
  };

  const h2Style = {
    ...headingStyles.h3,
    fontSize: "clamp(20px, 3vw, 24px)",
    marginTop: "2rem",
    marginBottom: "1rem",
  };

  const pStyle = {
    ...bodyStyles.medium,
    color: COLORS.neutral500,
    lineHeight: 1.8,
    marginBottom: "1.5rem",
  };

  const ulStyle = {
    ...pStyle,
    paddingLeft: "2rem",
  };

  return (
    <div>
      <Header />
      <style>{`
        @media (max-width: 991px) {
          .policy-page-section {
            padding-top: clamp(100px, 20vw, 180px) !important;
          }
        }
      `}</style>
      <section className="policy-page-section" style={sectionStyle}>
        <div className="container">
          <div style={contentStyle}>
            <h1 style={{ ...headingStyles.h1, marginBottom: "2rem", textAlign: "center" as const }}>
              Privacy Policy
            </h1>
            <div style={cardStyle}>
              <p style={pStyle}>
                <strong style={{ color: COLORS.darkNavy }}>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <h2 style={h2Style}>
                1. Introduction
              </h2>
              <p style={pStyle}>
                Welcome to Baitech. We are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our property 
                management platform and services.
              </p>

              <h2 style={h2Style}>
                2. Information We Collect
              </h2>
              <p style={{ ...pStyle, marginBottom: "1rem" }}>
                We collect information that you provide directly to us, including:
              </p>
              <ul style={ulStyle}>
                <li>Name, email address, phone number, and contact information</li>
                <li>Property information and management data</li>
                <li>Payment and billing information</li>
                <li>Account credentials and authentication data</li>
              </ul>

              <h2 style={h2Style}>
                3. How We Use Your Information
              </h2>
              <p style={{ ...pStyle, marginBottom: "1rem" }}>
                We use the information we collect to:
              </p>
              <ul style={ulStyle}>
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
              </ul>

              <h2 style={h2Style}>
                4. Information Sharing and Disclosure
              </h2>
              <p style={pStyle}>
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the 
                following circumstances:
              </p>
              <ul style={ulStyle}>
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>With service providers who assist in our operations</li>
              </ul>

              <h2 style={h2Style}>
                5. Data Security
              </h2>
              <p style={pStyle}>
                We implement appropriate technical and organizational security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
                or electronic storage is 100% secure.
              </p>

              <h2 style={h2Style}>
                6. Your Rights
              </h2>
              <p style={{ ...pStyle, marginBottom: "1rem" }}>
                You have the right to:
              </p>
              <ul style={ulStyle}>
                <li>Access and receive a copy of your personal information</li>
                <li>Rectify inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2 style={h2Style}>
                7. Contact Us
              </h2>
              <p style={pStyle}>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p style={{ ...bodyStyles.medium, color: COLORS.mediumBlue, lineHeight: 1.8, fontWeight: 600 }}>
                Email: privacy@baitech.com<br />
                Phone: +973 1234 5678
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
