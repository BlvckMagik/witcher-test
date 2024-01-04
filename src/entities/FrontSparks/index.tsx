"use client";
import { styled } from "@mui/system";

export const FrontSparks = styled("img")(({ theme }) => ({
  height: "636px",
  zIndex: 3,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  position: "absolute",
  bottom: 0,
  left: "-426px",
  willChange: "transform",
  transition: "height 1s",

  [theme.breakpoints.down("lg")]: {
    height: "476px",
  },

  [theme.breakpoints.down("sm")]: {
    height: "276px",
  },
}));
