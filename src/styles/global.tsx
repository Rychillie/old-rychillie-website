import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  html: {
    height: "-webkit-fill-available",
    width: "100%",
  },
  body: {
    backgroundColor: "$loContrast",
    color: "$hiContrast",
    fontFamily: "$sans",
    margin: 0,

    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    height: "-webkit-fill-available",
    position: "relative",
    paddingBottom: "env(safe-area-inset-bottom)",
  },

  "#__next": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: "-webkit-fill-available",
    height: "100%",
    flex: 1,
  },

  "*": {
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
  },

  ul: {
    paddingLeft: "$4",
  },

  figure: { margin: 0 },

  "pre, code": { margin: 0, fontFamily: "$mono" },

  svg: { display: "inline-block", verticalAlign: "middle" },

  "::selection": {
    backgroundColor: "$mauve9",
    color: "$loContrast",
    WebkitTextFillColor: "$colors$loContrast",
  },
});
