import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { PropertiesContext } from '../../context/properties/index.jsx';
import HouseCard from '../HouseCard/index.jsx';
import { Container } from './style';
const { REACT_APP_BASE_URL } = process.env;

export const Favourite = () => {
  const { search } = useLocation();
  const navigate = useNavigate()
  const [, dispatch] = useContext(PropertiesContext)


  const { refetch, data } = useQuery([search], async () => {
    const res = await fetch(`${REACT_APP_BASE_URL}/houses/getAll/favouriteList`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    return await res.json();


  }, {
    onSuccess: (res) => {
      dispatch({ type: 'refetch', pyload: refetch })

    }
  });

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <React.Fragment>
      <div className="Title">Favourite </div>
      <p className="info nulla " >Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>

      <Container>
        {data?.data?.map((value) => {
          return <HouseCard
            onClick={() => onSelect(value.id)}
            key={value.id}
            data={value} />
        })}
      </Container>
    </React.Fragment>
  )
};

export default Favourite;
