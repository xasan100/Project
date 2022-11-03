import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { PropertiesContext } from '../../context/properties/index.jsx';
import Columns from './mock.js';
import { Table } from 'antd';
const { REACT_APP_BASE_URL } = process.env;


export const Myprofile = () => {
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
  
  });



  return (
    <React.Fragment>
      <div className="Title">Favourite </div>
      <p className="info nulla " >Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
  <> 
  <Table 
    columns={ Columns}
    scroll={{
      x: 1500,
      y: 300,
    }}
  />  
  </>
    </React.Fragment>
  )
};

export default Myprofile;
