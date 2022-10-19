import React from "react";
import {
  HeroWrapper,
  Title,
  Text,
  TextContainer,
  VideoConatiner,
} from "./heroStyled";
import backgroundVideo from "../../assets/video/Ink - 21536.mp4";

const MainHero = () => {
  return (
    <HeroWrapper>
      <VideoConatiner>
        {" "}
        <video src={backgroundVideo} type="video/mp4" autoPlay muted loop />
      </VideoConatiner>

      <Title>iPhone 14 Pro Max</Title>
      <TextContainer>
        <span>So.Cold.</span>
        <span>So.Bold.</span>
      </TextContainer>
    </HeroWrapper>
  );
};

export default MainHero;
