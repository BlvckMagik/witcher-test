"use client";
import { styled } from "@mui/system";

export const BackSparks = styled("img")(({ theme }) => ({
  zIndex: 1,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  height: "99.3vh",
  position: "absolute",
  bottom: 0,
  left: "-428px",
  willChange: "transform",
  transition: "height height 1s",

  [theme.breakpoints.down("lg")]: {
    height: "705px",
  },

  [theme.breakpoints.down("sm")]: {
    height: "505px",
    transition: "all 1s",
  },
}));
