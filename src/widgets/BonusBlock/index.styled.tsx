"use client";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Container = styled("section")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "24.5vh",

  [theme.breakpoints.down("md")]: {
    paddingTop: "30px",
    paddingBottom: "100px",
  },

  [theme.breakpoints.down("sm")]: {
    paddingBottom: "20px",
  },
}));

export const Percents = styled(Typography)(({ theme }) => ({
  transition: "all 1s",

  [theme.breakpoints.down("lg")]: {
    fontSize: "126px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "76px",
    lineHeight: "80px",
  },
}));

export const Terms = styled(Typography)(({ theme }) => ({
  color: "#464646",
  fontFamily: "Arial",
  fontSize: "13px",
  fontWeight: 600,
  position: "absolute",
  bottom: "46px",
  right: "-143px",

  [theme.breakpoints.down("lg")]: {
    position: "static",
    marginTop: "10px",
  },
}));

export const BonusLabel = styled(Typography)(({ theme }) => ({
  marginLeft: "5px",
  marginBottom: "25px",
  transition: "all 1s",

  [theme.breakpoints.down("lg")]: {
    fontSize: "37px",
    lineHeight: "60px",
    marginBottom: "15px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "26px",
    lineHeight: "30px",
  },
}));
