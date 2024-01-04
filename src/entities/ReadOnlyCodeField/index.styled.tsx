"use client";
import { TextField as MUITextField } from "@mui/material";
import { styled } from "@mui/system";

export const TextField = styled(MUITextField)(({ theme }) => ({
  border: "#464646 1px dashed",
  borderRight: "#464646 1px solid",
  borderTopLeftRadius: "33.5px",
  borderBottomLeftRadius: "33.5px",
  height: "67px",
  width: "228px",

  [theme.breakpoints.down("sm")]: {
    border: "#464646 1px dashed",
    borderBottom: "#464646 1px solid",
    borderTopRightRadius: "33.5px",
    borderBottomLeftRadius: 0,
  },

  ".MuiInputBase-root": {
    height: "67px",
    width: "228px",

    ".MuiInputBase-input": {
      width: "228px",
      fontFamily: "Arial",
      fontSize: "33px",
      letterSpacing: 4,
      lineHeight: "67px",
      height: "67px",
      paddingRight: "0",
      paddingLeft: "28px",
    },
  },
}));
