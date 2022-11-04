import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AntTabble, Container, Icons } from './style';
const { REACT_APP_BASE_URL: url } = process.env;

export const Myprofile = () => {
  const [data, setData] = useState([])
  const { search } = useLocation();
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res,'daedfs');
        setData(res?.data || []);
        // console.log(res,'like');
      })
  }, [search]);

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

const columns =[
  {
    title:'Listing Title',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
    with: 150,
  },
  {
    title:'Year Build',
     render: (data )=>  <span>{ data.houseDetails.yearBuilt}</span>,
    key: 'houseDetails.yearBuilt',
  },
  {
    title:'Email',
    render: (data )=>  <span>{ data.user.email}</span>,
    key: 'email',
  }, 
  {
    title:'Price',
    dataIndex: 'price',
    key: 'Price',
  },

  {
    title:'Action',
    key: 'email',
    render:data =>{
      return (
      <div>
        <Icons.Edit/>
      <Icons.Delete/>
      </div>
      )
    }
  },

]

  return (
    <React.Fragment>
      <div className="Title">Properties </div>
      <Container>
          <AntTabble dataSource={data} columns={columns} />
      </Container>
    </React.Fragment>
  )
};

export default Myprofile;
