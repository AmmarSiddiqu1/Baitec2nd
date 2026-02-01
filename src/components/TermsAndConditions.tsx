import type { FC } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { headingStyles, bodyStyles } from "../utils/styles";
import { COLORS } from "../constants";

const TermsAndConditions: FC = () => {
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
              Terms and Conditions
            </h1>
            <div style={cardStyle}>
              <p style={pStyle}>
                <strong style={{ color: COLORS.darkNavy }}>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <h2 style={h2Style}>
                1. Acceptance of Terms
              </h2>
              <p style={pStyle}>
                By accessing and using Baitech's property management platform and services, you accept and agree to be bound by 
                these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 style={h2Style}>
                2. Description of Services
              </h2>
              <p style={pStyle}>
                Baitech provides a comprehensive property management platform that enables users to manage properties, tenants, 
                payments, maintenance, and other property-related activities. Our services include software applications, web 
                platforms, and related support services.
              </p>

              <h2 style={h2Style}>
                3. User Accounts
              </h2>
              <p style={{ ...pStyle, marginBottom: "1rem" }}>
                To access certain features of our services, you must create an account. You agree to:
              </p>
              <ul style={ulStyle}>
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your account information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>

              <h2 style={h2Style}>
                4. Payment Terms
              </h2>
              <p style={{ ...pStyle, marginBottom: "1rem" }}>
                If you purchase a subscription or use paid features:
              </p>
              <ul style={ulStyle}>
                <li>You agree to pay all fees associated with your subscription</li>
                <li>Fees are billed in advance on a recurring basis</li>
                <li>All fees are non-refundable unless otherwise stated</li>
                <li>We reserve the right to change our pricing with prior notice</li>
                <li>Failure to pay may result in suspension or termination of services</li>
              </ul>

              <h2 style={h2Style}>
                5. User Conduct
              </h2>
              <p style={{ ...pStyle, marginBottom: "1rem" }}>
                You agree not to:
              </p>
              <ul style={ulStyle}>
                <li>Use the services for any illegal or unauthorized purpose</li>
                <li>Violate any laws or regulations</li>
                <li>Infringe upon intellectual property rights</li>
                <li>Transmit viruses, malware, or harmful code</li>
                <li>Interfere with or disrupt the services</li>
                <li>Attempt to gain unauthorized access to our systems</li>
              </ul>

              <h2 style={h2Style}>
                6. Intellectual Property
              </h2>
              <p style={pStyle}>
                All content, features, and functionality of the services, including but not limited to text, graphics, logos, 
                icons, images, and software, are the exclusive property of Baitech and are protected by copyright, trademark, 
                and other intellectual property laws.
              </p>

              <h2 style={h2Style}>
                7. Limitation of Liability
              </h2>
              <p style={pStyle}>
                To the maximum extent permitted by law, Baitech shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, 
                or any loss of data, use, goodwill, or other intangible losses resulting from your use of the services.
              </p>

              <h2 style={h2Style}>
                8. Termination
              </h2>
              <p style={pStyle}>
                We may terminate or suspend your account and access to the services immediately, without prior notice, for any 
                breach of these Terms and Conditions. Upon termination, your right to use the services will cease immediately.
              </p>

              <h2 style={h2Style}>
                9. Contact Information
              </h2>
              <p style={pStyle}>
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <p style={{ ...bodyStyles.medium, color: COLORS.mediumBlue, lineHeight: 1.8, fontWeight: 600 }}>
                Email: legal@baitech.com<br />
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

export default TermsAndConditions;
