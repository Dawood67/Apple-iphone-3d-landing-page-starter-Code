import styled from "styled-components";

export const DisplayWrapper = styled.div`
  width: 100vw;
  min-height: 200vh;

  position: relative;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  background-color: var(--dark);
  color: var(--white);

  &>*:nth-child(even)
  {
    align-self: flex-end;
    margin-right: 4rem;
    text-align: right;

    @media screen and (max-width: 48em) {
      margin-right: 1rem;
    }
  }

  &>*:nth-child(odd)
  {
    margin-left: 4rem;

    @media screen and (max-width: 48em) {
      margin-left: 1rem;
    }
    
  }
`;

export const MainTitle = styled.h1`
  font-size: var(--fontBig);
  font-family: var(--fontL);

  background-image: linear-gradient(-45deg, var(--gradient));
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
  @media screen and (max-width: 40em) {
    font-size: var(--fontlg);
  }
`;

export const TextBlockRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
`;

export const TextBlockLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`;

export const Title = styled.div`
  font-size: var(--fontlg);
  margin-bottom: 1rem;

  @media screen and (max-width: 64em) {
    font-size: var(--fontmd);
  }

  @media screen and (max-width: 48em){
    padding-right: 1rem;
  }
`;
export const Text = styled.div`
  font-size: var(--fontxs);
  margin-bottom: 0.5rem;
  color: var(--graylight);
  width: 55%;

  @media screen and (max-width: 64em) {
    width: 70%;
  }
  @media screen and (max-width: 48em) {
    width: 100%;
    font-size: var(--fontxxs);
    padding-right: 1rem;
  }
`;

export const TextContainer = styled.div`
width: 100vw;
display: flex;
justify-content:center;
align-items: center;
transform: rotate(-25deg);
flex-direction: column;
margin-bottom: 4rem;
z-index: 1;

`

export const MovingText = styled.h1`
 font-size: var(--fontBig);
  font-family: var(--fontL);

  background-image: linear-gradient(-45deg, var(--gradient));
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
  @media screen and (max-width: 40em) {
    font-size: var(--fontlg);
  }
  @media screen and (max-width: 30em) {
    font-size: var(--fontmd);
  }
`
