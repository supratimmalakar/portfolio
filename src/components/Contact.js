import React from 'react'
import Container from './Container'

function Contact({ set, flipped, setFrontTab, setBackTab}) {
  return (
      <Container set={set} styles={{ background: 'grey' }} prevTab='portfolio'>
          <h1>Contact</h1>
      </Container>
  )
}

export default Contact