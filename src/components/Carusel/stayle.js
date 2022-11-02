import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg"

export const Arow = styled(arrow)`
width: 50px;
height: 50px;
padding: 15px;
border-radius: 50% ;
background: rgba(0,0,0,0.4) ;
position: absolute ;
top: 50% ;
transform: ${({ left }) => (left ? "rotate(90deg)" : 'rotate(-90deg)')} ;
left: ${({ left }) => left && '20px'} ;
right: ${({ left }) => !left && '20px'} ;
cursor: pointer ;
:hover{
    opacity: 0.7 ;
}

`
export const Blur = styled.div`
position: absolute ;
top: 0px ;
bottom:  0px ;
right: 0px ;
left: 0px ;
background-color: rgba(0,0,0,0.1) ;
`

export const BoxCenter = styled.div`
position: absolute ;
top: 0px ;
bottom:  0px ;
right: 0px ;
left: 0px ;
display: flex;
align-items: center ;
justify-content: center ;
color: white ;
flex-direction: column ;
>P{
    font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #FFFFF0;
}
`
export const CeterText = styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 44px;
line-height: 48px;
/* identical to box height, or 109% */
letter-spacing: -0.02em;
color: #FFFFF1;
`





export const Container = styled.div`
position: relative;
`

export const BoxImg = styled.div`
>img{
    width: 100% ;
    .img2{
        height:571px;
    }
}
`
