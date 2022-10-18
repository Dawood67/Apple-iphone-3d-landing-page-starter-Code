import React, { useRef } from 'react'
import gsap from 'gsap';
import { useThree } from '@react-three/fiber'
import { useLayoutEffect } from 'react';
import { DesignWrapper, TextContainer, TextContainer2 } from './designStyled'

const Design = () => {

  const container = useRef(null);
  const textOne = useRef(null);
  const textTwo = useRef(null);

  useLayoutEffect(() => {
    let t1 = gsap.timeline({
      scrollTrigger:{
        trigger:container.current,
        start:"top-=500 top",
        end:"bottom top",
        // markers:true,
        scrub:true
      }
    }).fromTo(textOne.current, {x:0}, {x:"10%"} ). fromTo(textTwo.current, {x:0}, {x:"-10%"})
  
    return () => {
      if (t1) t1.kill();
    };
  }, [])
  



  return (
    <DesignWrapper ref={container}>
      <TextContainer ref={textOne}><span>Flaw-less with strong durability.</span></TextContainer>
   <TextContainer2 ref={textTwo}> <span>Flaw-edge  design with toughest smartphone glass.</span>
</TextContainer2>
  
      
      
      </DesignWrapper>
  )
}

export default Design