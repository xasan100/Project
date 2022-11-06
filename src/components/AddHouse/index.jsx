

// import React, { useEffect,useState } from "react";
// import { Wrapper, MenuWrapper, Section, SelectAnt, IconDelete, } from "./stayle";
// import { useNavigate, useParams } from "react-router-dom";
// import { Button, Input } from "../Generic";
// import { Checkbox } from "antd";

// import { useFormik } from "formik";
// import TextArea from "antd/lib/input/TextArea";
// import useRequest from "../../hooks/requst";

// export const AddNewHouse = () => {
//   const [imgs, setImgs] = useState([]);
//   const [initial, setInitail] = useState({
//     houseDetails: {},
//     homeAmenitiesDto: {},
//     componentsDto: {},
//     status: true,

//     locations: {
//       latitude: 0,
//       longitude: 0,
//     },
//   });
//   const [category, setCategory] = useState([]);
//   const [img, setImg] = useState("");

//   const request = useRequest();
//   const navigate = useNavigate();
//   const { id } = useParams();

//   // single house
//   useEffect(() => {
//     id &&
//       request({ url: `/houses/id/${id}`, token: true }).then((res) => {
//         setImgs(res?.data?.attachments);
//         setInitail({ ...res?.data });
//       });
//   }, [id, request]);

//   // category
//   useEffect(() => {
//     request({ url: `/categories/list` }).then((res) =>
//       setCategory(res?.data || [])
//     );
//   }, [request]);

//   const formik = useFormik({
//     initialValues: initial,
//     // initialValues: {},
//     enableReinitialize: true,

//     onSubmit: (values) => {
//       request({
//         url: id ? `/houses/${id}` : `/houses`,
//         method: id ? "PUT" : "POST",
//         token: true,
//         body: {
//           ...values,
//           categoryId: 1,
//           name: "webbriain",
//           attachments: imgs,
//         },
//       }).then((res) => {
//         if (res?.success) navigate("/myprofile");
//       });
//     },
//   });

//   const addImg = () => {
//     if (!(imgs.length >= 4) && img) {
//       setImgs([
//         ...imgs,
//         { imgPath: img, id: `${img.length * Math.random()}${img}$` },
//       ]);
//       setImg("");
//     }
//   };
//   console.log(initial, "rrrrres");

//   return (
//     <Wrapper>
//       <form onSubmit={formik.handleSubmit}>
//         <MenuWrapper>
//           <h1 className="subTitle">Address</h1>
//           <Section>
//             <Input
//               name="country"
//               value={formik.values.country}
//               placeholder="Country"
//               onChange={formik.handleChange}
//             />
//             <Input
//               onChange={formik.handleChange}
//               name="region"
//               value={formik.values.region}
//               placeholder="Region"
//             />
//             <Input
//               onChange={formik.handleChange}
//               name="city"
//               value={formik.values?.city}
//               placeholder="City"
//             />
//             <Input
//               onChange={formik.handleChange}
//               name="address"
//               value={formik.values?.address}
//               placeholder="Address"
//             />
//           </Section>
//           <h1 className="subTitle">Apartment info</h1>
//           <Section>
//             <Input
//               type="number"
//               name="houseDetails.area"
//               value={formik.values.houseDetails?.area}
//               onChange={formik.handleChange}
//               placeholder="area"
//             />
//             <Input
//               type="number"
//               name="houseDetails.bath"
//               value={formik.values.houseDetails?.bath}
//               onChange={formik.handleChange}
//               placeholder="bath"
//             />
//             <Input
//               type="number"
//               name="houseDetails.beds"
//               value={formik.values.houseDetails?.beds}
//               onChange={formik.handleChange}
//               placeholder="beds"
//             />
//             <Input
//               type="number"
//               name="houseDetails.garage"
//               value={formik.values.houseDetails?.garage}
//               onChange={formik.handleChange}
//               placeholder="garage"
//             />
//             <Input
//               type="number"
//               name="houseDetails.yearBuilt"
//               onChange={formik.handleChange}
//               placeholder="yearbuilt"
//               value={formik.values.houseDetails?.yearBuilt}
//             />
//             <Input
//               type="number"
//               value={formik.values.houseDetails?.room}
//               name="houseDetails.room"
//               onChange={formik.handleChange}
//               placeholder="room"
//             />
//             <SelectAnt
//               defaultValue={"Select Category"}
//               value={formik.values.categoryId}
//               onChange={formik.handleChange}
//             >
//               <SelectAnt.Option value={""}>Select Category</SelectAnt.Option>
//               {category.map((value) => {
//                 return (
//                   <SelectAnt.Option key={value.id} value={value?.id}>
//                     {value?.name}
//                   </SelectAnt.Option>
//                 );
//               })}
//             </SelectAnt>
//           </Section>
//           <h1 className="subTitle">Price</h1>
//           <Section>
//             <Input
//               value={formik.values.name}
//               name="name"
//               onChange={formik.handleChange}
//               placeholder="Name"
//             />
//             <Input
//               value={formik.values.zipCode}
//               name="zipCode"
//               onChange={formik.handleChange}
//               placeholder="Zip Code"
//             />
//             <Input
//               type="number"
//               onChange={formik.handleChange}
//               name="price"
//               value={formik.values.price}
//               placeholder="Price"
//             />
//             <Input
//               type="number"
//               onChange={formik.handleChange}
//               name="salePrice"
//               value={formik.values.salePrice}
//               placeholder="Sale price"
//             />
//           </Section>
//           <Section>
//             <Input
//               value={img}
//               onChange={({ target: { value } }) => setImg(value)}
//               placeholder="Add Image URL"
//             />{" "}
//             <Button
//               type={"button"}
//               onClick={addImg}
//               disabled={imgs.length >= 4}
//             >
//               Add Image URL
//             </Button>
//           </Section>
//           <Section flex>
//             {imgs.map((value) => {
//               return (
//                 <pre>
//                   {value?.imgPath}{" "}
//                   <IconDelete
//                     onClick={() => {
//                       let res = imgs.filter((vl) => vl.id !== value.id);
//                       setImgs(res);
//                     }}
//                   />
//                 </pre>
//               );
//             })}
//           </Section>
//           <Section>
//             <TextArea
//               onChange={formik.handleChange}
//               rows={6}
//               placeholder="description"
//               name="description"
//             />
//           </Section>
//           <h1 className="subTitle">Additional</h1>

//           <Section gap>
//             <Section flex>
//               <Checkbox
//                 onChange={formik.handleChange}
//                 name="homeAmenitiesDto.busStop"
//               >
//                 Bus Stop
//               </Checkbox>
//               <Checkbox
//                 onChange={formik.handleChange}
//                 name="homeAmenitiesDto.garden"
//               >
//                 Garden
//               </Checkbox>
//               <Checkbox
//                 onChange={formik.handleChange}
//                 name="homeAmenitiesDto.market"
//               >
//                 Market
//               </Checkbox>
//               <Checkbox
//                 onChange={formik.handleChange}
//                 name="homeAmenitiesDto.park"
//               >
//                 Park
//               </Checkbox>
//               <Checkbox
//                 onChange={formik.handleChange}
//                 name="homeAmenitiesDto.parking"
//               >
//                 Parking
//               </Checkbox>
//             </Section>
//             <Section flex>
//               <Checkbox
//                 onChange={formik.handleChange}
//                 name="homeAmenitiesDto.school"
//               >
//                 School
//               </Checkbox>
//               <Checkbox
//                 onChange={formik.handleChange}
//                 name="homeAmenitiesDto.statium"
//               >
//                 Statium
//               </Checkbox>
//               <Checkbox
//                 onChange={formik.handleChange}
//                 name="homeAmenitiesDto.subway"
//               >
//                 Subway
//               </Checkbox>
//               <Checkbox
//                 onChange={formik.handleChange}
//                 name="homeAmenitiesDto.superMarket"
//               >
//                 Super Market
//               </Checkbox>
//               <Checkbox onChange={formik.handleChange} name="houseDetails.tv">
//                 TV
//               </Checkbox>
//             </Section>
//             <Section flex>
//               <Checkbox
//                 onChange={formik.handleChange}
//                 name="houseDetails.airCondition"
//               >
//                 Air Condition
//               </Checkbox>
//               <Checkbox
//                 onChange={formik.handleChange}
//                 name="houseDetails.courtyard"
//               >
//                 Courtyard
//               </Checkbox>
//               <Checkbox
//                 onChange={formik.handleChange}
//                 name="houseDetails.furniture"
//               >
//                 Furniture
//               </Checkbox>
//               <Checkbox onChange={formik.handleChange} name="houseDetails.gas">
//                 Gas Stove
//               </Checkbox>
//               <Checkbox
//                 onChange={formik.handleChange}
//                 name="houseDetails.internet"
//               >
//                 Internet
//               </Checkbox>
//             </Section>
//           </Section>

//           <Button>{id ? "Update" : "Save"}</Button>
//         </MenuWrapper>
//       </form>
//     </Wrapper>
//   );
// };


// export default AddNewHouse;


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
  request({ url: `/categories/list` }).then((res) =>
    setCategory(res?.data || [])
  );
}, [request]);




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

        <Input   value={formik.values.area}  name='area'  onChange={formik.handleChange} placeholder=' Area' />
        <Input   value={formik.values.bath}  name='bath' onChange={formik.handleChange} placeholder='Bath' />
        <Input   value={formik.values.beds} name='beds' onChange={formik.handleChange} placeholder='Beds' />
        <Input   value={formik.values.garage} name='garage' onChange={formik.handleChange} placeholder='Garages' />
        <Input   value={formik.values.yearBuilt} name='yearBuilt' onChange={formik.handleChange} placeholder='YearBuilt' />
        <Input   value={formik.values.zip_code} name='zip_code'   onChange={formik.handleChange}  width={'200'} placeholder='Zip code' />
        <SelectAnt value={value}  name="" id="">
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
         return (<pre>{value?.imgPath} <IconDelete/></pre>  
       ) })}
    </Section>
<Section> 
    <TextArea value={formik.values.name} name='description' placeholder='Description 😜' rows={6}></TextArea>
</Section>
    <h1 className='SubTitle'>Addinational</h1>
<Section flex>
<Section gap>
  <Checkbox> Bus Stop</Checkbox>
  <Checkbox> Garden</Checkbox>
  <Checkbox>Mark</Checkbox>
  <Checkbox>Park</Checkbox>
  <Checkbox>Parking</Checkbox>
</Section>
<Section gap>
  <Checkbox> School</Checkbox>
  <Checkbox> Statium</Checkbox>
  <Checkbox>Subway</Checkbox>
  <Checkbox>Super Market</Checkbox>
  <Checkbox>TV</Checkbox>
</Section>
<Section gap>
  <Checkbox> Air Condition</Checkbox>
  <Checkbox> Courtyard</Checkbox>
  <Checkbox>Furnitue</Checkbox>
  <Checkbox>Gas Stove</Checkbox>
  <Checkbox>Internet</Checkbox>
</Section>
 </Section>

      <div>
       <Button>Save</Button>
       </div>
    </MenuWrapper>
    </form>
 </Wrapper>
  )
}
export default AddHouse