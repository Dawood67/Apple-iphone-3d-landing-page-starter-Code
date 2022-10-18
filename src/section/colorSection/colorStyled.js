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



`

export const Right = styled.div`

width: 50%;
min-height: 100%;
position: relative;
display: flex;  
background-color: rgba(155, 181, 206,0.4);

`

export const Center = styled.div`

width: 100%;
position: absolute;
text-align: center;
font-size: var(--fontxxl);
transform: rotate(-90deg);
text-transform: uppercase;
filter: brightness(0.8);

`