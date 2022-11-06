import { Select } from 'antd';
import styled from 'styled-components';
import { ReactComponent as Delete }   from "../../assets/icons/delete.svg"


export const Wrapper=styled.div`

max-width: 1440px;
width: 100% ; 
margin-top: 50px;
padding: var(--padding);
margin: 0 auto;
`



const MenuWrapper = styled.div`
  padding: 30px;
  background: white;
  border: 1px solid #e6e9ec;
`;
const Section = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => (flex ? "column" : "row")};
  justify-content: ${({ gap }) => (gap ? "space-around" : "start")};

  margin-bottom: 20px;
  gap: 20px;
`; 


const SelectAnt = styled(Select)`
min-width: 150px ;
width: 100%  ;
max-width: 150px  ;
.ant-select-selector{
  height: 44px !important  ; 
  >span {
    display: flex;
    align-items: center ;
  }
}
`
const  IconDelete=styled(Delete)`
width:16px ;
height: 16px ;
cursor: pointer;
:hover{
 & path {
  fill: red;
 }
}
`

export { MenuWrapper, Section,SelectAnt,IconDelete };




// gcfhvjkl;jhgf

// gcfhvjkl;jhgf

