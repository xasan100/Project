import React from 'react'
import Container from './stayle'
export const Button = ({ type, children, active, boractive, bgcolor, onClick ,width,disabled}) => {
  return (
    <Container width={'true'} onClick={onClick} bgcolor={bgcolor} boractive={boractive} active={active} type={type} disabled={disabled} >
      {children || 'Generic Button'} 
    </Container>
  )
}

export default Button
