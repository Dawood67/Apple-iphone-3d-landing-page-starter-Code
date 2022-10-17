import styled, { keyframes } from 'styled-components'

export const QuoteWrapper = styled.div`

width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
position: relative;

`

export const Container  = styled.div`

width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: var(--dark);
color: var(--white);

`
export const moveup = keyframes`

100%
{
    transform: translateY(0);
}


`

export const Text = styled.p`
 width: 50%;
  font-size: var(--fontlg);
  position: relative;
  height: var(--fontmd);
  overflow: hidden;

  span 
  {
    position: absolute;
    transform: translateY(3rem);
    font-family: var(--fontL);
    animation-name: ${moveup};
    animation-duration: 2.5s;
    animation-timing-function: ease;
    animation-fill-mode:forwards;
    background-image: linear-gradient(-45deg, var(--gradient));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation-delay: ${props =>  props.delay};
  }

  .name
  {
    text-align: end;
    width: 100%;
    background-image: linear-gradient(-180deg, var(--gradient));
    font-family: var(--fontR);
  }

`