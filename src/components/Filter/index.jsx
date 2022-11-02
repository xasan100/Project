import React, { useEffect, useRef, useState } from 'react';
import Button from '../Generic/Button';
import Input from '../Generic/Input';
import { Container, Icons, MenuWrapper, Section, SelectAnt, } from './stayle'
import Img1 from "../../assets/icons/houses.svg"
import { Dropdown } from 'antd';
import { uzeReplace } from '../../hooks/useReplace';
import { useNavigate, useLocation, } from 'react-router-dom';
import { useSearch } from '../../hooks/useSearch';


export const Filter = ({ type }) => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('Select Category');

  const { REACT_APP_BASE_URL: url } = process.env;
  const location = useLocation()
  const navigate = useNavigate()
  const query = useSearch()


  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();



  const onChange = ({ target: { name, value } }) => {
    // Navigate(`${location?.pathname}${uzeReplace(name, value)}`); 
    navigate(`${location?.pathname}${uzeReplace(name, value)}`);
  };

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
    navigate(`/properties${uzeReplace('category_id', category_id)}`);
  };


  const onChangeSort = (sort) => {
    navigate(`/properties${uzeReplace('sort', sort)}`);
  };




  const menu = (
    <MenuWrapper >
      <h1 className='SubTitle'> Address</h1>
      <Section>
        <Input onChange={onChange} ref={countryRef} name='country' width={'200'} pl={'10'} placeholder='Country' defalutValue={query.get('country')} />
        <Input onChange={onChange} ref={regionRef} name='region' width={'200'} placeholder='Region' defalutValue={query.get('region')} />
        <Input onChange={onChange} ref={cityRef} name='city' width={'200'} placeholder='City' defalutValue={query.get('city')} />
        <Input onChange={onChange} ref={zipRef} name='zip_code' width={'200'} placeholder='Zip code' defaultValue={query.get('zip_code')} />
      </Section>
      <h1 className='SubTitle'>Apartment info</h1>
      <Section>
        <Input name='room' onChange={onChange} placeholder='Rooms' />
        {/* <Input  placeholder='Size' /> */}

        <SelectAnt
          defaultValue={query.get('sort') || 'Select Sort'}
          onChange={onChangeSort} >
          <SelectAnt.Option value={''}>Select Sort</SelectAnt.Option>
          <SelectAnt.Option value={'asc'}>O'suvchi</SelectAnt.Option>
          <SelectAnt.Option value={'desc'}>Kamayuvchi</SelectAnt.Option>
        </SelectAnt>

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
        <Input name='min_price' onChange={onChange} placeholder='Min price' />
        <Input name='max_price' onChange={onChange} placeholder='Max price' />
      </Section>
    </MenuWrapper>
  );
  //  console.log(uzeReplace('address', 'toshkent'));
  return (
    <Container>
      <img src={Img1} alt="" />
      <Input pl={'35'}
        placeholder={'Enter an address, neighborhood, city, or ZIP code'}
      />
      <Dropdown
        overlay={menu}
        placement='bottomRight'
        arrow={{ pointAtCenter: true }}
        trigger="click "
      >
        <div>
          <Button type='ligth'>
            <Icons.Filter />
            Advanced
          </Button>
        </div>
      </Dropdown>
      <Button width>
        <Icons.Search /> Search
      </Button>
    </Container>
  );
};

export default Filter;
