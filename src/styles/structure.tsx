import { css } from "./stitches.config";

export const Container = css("div", {
  width: "100%",
  maxWidth: "100%",
  padding: "0 $4",
  margin: "0 auto",
  "@bp3": {
    maxWidth: "960px",
  },
  "@bp4": {
    maxWidth: "1045px",
  },
});

export const Row = css("div", {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
});

export const Column = css("div", {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
});
