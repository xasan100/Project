import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg"
import { ReactComponent as message } from "../../assets/icons/cardMassage.svg"
import { ReactComponent as home } from "../../assets/icons/cardHouse.svg"
import { ReactComponent as Maps } from "../../assets/icons/cardMaps.svg"
import { ReactComponent as calculator } from '../../assets/icons/calculator.svg';





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
/* identical to box height, or 150% */


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






// export const Container = styled.div`
// position: relative;
// padding: 96px 130px ;
// display: flex ;
// flex-direction: column ;
// `

export const BoxImg = styled.div`
`


// bndms,a.

export const Block = styled.div`
    width: 100% !important;
    padding: var(--padding);
    border: 1px solid red;

    >h1{
        font-size: 45px ;
        text-align: center ;
        margin: 50px 0px ;
        display: grid;
    }
`

export const Card = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px 0px ;



>img{
    width: 300px  ;
    height: 281px ;
    margin: 0 auto ;
    cursor: pointer ;
    overflow: hidden;
        :hover{

}
}
`



const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: auto;
  width: 100%;
  background: #F5F7FC;
  align-items: center  ;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
  margin-bottom: 32px;
  width: 100% ;
  text-align: center ;
  padding: 48px 0px ;
  >div{
    margin-top:20px ;
  }

`;
const Wrapper = styled.div`
  display: flex;
  align-items:  center;
  justify-content: space-between ;
  margin-top: 40px;
  /* height: 434px ; */
  width: 100%;
  padding: var(--padding);
  max-width: 1440px ;



`;

const Icons = styled.div`
`
Icons.Message = styled(message)`
cursor: pointer;
& path {
    fill: #0061DF;
}

`

Icons.Home = styled(home)`
cursor: pointer;
`
Icons.Calculator = styled(calculator)`
cursor: pointer;
`
Icons.Maps = styled(Maps)`
cursor: pointer;    
 `



export { Container, Content, Wrapper, Icons };