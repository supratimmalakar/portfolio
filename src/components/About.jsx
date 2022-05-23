import React from 'react'
import Container from './Container'
import styles from './About.module.css'
import Social from './Social'

function About() {
  return (
    <Container styles={{ background: '#2f2f2f' }} nextTab='portfolio' prevTab='contact'>
      <div className={styles.container}>
        <div className={styles['about-me']}>
          <h3 className={styles.heading}>"Hello, I'm <span style={{fontWeight : 800}}>Supratim Malakar.</span>"</h3>
          <p>I am an award-winning full-stack web developer and UI/UX javascript specialist.
            Check out my articles, React and React Native UI components at the code laboratory.
            Feel free to take a look at my latest projects on the web portfolio page.

            Remotely available UTC−1 to UTC+8. rafael@caferati.me_</p>
        </div>
        <Social/>
      </div>
    </Container>
  )
}

export default About