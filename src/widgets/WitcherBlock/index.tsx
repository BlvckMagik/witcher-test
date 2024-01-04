"use client";
import React, { useEffect } from "react";

import { applyParallaxEffect } from "@shared/utils/parallax";
import { BackSparks } from "@entities/BackSparks";
import { Witcher } from "@entities/Witcher";
import { FrontSparks } from "@entities/FrontSparks";
import { Logo } from "@entities/Logo";

import * as Styled from "./index.styled";

const WitcherBlock: React.FC = () => {
  useEffect(() => {
    document.addEventListener("mousemove", applyParallaxEffect);

    return () => {
      document.removeEventListener("mousemove", applyParallaxEffect);
    };
  });

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
