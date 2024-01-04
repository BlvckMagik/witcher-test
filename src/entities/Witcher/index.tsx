"use client";
import { styled } from "@mui/system";

export const Witcher = styled("img")(({ theme }) => ({
  zIndex: 2,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  aspectRatio: "1032 / 1079",
  height: "calc(100vh - 1px)",
  position: "absolute",
  bottom: 0,
  left: "-405px",
  willChange: "transform",
  transition: "height 1s",

  [theme.breakpoints.down("lg")]: {
    height: "710px",
  },

  [theme.breakpoints.down("sm")]: {
    height: "500px",
    transition: "all 1s",
  },
}));
