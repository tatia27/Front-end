import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

/* ---------- расширение палитры ---------- */
declare module "@mui/material/styles" {
  interface Palette {
    button: Palette["primary"];
  }

  interface PaletteOptions {
    button?: PaletteOptions["primary"];
  }
}

/* ---------- расширение props кнопки ---------- */
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    button: true;
  }
}

/* ---------- тема ---------- */
const buttonTheme = createTheme({
  palette: {
    button: {
      main: "#3794FE",
      light: "#27AA9A",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
          textTransform: "none",
        },
        contained: {
          fontSize: "22px",
          //   padding: "15px 72px",
          color: "#ffffff",
          backgroundColor: "#3794FE",
          "&:hover": {
            backgroundColor: "#4a8cd8",
          },
        },
        outlined: {
          color: "#35373B",
          border: "1px solid #35373B",
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "button", size: "large" },
          style: {
            padding: "16px 20px",
            fontSize: "18px",
            borderRadius: "30px",
          },
        },
        {
          props: { variant: "contained", color: "button", size: "small" },
          style: {
            padding: "12px 24px",
            fontSize: "14px",
            borderRadius: "30px",
          },
        },

        {
          props: { variant: "outlined", color: "button", size: "small" },
          style: {
            padding: "12px 36px",
            fontSize: "14px",
            borderRadius: "30px",
          },
        },
      ],
    },
  },
});

/* ---------- компонент ---------- */
type ContainedButtonProps = ButtonProps;

export const CustomButton = ({ children, ...props }: ContainedButtonProps) => {
  return (
    <ThemeProvider theme={buttonTheme}>
      <Button variant="contained" color="button" {...props}>
        {children}
      </Button>
    </ThemeProvider>
  );
};
