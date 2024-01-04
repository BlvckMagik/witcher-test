"use client";
import { Button as MUIButton } from "@mui/material";
import { styled } from "@mui/system";

export const PlayButton = styled(MUIButton)(({ theme }) => ({
  width: "305px",
  height: "68px",
  fontFamily: "Arial",
  fontSize: "18px",
  fontWeight: 600,
  letterSpacing: 1,
  borderRadius: "35px",
  marginLeft: "4px",
  backgroundColor: theme.palette.primary.main,
  marginTop: "51px",
  zIndex: 6,
  transition: "all 1s",

  ":hover": {
    backgroundColor: theme.palette.primary.contrastText,
    opacity: 1,
  },

  [theme.breakpoints.down("lg")]: {
    marginTop: "30px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "228px",
  },
}));
