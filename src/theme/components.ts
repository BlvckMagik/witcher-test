import palette from "./palette";

const components = {
  MuiFormControl: {
    defaultProps: {
      focused: false,
    },
    styleOverrides: {
      root: {
        color: palette.primary.main,
        fontSize: "20px",
        zIndex: 6,
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        color: palette.primary.main,
        border: "none",
      },
      input: {
        border: "none",
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      notchedOutline: {
        border: "none",
      },
    },
  },
};

export default components;
