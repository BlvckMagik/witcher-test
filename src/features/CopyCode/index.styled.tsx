"use client";
import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "2px",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));
