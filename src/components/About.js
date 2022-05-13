import React from 'react'
import Container from './Container'

function About({set, flipped, setFrontTab, setBackTab}) {
  return (
      <Container set={set} styles={{background : 'grey'}} nextTab='portfolio'>
        <h1>About</h1>
      </Container>
  )
}

export default About