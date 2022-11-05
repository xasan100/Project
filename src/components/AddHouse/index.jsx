import React,{useEffect, useState} from 'react'
import { MenuWrapper, Section, SelectAnt, Wrapper } from './stayle'
import Input from '../Generic/Input';
import { useSearch } from '../../hooks/useSearch';
import { uzeReplace } from '../../hooks/useReplace';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../Generic/Button';
import { Form, useFormik } from 'formik';
const { REACT_APP_BASE_URL: url } = process.env;

export const AddHouse = () => {
const query = useSearch()
const [data, setData] = useState([]);
const [value, setValue] = useState('Select Category');
const location = useLocation()
const navigate = useNavigate()
useEffect(() => {
  fetch(`${url}/categories/list`)
    .then((res) => res.json())
    .then((res) => {
      setData(res?.data || []);
    });
}, []);


useEffect(() => {
  let [d] = data?.filter((ctg) => ctg.id === Number(query.get('category_id')))
  d?.name && setValue(d?.name);
  !query.get('category_id') && setValue('Select Category');

}, [location?.search, data])




const formik = useFormik({
  initialValues: {},
  onSubmit: values => {
console.log(values);
  },
});

  return (
 <Wrapper>
  <form onSubmit={formik.handleSubmit} >
     <MenuWrapper >
      <h1 className='SubTitle'> Address</h1>
      <Section>
        <Input          onChange={formik.handleChange}  value={formik.values.country}  name='country' width={'350'} pl={'10'} placeholder='Country' />
        <Input          onChange={formik.handleChange} value={formik.values.region}  name='region' width={'350'} placeholder='Region'  />
        <Input          onChange={formik.handleChange}  value={formik.values.city}  name='city' width={'350'} placeholder='City' />
        <Input          onChange={formik.handleChange}  value={formik.values.address}  name='address' width={'350'} placeholder='Addrees'  />

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
        <Input value={formik.values.price}  name='price' onChange={formik.handleChange} placeholder='Price' />
        <Input value={formik.values.sele_price}  name='sele_price' onChange={formik.handleChange} placeholder='Sale price' />
      </Section>
    
    <Section>
    <h1 className='SubTitle'>Addinational</h1>
    <Section flex> 1</Section>
    <Section>

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
