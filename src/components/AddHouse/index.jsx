


import React,{useEffect, useState} from 'react'
import { IconDelete, MenuWrapper, Section, SelectAnt, Wrapper } from './stayle'
import Input from '../Generic/Input';
import { useSearch } from '../../hooks/useSearch';
import useRequest from "../../hooks/requst";

import { useLocation, useParams,useNavigate } from 'react-router-dom';
import Button from '../Generic/Button';
import {  useFormik } from 'formik';
import { Checkbox } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { uzeReplace } from '../../hooks/useReplace';
const { REACT_APP_BASE_URL: url } = process.env;

export const AddHouse = () => {
const [img, setImg] = useState('');
const [imgs, setImgs] = useState([]);
const [initial, setInitail] = useState({
  houseDetails: {},
  homeAmenitiesDto: {},
  componentsDto: {},
  status: true,

  locations: {
    latitude: 0,
    longitude: 0,
  },
});
const request=useRequest()
const { id } = useParams();
const location = useLocation()
const navigate = useNavigate()

const [data, setData] = useState([]);
const [category, setCategory] = useState([]);

const [value, setValue] = useState('Select Category');
useEffect(() => {
  id &&
    request({ url: `/houses/id/${id}`, token: true }).then((res) => {
      setImgs(res?.data?.attachments);
      setInitail({ ...res?.data });

    });
}, [id, request]);

// category
useEffect(() => {
  fetch(`${url}/categories/list`)
    .then((res) => res.json())
    .then((res) => {
      setData(res?.data || []);
    });
}, [  request]);

const onChangeCategory = (category_id) => {
  navigate(`/properties${uzeReplace('category_id', category_id)}`);
};



const formik = useFormik({
  initialValues: initial,
  enableReinitialize: true,


  onSubmit: (values) => {
      request({
        url: id ? `/houses/${id}` : `/houses`,
        method: id ? "PUT" : "POST",
        token: true,
        body: {
          ...values,
          categoryId: 1,
          name: "xasan",
          attachments: imgs,
          latitude: 0,
          longitude: 0
        },
        
      }).then((res) => {
        if (res?.success) navigate("/myprofile");
      });
    },
});
const addImg = () => {
  if (!(imgs.length >= 4) && img) {
    setImgs([
      ...imgs,
      { imgPath: img, id: `${img.length * Math.random()}${img}$` },
    ]);
    setImg("");
  }
  console.log(value,imgs,'ruqi');
};
  return (
 <Wrapper>
  <form onSubmit={formik.handleSubmit} >
     <MenuWrapper >
      <h1 className='SubTitle'> Address</h1>
      <Section>
        <Input  onChange={formik.handleChange}  value={formik.values.country}  name='country' width={'350'} pl={'10'} placeholder='Country' />
        <Input  onChange={formik.handleChange} value={formik.values.region}  name='region' width={'350'} placeholder='Region'  />
        <Input  onChange={formik.handleChange}  value={formik.values.city}  name='city' width={'350'} placeholder='City' />
        <Input  onChange={formik.handleChange}  value={formik.values.address}  name='address' width={'350'} placeholder='Addrees'  />

      </Section>
      <h1 className='SubTitle'>Apartment info</h1>
      <Section>

        <Input   value={formik.values.area}  name='houseDetails.area'  onChange={formik.handleChange} placeholder=' Area' />
        <Input   value={formik.values.bath}  name='houseDetails.bath' onChange={formik.handleChange} placeholder='Bath' />
        <Input   value={formik.values.beds} name='houseDetails.beds' onChange={formik.handleChange} placeholder='Beds' />
        <Input   value={formik.values.garage} name='houseDetails.garage' onChange={formik.handleChange} placeholder='Garages' />
        <Input   value={formik.values.yearBuilt} name='houseDetails.yearBuilt' onChange={formik.handleChange} placeholder='YearBuilt' />
        <Input   value={formik.values.zip_code} name='houseDetails.room'   onChange={formik.handleChange}  width={'200'} placeholder='Rooms' />
        <SelectAnt defaultValue={'Select'} value={formik.values.category} onChange={onChangeCategory}   name="" id="">
          <SelectAnt.Option value={''}>Select Sort</SelectAnt.Option>

          {data.map((value) => {
            return <SelectAnt.Option key={value.id} value={value?.id}>{value?.name}
            </SelectAnt.Option>
          })}
        </SelectAnt>
      </Section>
      <h1 className='SubTitle'>Price</h1>
      <Section > 
      <Input value={formik.values.name}  name='name' onChange={formik.handleChange} placeholder='Name'/>
      <Input value={formik.values.zipcode}  name='zipcode' onChange={formik.handleChange} placeholder='Zip Code'/>
      <Input value={formik.values.price}  name='price' onChange={formik.handleChange} placeholder='Price'/>
      <Input value={formik.values.sele_price}  name='sele_price' onChange={formik.handleChange} placeholder='Sale price' />
      </Section>
 <Section>
 <Input
              value={img}
              onChange={({ target: { value } }) => setImg(value)}
              placeholder="Add Image URL"
            />{" "}
            <Button
              type={"button"}
              onClick={addImg}
              disabled={imgs.length >= 4}
            >
              Add Image URL
            </Button>
 </Section>
    <Section flex >
      {imgs.map((value)=>{
         return (<pre>{value?.imgPath} <IconDelete onClick={()=>{
         let res= imgs.filter(vl=>vl!==value);
         setImgs(res);
         }}/>
         </pre>  
       ) })}
    </Section>
<Section> 
    <TextArea value={formik.values.description} placeholder='Description 😜' rows={6}></TextArea>
</Section>
    <h1 className='SubTitle'>Addinational</h1>
<Section flex>
<Section gap>
  <Checkbox onChange={formik.handleChange} name='componentsDto.busStop' > Bus Stop</Checkbox>
  <Checkbox onChange={formik.handleChange} name='componentsDto.garden' > Garden</Checkbox>
  <Checkbox onChange={formik.handleChange} name='componentsDto.market' >Mark</Checkbox>
  <Checkbox onChange={formik.handleChange} name='componentsDto.park' >Park</Checkbox>
  <Checkbox onChange={formik.handleChange} name='componentsDto.parking' >Parking</Checkbox>
</Section>


<Section gap>
  <Checkbox onChange={formik.handleChange} name='homeAmenitiesDto.school'> School</Checkbox  >
  <Checkbox onChange={formik.handleChange} name='homeAmenitiesDto.statium'> Statium</Checkbox  >
  <Checkbox onChange={formik.handleChange} name='homeAmenitiesDto.subway'> Subway</Checkbox  >
  <Checkbox onChange={formik.handleChange} name='homeAmenitiesDto.superMarket'> Super Market</Checkbox  >
  <Checkbox onChange={formik.handleChange} name='homeAmenitiesDto.tv'>TV</Checkbox>
</Section>

<Section gap>
  <Checkbox onChange={formik.handleChange} name='houseDetails.air' > Air Condition</Checkbox>
  <Checkbox onChange={formik.handleChange} name='houseDetails.courtyard' > Courtyard</Checkbox>
  <Checkbox onChange={formik.handleChange} name='houseDetails.furnitue' >Furnitue</Checkbox>
  <Checkbox onChange={formik.handleChange} name='houseDetails.gas' >Gas Stove</Checkbox>
  <Checkbox onChange={formik.handleChange} name='houseDetails.internet' >Internet</Checkbox>
</Section>

 </Section>

      <div>
       <Button >Save</Button>
       </div>
    </MenuWrapper>
    </form>
 </Wrapper>
  )
}
export default AddHouse