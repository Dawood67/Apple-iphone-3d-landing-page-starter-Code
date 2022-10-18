import React from "react";
import { ProcessorWraper, Title, Processors, Text } from "./processorStyled";
import a15 from "../../assets/Images/A15-Bionic.jpg";

const Processor = () => {
  return (
    <ProcessorWraper>
      <Title>Fastest Processor</Title>
      <Processors>
        <img src={a15} />
      </Processors>
      <Text>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nam
          cum fuga repellat quis consectetur? Autem incidunt quidem totam
          repellendus dolores eaque id doloremque provident nobis error! Saepe,
          consequuntur? Iste. repellendus dolores eaque id doloremque provident
          nobis error! Saepe,
        </span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 

        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nam
          cum fuga repellat quis consectetur? Autem incidunt quidem totam
          repellendus dolores eaque id doloremqu.
      
        </span>
      </Text>
    </ProcessorWraper>
  );
};

export default Processor;
