import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../Generic';
import { AntTabble, Container, Icons, Imgs, User,Wrapper } from './style';
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

      })
  }, [search]);



const columns =[
  {
    title:'Listing Title',
    key: 'name',
    render: (data) => <User>
<Imgs  src={data?.attachments&& data?.attachments[0]?.imgPath || noimg}/>
      <User  flex>
      <div   className="SubTitle">{data?.country},{data?.address}</div>
      <div  className="info">{data?.city} {data?.region}</div>
      <div  className="info">$ <del>{data?.salePrice} </del></div>


      </User>
<div style={{marginLeft:"auto"}}>
<Button>For Sale</Button>
</div>

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
    title: ' Price',
    dataIndex:  'price',
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
    <Wrapper>
      <User>
      <div className="Title">Properties </div>
        <Button onClick={()=> navigate('/myprofile/newhouse')}>Add  House</Button>
    </User>

      <Container>
          <AntTabble dataSource={data} columns={columns} />
      </Container>
    </Wrapper>
  )
};

export default Myprofile;
