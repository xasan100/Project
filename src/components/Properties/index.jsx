import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HouseCard from '../HouseCard/index.jsx';
import { Container } from './style';
const { REACT_APP_BASE_URL: url } = process.env;

export const Properties = () => {
  const [data, setData] = useState([])
  const { search } = useLocation();
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
        // console.log(res,'like');
      })
  }, [search]);

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <React.Fragment>
      <div className="Title">Properties </div>
 
        <p className="info nulla " >Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>

      <Container>
        {data.map((value) => {
          return <HouseCard
            onClick={() => onSelect(value.id)}
            key={value.id}
            data={value} />
        })}

      </Container>
    </React.Fragment>
  )
};

export default Properties;
