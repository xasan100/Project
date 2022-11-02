import styled from 'styled-components';

const Container = styled.div`
  border-radius: 3px;
  width: 100%;
 
  filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.06))
  
`;

const Img = styled.img`
  border-radius: 3px;
`;

const Content = styled.div`
  position: absolute;
left: 110px ;
top: 0px ;
bottom:  0px;
display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;

`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 3px;
`;

const Icons = styled.div``;

export { Container, Img, Content, Icons, Blur };