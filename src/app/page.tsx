import "normalize.css/normalize.css";
import { CssBaseline, ThemeProvider } from "@mui/material";

import WitcherBlock from "@widgets/WitcherBlock";
import BonusBlock from "@widgets/BonusBlock";
import theme from "@theme";

import * as Styled from "./page.styled";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Styled.Page>
        <WitcherBlock />
        <BonusBlock />
      </Styled.Page>
    </ThemeProvider>
  );
}
