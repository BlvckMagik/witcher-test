"use client";
import { styled } from "@mui/system";

export const Page = styled("main")(({ theme }) => ({
  minHeight: "100vh",
  minWidth: "100vw",
  background: `url("assets/background.png") no-repeat center center fixed`,
  backgroundSize: "cover",
  overflow: "hidden",
  display: "flex",
  justifyContent: "space-between",
  padding: "0 30.1vw",
  gap: "26.2vw",

  [theme.breakpoints.down("md")]: {
    background: `url("assets/background-mobile.png") no-repeat center center`,
    backgroundSize: "cover",
    flexDirection: "column-reverse",
    alignItems: "center",
  },
}));
