import { css, keyframes } from "./stitches.config";

const scaleIn = keyframes({
  "0%": { opacity: 0, transform: "scale(0.5)" },
  "100%": { opacity: 1, transform: "scale(1)" },
});

export const tooltipContent = css({
  fontSize: "$2",
  fontWeight: 600,
  lineHeight: 1,
  py: "$2",
  px: "$3",
  borderRadius: "$3",
  backgroundColor: "$crimson4",
  transformOrigin: "var(--radix-tooltip-content-transform-origin)",
  animation: `${scaleIn} 320ms cubic-bezier(0.16, 1, 0.3, 1)`,
});
