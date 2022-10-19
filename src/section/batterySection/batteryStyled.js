import styled from 'styled-components'

export const BatteryWrapper = styled.div`

width: 100vw;
min-height: 100vh;
display: flex;

justify-content: end;
align-items: center;
position: relative;
background-color: var(--white);
overflow: hidden;


`

export const Title = styled.h1`
font-size: var(--fontBig);
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
text-transform: uppercase;
z-index: 1;

@media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }
  @media screen and (max-width: 64em) {
    font-size: var(--fontxxl);
  }
  @media screen and (max-width: 48em) {
    font-size: var(--fontlg);
    transform: none;
    left: 2rem;
    top: 2rem;
    width: 50%;
  }
`

export const Batterys = styled.ul`
position: absolute;
right: 4rem;
list-style: none;
background-color: var(--white);
border: 3px solid var(--dark);
border-radius: 8px;
padding: 0.5rem;
width: 15rem;

li 
{
    width: 100%;
    height: 5rem;
    background-color: var(--dark);
    background-image: linear-gradient(-90deg, var(--gradient));
    opacity: 0;
   
}

&>*:not(:first-child):not(:last-child)
{
    margin: 0.5rem 0;
}

@media screen and (max-width: 48em) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

`