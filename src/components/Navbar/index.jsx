
import { Dropdown } from 'antd';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { navbar } from '../../utils/navbar';
import Filter from '../Filter';
import Footer from '../Footer/index.jsx';
import { Button } from '../Generic/Button';
import Myproporties from '../Myprofile/index';
import { Container, Link, Logo, Main, Menu, Section, Wrapper } from './style';


export const Home = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem('token')

  const onClick = () => {
    if (token) {

    }
    else {
      navigate('/signin')
    }
  }

  const onClickProfile = ({ target: {  dataset: { name } } }) => {
    if (name == 'logout') {
      localStorage.removeItem('token')
      navigate(`/home`)

    } else {
      navigate(`${name}`)
    }
  }


  const menu = (
    <Menu >
      <Menu.Item data-name="myprofile" onClick={onClickProfile} > My Profile</Menu.Item>
      <Menu.Item data-name="favourite" onClick={onClickProfile} > Favourites</Menu.Item>
      <Menu.Item data-name="logout" onClick={onClickProfile} > Log out</Menu.Item>
    </Menu>
  )
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate('/home')} logo>
            <Logo /> <h3>Housing</h3>
          </Section>
          <Section>
            {navbar.map(({ title, path, hidden }, index) => {
              return !hidden && (
                <Link
                  className={({ isActive }) => isActive && 'active'}
                  key={index}
                  to={path}
                >
                  {title}
                </Link>
              );
            })}
          </Section>
          <Section>
            {token ? (
              <Dropdown
                overlay={menu}
                placement='bottomRight'
                arrow={{ pointAtCenter: true }}
                trigger="click "
              >
                <Button onClick={onClick} active boractive bgactive type="dark">
                  <div>
                    Profile
                  </div>
                </Button>
              </Dropdown>
            ) : (
              <Button onClick={() => navigate('/signin')} active boractive bgactive type="dark">
                Sigin
              </Button>
            )}

          </Section>
        </Wrapper>
      </Main>
      <Filter />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Home;
