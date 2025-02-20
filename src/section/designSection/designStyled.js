import styled from 'styled-components'

export const DesignWrapper = styled.div`

width: 100vw;
min-height: 100vh;
position: relative;

display: flex;
justify-content:flex-end;
align-items: center;
flex-direction: column;

background-color: var(--white);
overflow: hidden;
`

export const TextContainer = styled.div`
width: 100%;
min-height: 50vh;
z-index: 1;

display: flex;
justify-content: center;
align-items: flex-start;
color: var(--dark);
flex-direction: column;

span 
{
    font-size: var(--fontBig);
    text-transform: capitalize;
    font-weight: 600;
    width: 90%;

}

@media screen and (max-width: 70em) {
    span {
      font-size: var(--fontxxxl);
    }
  }
  @media screen and (max-width: 64em) {
    span {
      font-size: var(--fontxxl);
    }
  }
  @media screen and (max-width: 48em) {
    span {
      font-size: var(--fontlg);
    }
  }


`

export const TextContainer2 = styled.div`
width: 100%;
min-height: 50vh;
/* z-index: 1; */

display: flex;
justify-content: center;
align-items: flex-end;
color: var(--dark);
flex-direction: column;

span 
{
    font-size: var(--fontxxxl);
    text-transform: capitalize;
    font-weight: 600;
    width: 80%;
    align-self: flex-end;
    

}

@media screen and (max-width: 70em) {
    span {
      font-size: var(--fontxxl);
    }
  }
  @media screen and (max-width: 64em) {
    span {
      font-size: var(--fontxl);
    }
  }
  @media screen and (max-width: 48em) {
    span {
      font-size: var(--fontlg);
    }
  }


`