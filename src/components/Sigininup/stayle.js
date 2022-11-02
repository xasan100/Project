import styled from "styled-components";

import {  Tabs } from "antd";








const Container = styled.div`
  margin: auto ;
  flex-direction: column ;
  width: 100%;
  margin: 0 auto ;
  background: #E5E5F5;
`;

const Content = styled.div`
width: 100% ;
display: flex;
flex-direction: column ;
max-width:  580px ;
background: #FFFFFF;
border: 1px solid #E6E9EC; 
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
gap: 25px 0px ;
padding: 30px;

`




const Wrapper = styled.div`
width: 100% ;
margin: 0 auto ;
display: flex ; 
justify-content: center ;
align-items: center ;
`


export { Container, Content,Wrapper };