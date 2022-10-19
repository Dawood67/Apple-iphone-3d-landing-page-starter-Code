import styled, { keyframes } from "styled-components";

export const ProcessorWraper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--dark);
  overflow: hidden;
  position: relative;
  color: var(--white);
`;

export const Title = styled.h1`
  width: 100%;
  font-size: var(--fontBig);
  font-family: var(--fontL);
  z-index: 1;
  /* left: 50%; */
  position: absolute;
  text-align: center;
  /* transform: translate(-50%); */
  bottom: 2rem;
  background-image: linear-gradient(90deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }
  @media screen and (max-width: 64em) {
    font-size: var(--fontxxl);
  }
  @media screen and (max-width: 48em) {
    font-size: var(--fontxl);
  }
`
export const glow = keyframes`

0%
{
    box-shadow:1px 1px 10px var(--white);
}

50%
{
    box-shadow:2px 2px 25px var(--white);
}

100%
{
    box-shadow:1px 1px 10px var(--white);
}

`



export const Processors = styled.div`
width: 25%;
position: absolute;
display: flex;
justify-content: center;
align-items:center ;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
animation: ${glow} 3s ease infinite;
padding: 0.5rem;

img 
{
    width: 100%;
    height: auto;
}

@media screen and (max-width: 48em) {
    display: none;
  }

`

export const Text = styled.div`

width: 30%;
min-height: 40vh;
display: flex;
flex-direction: column;
justify-content: center;
font-size: var(--fontxs);
color: var(--greyLight);

span 
{
    margin: 0.2rem 0;
    padding-left: 2rem;
}

@media screen and (max-width: 64em) {
    width: 50%;
  }
  @media screen and (max-width: 48em) {
    width: 100%;
    font-size: var(--fontxxs);
    span {
      width: 40%;
      padding-left: 1rem;
     
    }
    & > *:last-child {
      align-self: flex-end;
      padding-left: 0;
      padding-right: 2rem;
      text-align: right;
    }
  }

`





