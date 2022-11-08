import React from 'react'
import Container from './stayle'
export const Button = ({ type, children, active, boractive, bgcolor, onClick ,width,disabled}) => {
  return (
    <Container  onClick={onClick} bgcolor={bgcolor} boractive={boractive} active={active} type={type} disabled={disabled} width={width} >
      {children || 'Generic Button'} 
    </Container>
  )
}

export default Button
