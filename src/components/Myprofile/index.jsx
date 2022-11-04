import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../Generic';
import { AntTabble, Container, Icons, Imgs, User } from './style';
import noimg from "../../assets/noimg.jpeg"
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
    render: (data) => <User>
<Imgs  src={data?.attachments&& data?.attachments[0]?.imgPath || noimg}/>
      <User>
        
      </User>
 <Button>For Sale</Button>

    </User>,
  },
  {
    title:'Year Build',
     render: (data )=>  <span>{ data.houseDetails.yearBuilt}</span>,
    key: 'houseDetails.yearBuilt',
    width:150,

  },
  {
    title:'Email',
    render: (data )=>  <span>{ data.user.email}</span>,
    key: 'email',
    width:200
  }, 
  {
    title:'Price',
    dataIndex: 'price',
    key: 'Price',
    width:150,
  },

  {
    title:'Action',
    key: 'email',
    width:150,
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
