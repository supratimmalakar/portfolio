import  Container  from './Container'
import React from 'react'

function Portfolio() {
  return (
      <Container styles={{background : 'green'}} nextTab='contact' prevTab='about'>
        <h1>Portfolio</h1>
      </Container>
  )
}

export default Portfolio