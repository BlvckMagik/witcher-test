import { styled } from "@mui/system";

export const Container = styled("section")(({ theme }) => ({
  display: "flex",
  position: "relative",

  [theme.breakpoints.down("md")]: {
    height: "462px",
    left: "26px",
  },

  [theme.breakpoints.down("sm")]: {
    left: "144px",
  },
}));
