import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  body: {
    backgroundColor: "$loContrast",
    color: "$hiContrast",
    fontFamily: "$sans",
    margin: 0,

    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    height: "calc(100vh-100px)",
  },

  "#__next": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
