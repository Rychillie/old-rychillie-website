import { css, keyframes } from "./stitches.config";

const scaleIn = keyframes({
  "0%": { opacity: 0, transform: "scale(0.5)" },
  "100%": { opacity: 1, transform: "scale(1)" },
});

export const dropdownContent = css({
  minWidth: 160,
  fontSize: "$2",
  fontWeight: 600,
  lineHeight: 1,
  py: "$1",
  px: "$1",
  borderRadius: "$3",
  backgroundColor: "$crimson4",
  transformOrigin: "var(--radix-dropdown-menu-content-transform-origin)",
  animation: `${scaleIn} 320ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

export const dropdownItem = css({
  display: "flex",
  gap: "$2",
  alignItems: "center",
  fontSize: "$2",
  textAlign: "left",
  fontWeight: 600,
  lineHeight: 1,
  height: "$6",
  padding: "0 $3 0 $2",
  borderRadius: "$2",
  cursor: "default",
  "&:focus": {
    outline: "none",
    backgroundColor: "$loContrast",
    color: "$hiContrast",
  },
});
