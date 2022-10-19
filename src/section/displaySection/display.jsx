import React from "react";
import gsap from "gsap";
import { useRef, useLayoutEffect } from "react";
import {
  DisplayWrapper,
  MainTitle,
  TextBlockRight,
  Title,
  Text,
  TextBlockLeft,
  TextContainer,
  MovingText,
} from "./displayStyled";

const Display = () => {
  const container = useRef(null);
  const textOne = useRef(null);
  const textTwo = useRef(null);

  useLayoutEffect(() => {
    let t1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top-=500 top",
          end: "bottom top",
          scrub: true,
        },
      })
      .fromTo(textOne.current, { x: "0" }, { x: "-20%" })
      .fromTo(textTwo.current, { x: "0" }, { x: "20%" });

    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <DisplayWrapper>
      <MainTitle>
        Immersive
        <br />
        Display
      </MainTitle>

      <TextBlockRight>
        <Title>Super Ratina XDR Display</Title>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A nostrum
          explicabo cumque A nostrum explicabo cumque.
        </Text>
      </TextBlockRight>

      <TextBlockLeft ref={container}>
        <Title>Big is better</Title>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A nostrum
          explicabo cumque A nostrum explicabo cumque.
        </Text>
      </TextBlockLeft>

      <TextContainer>
        <MovingText ref={textOne}>Tougher than ever!</MovingText>
        <MovingText ref={textTwo}>Every touch matters.</MovingText>
      </TextContainer>
    </DisplayWrapper>
  );
};

export default Display;
