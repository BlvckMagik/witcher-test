"use client";
import React, { useEffect } from "react";

import { applyParallaxEffect } from "@shared/utils/parallax";
import { BackSparks } from "@entities/BackSparks";
import { Witcher } from "@entities/Witcher";
import { FrontSparks } from "@entities/FrontSparks";
import { Logo } from "@entities/Logo";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import * as Styled from "./index.styled";

const WitcherBlock: React.FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (matches) {
      document.addEventListener("deviceorientation", applyParallaxEffect);

      return () => {
        document.removeEventListener("deviceorientation", applyParallaxEffect);
      };
    } else {
      document.addEventListener("deviceorientation", applyParallaxEffect);

      return () => {
        document.removeEventListener("deviceorientation", applyParallaxEffect);
      };
    }
  }, [matches]);

  return (
    <Styled.Container>
      <BackSparks
        className="parallaxItem"
        data-parallax-value={15}
        src="/assets/sparks_back.png"
      />

      <Witcher
        className="parallaxItem"
        data-parallax-value={3}
        src="/assets/witcher.png"
      />
      <FrontSparks
        className="parallaxItem"
        data-parallax-value={-15}
        src="/assets/sparks_front.png"
      />
      <Logo src="/assets/logo.png" />
    </Styled.Container>
  );
};

export default WitcherBlock;
