import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Container, QuoteWrapper, Text } from './quoteStyled'
import { useRef } from 'react'
import { useLayoutEffect } from 'react'

const Quote = () => {
  gsap.registerPlugin(ScrollTrigger);
  const QuoteRef = useRef(null);

  useLayoutEffect(()=>{
    let Elem = QuoteRef.current;

    let trigger = ScrollTrigger.create({
      trigger:Elem,
      start:"top top",
      pin:true,
      pinSpacing:false,
      // markers:true,
    });

    return() =>
    {
      if(trigger) trigger.kill();
    }

  })

  return (
    <QuoteWrapper ref={QuoteRef}>
      
     <Container>
      <Text delay="0s"><span>&#8220; You can't connect the dots looking forward;</span></Text>
      <Text delay="0.4s"><span>&nbsp;&nbsp;&nbsp;you can only connect them looking backward.</span></Text>
      <Text delay="0.8s"><span>&nbsp;&nbsp;&nbsp;so you have to trust that the dots</span></Text>
      <Text delay="1.2s"><span>&nbsp;&nbsp;&nbsp;will somehow connect in your future.&#8221;</span></Text>
      <Text delay="1.6s"><span className='name'>&#x23AF;Steve Jobs</span></Text>

     </Container>
      
      </QuoteWrapper>
  )
}


export default Quote