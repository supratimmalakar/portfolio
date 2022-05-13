import  Container  from './Container'
import React from 'react'

function Portfolio({ set, flipped, setFrontTab, setBackTab}) {
  return (
      <Container set={set} styles={{background : 'green'}} nextTab='contact' prevTab='about'>
        <h1>Portfolio</h1>
      </Container>
  )
}

export default Portfolio