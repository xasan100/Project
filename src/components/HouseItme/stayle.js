import styled from "styled-components";
import { ReactComponent as share } from "../../assets/icons/sharee.svg"
import { ReactComponent as love } from "../../assets/icons/share.svg"
import { ReactComponent as bed } from '../../assets/icons/bed.svg';
import { ReactComponent as bath } from '../../assets/icons/bath.svg';
import { ReactComponent as garage } from '../../assets/icons/car.svg';
import { ReactComponent as ruler } from '../../assets/icons/ruler.svg';

import { ReactComponent as resize } from '../../assets/icons/resize.svg';

const Container = styled.div`
display: flex;
flex-direction: column ;
justify-content: space-between ;
flex: ${({ flex }) => flex} ;
margin-left: 20px  ;
padding: 24px  ;
~.User{
  border: 1px solid  red; 
  background: #FFFFFF;
  border: 1px solid #E6E9EC;
  border-radius: 3px;
  gap:24px;

} 
>Button{
  width: 100% ;
}

.subTitlee{
  display: flex;
  justify-content: end ;
  margin: auto ;
width: 100% ;
}
` ;

const Wrapper = styled.div`
display: flex;
padding: var(--padding) ;
max-width: var(--width) ;
`

const Content = styled.div`
display: flex ;
flex-direction: column  ;
flex: ${({ flex }) => flex};
.flexDiv{
  display: flex;
}
`;

const Section = styled.div`
display: flex;
justify-content: space-between ;
align-items: center ;
width: 100% ;

>div{
    display: flex;
}
`

const Icons = styled.div`
`

Icons.Share = styled(share)`
background: #F6F8F9;
margin: 0px 10px 0px 0px  ;
cursor: pointer;
:active{
    transform: scale( 1) ;
    background-color: red ;
}
`
Icons.Love = styled(love)`
background: #F6F8F9;
margin: 0px 10px 0px 26px;
cursor: pointer;
:active{
    transform: scale(1) ;
}
`

Icons.Title = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #696969;

`
const Details = styled.div`
  display: flex; 
  align-items: center ;
 `;

Details.Title = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #696969;
margin: 0px 24px  0px 8px;
 `;





Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)``;
Icons.Love = styled(love)`
  width: 27px;
  height: 27px;
  padding: 6px;
  background: #f6f8f9;
  border-radius: 50%;
  margin-left: 20px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;
Details.Item = styled.div`
  display: flex;
align-items: center ;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
`;

const Control = styled.div`
display: flex ;
align-items:  center;
`
const BoxName = styled.div`
display: flex;
justify-content: end ;
width: 100% ;
`
const Description = styled.div`
margin-top: 16px  ;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 28px;
color: #0D263B;
background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
`

const TextLarge = styled.div`
font-size: 24px  ;
margin-top: 48px ;
`
const User = styled.div`

`
User.Img = styled.img`
width: 56px ;
height: 56px ;
border-radius: 50%   ;
margin-right: 20px ;
`
const Box = styled.div`

`

export { Container, Content, Icons, Section, Details, Control, Box, BoxName, Description, TextLarge, Wrapper, User };