import React, { useLayoutEffect } from "react";
import { CameraWrapper, V1, V2, TitleContainer, Title } from "./cameraStyled";
import v1 from "../../assets/video/Scuba Diving - 699.mp4";
import v2 from "../../assets/video/Skate - 49791.mp4";
import { useRef } from "react";
import gsap from "gsap";

const Camera = () => {
  const sectionRef = useRef(null);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const titleRef = useRef(null);

  let elements = gsap.utils.selector(titleRef)

  useLayoutEffect(() => {
    const Elem = sectionRef.current;
    const video1Elem = videoRef1.current;
    const video2Elem = videoRef2.current;

    //pin the section
    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: "top top",
        end: "bottom+=500 bottom",
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });

    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: Elem,
          start: "top top",
          end: "bottom+=500 bottom",
          scrub: true,
        },
      })
      .to(video1Elem, { scale: 0.3 }, "key1")
      .to(video2Elem, { scale: 0.6 }, "key1");

      elements("h1").forEach(eL =>{
        t2.fromTo(
            eL,
            {
                scrollTrigger: {
                    trigger: Elem,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                  },
                  x:100,
                  opacity:0,
            },
            {
                x:0,
                  opacity:1,
            }
        )
      })

    return () => {};
  }, []);

  return (
    <CameraWrapper ref={sectionRef}>
      <V1 ref={videoRef1} src={v1} type="video/mp4" autoPlay muted loop />
      <V2 ref={videoRef2} src={v2} type="video/mp4" autoPlay muted loop />

      <TitleContainer ref={titleRef }>
        <Title>Ready.</Title>
        <Title>Steady.</Title>
        <Title>Action.</Title>
      </TitleContainer>
    </CameraWrapper>
  );
};

export default Camera;
