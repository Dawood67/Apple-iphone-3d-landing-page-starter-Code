import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect } from "react";
import { Model3 } from "../../components/Scene3";
import { useGLTF } from "@react-three/drei";
import {
  PricingWrapper,
  Phone,
  Colors,
  Color,
  Container,
  Details,
  Subtitle,
  Title,
  ButtonContainer,
  Btn,
  Btnlink,
  IndicatorText
} from "./pricingStyled";
import { useRef } from "react";
import { useContext } from "react";
import { ColorContext } from "../../context/colorContext";

const Pricing = () => {
  const { materials } = useGLTF("/scene.gltf");
  const sectionRef = useRef(null);

  const {currentColor,changeColorContext} = useContext(ColorContext);

  useEffect(() => {
    sectionRef.current.style.backgroundColor = `rgba(${currentColor.rgbColor}, 0.4)`;
  }, [currentColor])
  


  let updateColor = (color,text, rgbColor) => {
    // materials.Body.color.set(color);
    const colorObj = {
      color,
      text,
      rgbColor
    }

    changeColorContext(colorObj)

    // sectionRef.current.style.backgroundColor = `rgba(${currentColor.rgbColor}, 0.4)`;
  };

  return (
    <Container>
      <PricingWrapper ref={sectionRef}>
        <Phone>
            <IndicatorText>360&deg; &#x27F2;</IndicatorText>
          <Canvas camera={{ fov: 14 }}>
            <ambientLight intensity={1} />
            <directionalLight intensity={0.4} />
            <Suspense fallback={null}>
              <Model3 />
            </Suspense>
            <Environment preset="night" />
            <OrbitControls enableZoom={false} />
          </Canvas>

          <Colors>
            <Color
              color="#9BB5CE"
              onClick={() => updateColor("#9BB5CE", "Sierra Blue", "155, 181, 206")}
            />
            <Color
              color="#F9E5C9"
              onClick={() => updateColor("#F9E5C9", "Gold", "249, 229, 201")}
            />
            <Color
              color="#505F4E"
              onClick={() => updateColor("#505F4E", "Alpine Green", "80, 95, 78")}
            />
            <Color
              color="#574f6f"
              onClick={() => updateColor("#574f6f", "Deep Purple", "87, 79, 111")}
            />
            <Color
              color="#A50011"
              onClick={() => updateColor("#A50011", "Red", "165, 0, 17")}
            />
            <Color
              color="#215E7C"
              onClick={() => updateColor("#215E7C", "Blue", "33, 94, 124")}
            />
          </Colors>
        </Phone>

        <Details>
          <Subtitle>iphone</Subtitle>
          <Title>14 Pro Max</Title>
          <Subtitle>From $1099*</Subtitle>
        </Details>

        <ButtonContainer>
            <Btn>Buy</Btn>
            <Btnlink href="#">Learn More &#x2192;</Btnlink>
        </ButtonContainer>
      </PricingWrapper>
    </Container>
  );
};

export default Pricing;
