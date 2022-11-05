import { Select } from 'antd';
import styled from 'styled-components';



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
  justify-content: ${({flex} ) => flex ? " space-around":'start'};

flex-direction: ${({gap} ) => gap ? 'column ':'row'};

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
export { MenuWrapper, Section,SelectAnt };