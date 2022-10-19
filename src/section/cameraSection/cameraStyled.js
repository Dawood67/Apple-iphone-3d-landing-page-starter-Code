import styled from 'styled-components'

export const CameraWrapper = styled.div`

width: 100vw;
min-height: 100vh;
position: relative;
z-index: 1;
overflow: hidden;
background-color: var(--white);

`

export const V1 = styled.video`

width: 100%;
height: 100vh;
position: absolute;
z-index: 2;
object-fit: cover;
object-position: bottom;
top: 0;
left: 0;


`

export const V2 = styled.video`

width: 60%;
height: auto;
position: absolute;
z-index: 1;
object-fit: cover;
object-position: bottom;
top: 0;
right: 40%;

@media screen and (max-width: 30em) {
    width: 100%;
    right: 0;
    top: 10%;
  }
`

export const TitleContainer = styled.div`

width: 50%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
top: 0;
right: 0;


&>*:nth-child(2)
{
    margin-left: 6rem;
}

&>*:nth-child(3)
{
    margin-left: 10rem;
}

@media screen and (max-width: 48em) {
    top: 60%;
    right: 2rem;
  }
  @media screen and (max-width: 40em) {
    right: 5rem;
  }
  @media screen and (max-width: 30em) {
    top: 70%;
    right: 40%;
  }

`

export const Title = styled.h1`

font-size:var(--fontBig);
z-index: 5;
text-transform: capitalize;

@media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }
  @media screen and (max-width: 48em) {
    font-size: var(--fontxxl);
  }

`