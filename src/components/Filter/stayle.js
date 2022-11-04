

import styled from 'styled-components';
import { ReactComponent as houses } from "../../assets/icons/houses.svg"
import { ReactComponent as filter } from '../../assets/icons/setting.svg';
import { ReactComponent as search } from '../../assets/icons/search.svg';
import { Select } from 'antd';
const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
>img{
    position: absolute ;
 left: 140px ;
 z-index: 1 ;
 top: 85px ;
}
    max-width: 1440px;
    width: 100%;
    margin: 0 auto ;
`;

export const Icons = styled.div``;

Icons.Search = styled(search)`
  margin-right: 8px;
`;
Icons.Filter = styled(filter)`
  margin-right: 8px;
`;
Icons.Houses = styled(houses)`
  margin-right: 8px;
`;





const MenuWrapper = styled.div`
  padding: 30px;
  background: white;
  border: 1px solid #e6e9ec;
`;
const Section = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  margin-bottom: 20px;
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

export { Container, MenuWrapper, Section, SelectAnt };