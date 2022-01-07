import { css } from "./stitches.config";

export const toolbar = css({
  display: "flex",
  alignItems: "center",
  minWidth: "fit-content",
  flexDirection: "row",
  gap: "$1",
});

export const itemStyles = css({
  all: "unset",
  flex: "0 0 auto",
  color: "$hiContrast",
  height: "$7",
  borderRadius: "$3",
  display: "inline-flex",
  fontSize: "$3",
  lineHeight: 1,
  alignItems: "center",
  justifyContent: "center",
  transition: "all 100ms",
  "&:hover": {
    backgroundImage:
      "linear-gradient(25deg, #FA3CF9 1.7%, #FC587E 50.85%, #FC3239 99.99%)",
    ".light-theme &": { color: "$loContrast" },
  },
  "&:focus": { position: "relative", boxShadow: `0 0 0 2px $colors$crimson7` },
});

export const toolbarButton = css(itemStyles, {
  minWidth: "$7",
  backgroundColor: "transparent",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": { backgroundColor: "transparent", cursor: "pointer" },
  "&:active": { transform: "scale(0.85)" },
  variants: {
    active: {
      true: {
        color: "$loContrast",
        backgroundImage: "linear-gradient(120deg, $slate11, $slate12)",
      },
    },
  },
});

export const toolbarLink = css(itemStyles, {
  width: "$7",
  backgroundColor: "transparent",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  color: "$hiContrast",
  "&:hover": {
    backgroundColor: "transparent",
    cursor: "pointer",
    color: "$hiContrast",
  },
  "&:active": { transform: "scale(0.85)" },

  variants: {
    active: {
      true: {
        color: "$loContrast",
        backgroundImage:
          "linear-gradient(-33deg, #DAFEFD 5%, #FDFDB3 50%, #FCDAAB)",
        ".light-theme &": { color: "$loContrast" },
      },
    },
  },
});

export const toggleGroup = css({
  display: "inline-flex",
  borderRadius: "$3",
  // backgroundImage: 'linear-gradient(-33deg, $mauve2 5%, $mauve1 50%, $mauve3)',
  background: "$mauve3",
  height: "$7",
  padding: "0 $1",
  alignItems: "center",
  "&:hover, &:focus-within": { background: "$mauve3" },
});

export const toggleItem = css(itemStyles, {
  width: "$6",
  height: "$6",
  boxShadow: 0,
  borderRadius: "$2",
  ml: "$1",
  "&:first-child": { marginLeft: 0 },
  // bug when composing tooltip and toggle item
  // '&[data-state=on]': { backgroundColor: '$mauve8', color: '$hiContrast' },
  "&[aria-pressed=true]": { backgroundColor: "$mauve8", color: "$hiContrast" },
  "&[aria-pressed=false]": { color: "$hiContrast" },
  "&[aria-pressed=false] :hover": { color: "$hiContrast" },
  "&:active": { transform: "scale(0.85)" },
});

export const toolbarSeparator = css({
  width: 1,
  height: "$3",
  mx: "$1",
  backgroundColor: "$mauve6",
});
