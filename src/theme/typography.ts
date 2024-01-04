import type { TypographyOptions } from "@mui/material/styles/createTypography";
import palette from "./palette";

const typography: TypographyOptions = {
  fontFamily: [
    "Cambria",
    '"customCambria"',
    "Inter",
    "Arial",
    "sans-serif",
  ].join(","),
  fontSize: 13,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    color: palette.secondary.main,
    fontSize: "176px",
    lineHeight: "140px",
    fontWeight: 600,
  },
  h3: {
    color: palette.secondary.main,
    fontSize: "57px",
    lineHeight: "92.92px",
    fontWeight: 600,
  },
  body1: {
    fontSize: 13,
  },
  button: {
    textTransform: "none",
  },
};

export default typography;
