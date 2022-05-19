import  Container  from './Container'
import React from 'react'
import styles from './Portfolio.module.css'
import Project from './Project'
import { Grid } from '@material-ui/core'
import image from '../assets/image.jpg'
import hover from '../assets/hover.webp'

function Portfolio() {

  const projects = [
    {
      title : 'FireChat',
      tags : ['Firebase', 'ReactJS', 'MaterialUI', 'nodejs', 'spring', 'redux'],
      mainImg : image, 
      hoverImg : hover
    },
    {
      title: 'Portfolio',
      tags: ['Firebase', 'ReactJS', 'MaterialUI'],
      mainImg: image,
      hoverImg: hover
    },
    {
      title: 'Portfolio',
      tags: ['Firebase', 'ReactJS', 'MaterialUI'],
      mainImg: image,
      hoverImg: hover
    },
    {
      title: 'Portfolio',
      tags: ['Firebase', 'ReactJS', 'MaterialUI'],
      mainImg: image,
      hoverImg: hover
    },
    {
      title: 'Portfolio',
      tags: ['Firebase', 'ReactJS', 'MaterialUI'],
      mainImg: image,
      hoverImg: hover
    },
    {
      title: 'Portfolio',
      tags: ['Firebase', 'ReactJS', 'MaterialUI'],
      mainImg: image,
      hoverImg: hover
    },
    {
      title: 'Portfolio',
      tags: ['Firebase', 'ReactJS', 'MaterialUI'],
      mainImg: image,
      hoverImg: hover
    },
    {
      title: 'Portfolio',
      tags: ['Firebase', 'ReactJS', 'MaterialUI'],
      mainImg: image,
      hoverImg: hover
    },
  ]

  return (
    <Container styles={{ background: '#2a2a2a'}} nextTab='contact' prevTab='about'>
      <div className={styles.container}>
        <h1>web developer portfolio</h1>
        <h3>From Web Components and UI/UX animations to React.JS, Redux, Vue.JS, and Node.JS. Check out my latest web software development portfolio projects.</h3>
        <Grid container direction='row' spacing={3}>
          {projects.map((project, i) => {
            return (
              <Grid item xs={6} key={i}>
                  <Project {...project}/>
              </Grid>)
          })}
        </Grid>
      </div>
    </Container>
  )
}

export default Portfolio