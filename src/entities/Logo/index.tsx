"use client";
import { styled } from "@mui/system";

export const Logo = styled("img")(({ theme }) => ({
  height: "50.5px",
  zIndex: 4,
  position: "absolute",
  bottom: "50px",
  left: "-368.5px",
  willChange: "transform",
  transition: "all 1s",

  [theme.breakpoints.down("lg")]: {
    left: "10%",
  },

  [theme.breakpoints.down("sm")]: {
    left: "-212px",
    height: "40px",
  },
}));
