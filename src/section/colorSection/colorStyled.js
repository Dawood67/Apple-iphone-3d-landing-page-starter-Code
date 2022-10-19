import styled from 'styled-components'

export const ColorWrapper = styled.div`

width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-between  ;
align-items: center;




`

export const Left = styled.div`

width: 50%;
height: 100%;
position: relative;
display: flex;
background-color: rgba(155, 181, 206,0.8);

@media screen and (max-width: 48em) {
    width: 100%;
  }


`

export const Right = styled.div`

width: 50%;
height: 100%;
position: relative;
display: flex;  
background-color: rgba(155, 181, 206,0.4);

@media screen and (max-width: 48em) {
    display: none;
  }

`

export const Center = styled.div`

width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  font-size: var(--fontxxl);
  text-transform: uppercase;
  filter: brightness(0.85);

@media screen and (max-width: 48em) {
    top: 2rem;
    transform: translate(-50%, 0%) rotate(0deg);
  }

`