import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as logoImg } from '../../assets/icons/logo.svg';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Main = styled.div`
  display: flex;
  justify-content: center;
  background: var(--colorPrimary);
  align-items:  center;
  
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--colorPrimary);
  color: #ffff;
  padding: var(--padding);
  height: 64px;
  font-size: 16px;
  max-width: 1440px;
    width: 100%;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && 'pointer'};
>h3{
  color: white ;
}

  .active {
    color: yellow 
  }
`;

const Logo = styled(logoImg)`
  width: 30px;
  margin-right: 12px;
  width: 30px ;
  height: 30px ;
  & path {
    fill: white; 
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  padding: 0 32px;
  color: #ffff;
`;

const Menu = styled.div`
padding:  16px;
background-color: #ffff ;
display: flex;
flex-direction: column ;
gap: 16px 0;
border-radius: 10px ;
width: 177px ;
`

Menu.Item = styled.div`
font-size:14px ;
line-height: 20px;
font-weight: 400 ;
padding: 10px  ;
cursor: pointer;
:active{
  border: 1px solid black ;
  border-radius: 8px;
}
`

export { Container, Wrapper, Section, Logo, Link, Menu };
