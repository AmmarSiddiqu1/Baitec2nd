/**
 * Shared Constants for Baitech Website
 * Centralized constants for colors, typography, spacing, and transitions
 */

// Brand Colors
export const COLORS = {
  lightBlue: "#84DADE",
  mediumBlue: "#1ECAD3",
  darkerBlue: "#0099A8",
  warmRed: "#FF4438",
  darkNavy: "#002B49",
  white: "#FFFFFF",
  black: "#000000",
  neutral500: "#666666",
  neutral600: "#555555",
} as const;

// Typography
export const TYPOGRAPHY = {
  fontFamily: "'Filson Pro', sans-serif",
  heading: {
    h1: { fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, lineHeight: 1.2 },
    h2: { fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, lineHeight: 1.2 },
    h3: { fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, lineHeight: 1.2 },
    h4: { fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 600, lineHeight: 1.3 },
  },
  body: {
    large: { fontSize: "clamp(18px, 2vw, 20px)", fontWeight: 400, lineHeight: 1.6 },
    medium: { fontSize: "clamp(16px, 1.5vw, 18px)", fontWeight: 400, lineHeight: 1.6 },
    small: { fontSize: "clamp(14px, 1.2vw, 16px)", fontWeight: 400, lineHeight: 1.5 },
  },
} as const;

// Spacing (using clamp for responsiveness)
export const SPACING = {
  section: {
    padding: "clamp(40px, 6vw, 80px)",
    paddingTop: "clamp(40px, 6vw, 80px)",
    paddingBottom: "clamp(40px, 6vw, 80px)",
  },
  container: {
    paddingX: "clamp(1rem, 3vw, 2rem)",
    paddingY: "clamp(2rem, 4vw, 3.5rem)",
  },
  gap: {
    small: "clamp(0.5rem, 1vw, 1rem)",
    medium: "clamp(1rem, 2vw, 1.5rem)",
    large: "clamp(1.5rem, 3vw, 2.5rem)",
    xlarge: "clamp(2rem, 4vw, 3rem)",
  },
  margin: {
    small: "clamp(0.5rem, 1vw, 1rem)",
    medium: "clamp(1rem, 2vw, 1.5rem)",
    large: "clamp(2rem, 4vw, 3rem)",
    xlarge: "clamp(3rem, 6vw, 5rem)",
  },
} as const;

// Transitions
export const TRANSITIONS = {
  smooth: "0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  smoothSlow: "0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  smoothFast: "0.2s cubic-bezier(0.4, 0, 0.2, 1)",
  buttonFill: "0.85s cubic-bezier(0.645, 0.045, 0.355, 1)",
} as const;

