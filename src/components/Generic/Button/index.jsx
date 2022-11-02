import React from 'react'
import Container from './stayle'
export const Button = ({ type, children, active, boractive, bgcolor, onClick ,width}) => {
  return (
    <Container width={'true'} onClick={onClick} bgcolor={bgcolor} boractive={boractive} active={active} type={type}  >
      {children || 'Generic Button'} 
    </Container>
  )
}

export default Button
