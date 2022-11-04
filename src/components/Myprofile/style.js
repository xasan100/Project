import { Table } from 'antd';
import styled from 'styled-components';
import { ReactComponent as Delete }   from "../../assets/icons/delete.svg"
import{ ReactComponent as Edit }from "../../assets/icons/Vector.svg"



export const Container = styled.div`
display: flex;
flex-wrap: wrap ;
padding: var(--padding) ;
gap: 50px 20px ;
margin-top: 50px;
max-width: 1440px;
width: 100% ; 
`; 
export  const AntTabble=styled(Table)`
width: 100%;
border: 1px solid #f0f0f0;
`
 export const Icons=styled.div``

 Icons.Edit=styled(Edit)`
 width:16px;
 height: 16px;
 margin: 16px;
 cursor: pointer;
 `
 Icons.Delete=styled(Delete)`
  width:16px;
  height: 16px;
  margin:16px;
  color: red;
  cursor: pointer;
 `

 export const User=styled.div`
 display: flex ;
 flex-direction:${({flex}) => (flex ? "column":"row")};
 `

 export  const Imgs=styled.img`
    width: 113px;
    height: 113px;
 `
