import React, { forwardRef } from 'react';
import { Container, } from './stayle';

export const Input = forwardRef(({
  type,
  onChange,
  value,
  defalutValue,
  placeholder,
  name,
  width,
  height,
  pl,

}, ref) => {
  return <Container
    placeholder={placeholder}
    name={name}
    value={value}
    defaultValue={defalutValue}
    onChange={onChange}
    type={type}
    width={width }
    height={height}
    pl={pl}

  />
})
export default Input;

