"use client";
import { Button as MUIButton } from "@mui/material";
import { styled } from "@mui/system";

export const Button = styled(MUIButton)(({ theme }) => ({
  borderRadius: 0,
  border: "#464646 1px dashed",
  borderLeft: "none",
  borderTopRightRadius: "33.5px",
  borderBottomRightRadius: "33.5px",
  height: "67px",
  width: "166px",
  color: theme.palette.secondary.main,
  fontFamily: "Arial",
  fontSize: "14.5px",
  letterSpacing: 2,
  zIndex: 6,

  [theme.breakpoints.down("sm")]: {
    border: "#464646 1px dashed",
    borderTop: "none",
    borderTopRightRadius: 0,
    borderBottomRightRadius: "33.5px",
    borderBottomLeftRadius: "33.5px",
    width: "228px",
  },
}));
