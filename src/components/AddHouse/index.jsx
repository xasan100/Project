import React,{useEffect, useState} from 'react'
import { MenuWrapper, Section, SelectAnt, Wrapper } from './stayle'
import Input from '../Generic/Input';
import { useSearch } from '../../hooks/useSearch';
import { uzeReplace } from '../../hooks/useReplace';
import { useLocation, useNavigate } from 'react-router-dom';
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


const onChangeCategory = (category_id) => {
  // navigate(`/properties${uzeReplace('category_id', category_id)}`);
};


const onChange = ({ target: { name, value } }) => {
  // Navigate(`${location?.pathname}${uzeReplace(name, value)}`); 
  navigate(`${location?.pathname}${uzeReplace(name, value)}`);
};
const onChangeSort = (sort) => {
  // navigate(`/properties${uzeReplace('sort', sort)}`);
};

  return (
 <Wrapper>
     <MenuWrapper >
      <h1 className='SubTitle'> Address</h1>
      <Section>
        <Input onChange={onChange}  name='country' width={'350'} pl={'10'} placeholder='Country' />
        <Input onChange={onChange} name='region' width={'350'} placeholder='Region'  />
        <Input onChange={onChange}  name='city' width={'350'} placeholder='City' />
        <Input onChange={onChange}  name='city' width={'350'} placeholder='Addrees'  />

      </Section>
      <h1 className='SubTitle'>Apartment info</h1>
      <Section>

        <Input name='area' onChange={onChange} placeholder=' Area' />
        <Input name='bath' onChange={onChange} placeholder='Bath' />
        <Input name='beds' onChange={onChange} placeholder='Beds' />
        <Input name='garage' onChange={onChange} placeholder='Garages' />
        <Input name='yearBuilt' onChange={onChange} placeholder='YearBuilt' />
        <Input onChange={onChange} name='zip_code' width={'200'} placeholder='Zip code' />
        <SelectAnt value={value} onChange={onChangeCategory} name="" id="">
          <SelectAnt.Option value={''}>Select Sort</SelectAnt.Option>

          {data.map((value) => {
            return <SelectAnt.Option key={value.id} value={value?.id}>{value?.name}
            </SelectAnt.Option>
          })}
        </SelectAnt>
      </Section>
      <h1 className='SubTitle'>Price</h1>
      <Section >
        <Input name='price' onChange={onChange} placeholder='Price' />
        <Input name='sele_price' onChange={onChange} placeholder='Sale price' />
      </Section>
    </MenuWrapper>
 </Wrapper>
  )
}
export default AddHouse
