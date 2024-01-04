"use client";
import CopyCode from "@features/CopyCode";
import { PlayButton } from "@entities/PlayButton";

import * as Styled from "./index.styled";

const BonusBlock: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Percents variant="h1">300%</Styled.Percents>
      <Styled.BonusLabel variant="h3">WELCOME BONUS</Styled.BonusLabel>
      <CopyCode />
      <PlayButton color="secondary">PLAY NOW</PlayButton>
    </Styled.Container>
  );
};

export default BonusBlock;
