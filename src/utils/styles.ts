/**
 * Shared Style Utilities
 * Reusable style objects for consistent styling
 */

import { COLORS, TYPOGRAPHY } from "../constants";

// Heading Styles
export const headingStyles = {
  h1: {
    ...TYPOGRAPHY.heading.h1,
    color: COLORS.darkNavy,
    fontFamily: TYPOGRAPHY.fontFamily,
  },
  h2: {
    ...TYPOGRAPHY.heading.h2,
    color: COLORS.darkNavy,
    fontFamily: TYPOGRAPHY.fontFamily,
  },
  h3: {
    ...TYPOGRAPHY.heading.h3,
    color: COLORS.darkNavy,
    fontFamily: TYPOGRAPHY.fontFamily,
  },
  h4: {
    ...TYPOGRAPHY.heading.h4,
    color: COLORS.darkNavy,
    fontFamily: TYPOGRAPHY.fontFamily,
  },
};

// Body Text Styles
export const bodyStyles = {
  large: {
    ...TYPOGRAPHY.body.large,
    color: COLORS.darkNavy,
    fontFamily: TYPOGRAPHY.fontFamily,
  },
  medium: {
    ...TYPOGRAPHY.body.medium,
    color: COLORS.neutral600,
    fontFamily: TYPOGRAPHY.fontFamily,
  },
  small: {
    ...TYPOGRAPHY.body.small,
    color: COLORS.neutral500,
    fontFamily: TYPOGRAPHY.fontFamily,
  },
};
