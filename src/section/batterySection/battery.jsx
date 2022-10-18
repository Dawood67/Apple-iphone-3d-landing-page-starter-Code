import gsap from "gsap";
import React from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import { BatteryWrapper, Title, Batterys } from "./batteryStyled";

const Battery = () => {

    const battery = useRef(null);
    let elements  = gsap.utils.selector(battery);

    useLayoutEffect(() => {
      let t1= gsap.timeline({});

      elements("li").forEach(el => {
        t1.to(el,
            {
                scrollTrigger:{
                    trigger:el,
                    start:"top center",
                    end:"bottom center",
                    scrub:true,
                    // markers:true
                },opacity:1,
            })
      })
    
      return () => {
        
      };
    }, [])


  return (
    <BatteryWrapper id="battery">
      <Title>Go all day with single charge...</Title>
      <Batterys ref={battery}>
        <li />
        <li />
        <li />
        <li />
        <li />
      </Batterys>
    </BatteryWrapper>
  );
};

export default Battery;
