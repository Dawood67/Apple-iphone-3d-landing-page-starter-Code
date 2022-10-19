import styled from 'styled-components'

export const Container = styled.div`
width: 100vw;
height: 100vh;
z-index: 1;
overflow: hidden;
background-color: var(--white);
position: relative;

`

export const PricingWrapper = styled.div`

width: 100vw;
height: 100vh;
z-index: 1;
background-color:#9BB5CE;
position: relative;

`

export const Phone = styled.div`

width: 100%;
height: 70%;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
position: relative;
cursor: grab;
`

export const Colors = styled.ul`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: absolute;
top: 50%;
left: 35%;
transform: translate(-50%, -50%);

@media screen and (max-width: 64em) {
    left: 10%;
  }

`

export const Color = styled.li`

list-style: none;
width: 1.5rem;
height: 1.5rem;
cursor: pointer;
border-radius: 50%;
background-color: ${props=> props.color};
border: 1px solid var(--dark);
margin: 0.5rem 0;

/* @media screen and (max-width: 64em) {
    left: 10%;
  } */
`

export const Details = styled.div`

width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`

export const Subtitle = styled.h2`

font-size: var(--fontmd);
font-family: var(--fontR);

`
export const Title = styled.h2`

font-size: var(--fontxl);
padding: 0.3rem;

`

export const ButtonContainer = styled.div`

display: flex;
justify-content: center;
align-items: center;
padding-top: 1rem;

`

export const Btn = styled.button`

display: flex;
justify-content: center;
align-items: center;

padding: 0.4rem 1rem;
margin: 0;
border-radius: 50px;

border: none;
outline: none;

background-color: var(--blue);
color: var(--white);
cursor: pointer;

&:hover
{
    opacity: 0.7;
}

`

export const Btnlink = styled.a`

color: var(--blue);
text-decoration: none;
margin-left: 1.5rem;

&:hover
{
    text-decoration: underline;
}

`

export const IndicatorText = styled.div`

position: absolute;
top: 1rem;
font-size:var(--fontsm);

`