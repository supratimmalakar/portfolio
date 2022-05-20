import  Container  from './Container'
import React from 'react'
import styles from './Portfolio.module.css'
import Project from './Project'
import { Grid } from '@material-ui/core'
import image from '../assets/image.jpg'
import hover from '../assets/hover.webp'
import triomics from '../assets/triomics.png'
import kazam from '../assets/kazam.png'
import chisel from '../assets/chisel.webp'
import Company from './Company'

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
  ]

  const companies = [
    {
      title : 'Chisel',
      description : 'Very nice company 10/10',
      period : 'Nov 2020 - Mar 2020',
      color: 'linear-gradient(85.69deg,#5f0a87 .86%,#a4508b 104.2%)',
      logo : chisel,
      tags : ['reactjs', 'redux', 'materialui'],
      width : '35%'
    },
    {
      title: 'Kazam EV Tech',
      description: 'Very nice company 10/10',
      period: 'July 2021 - Sep 2021',
      color: 'black',
      logo : kazam,
      tags : ['reactjs', 'redux', 'materialui'],
      width : '35%'
    },
    {
      title: 'Triomics',
      description: 'Very nice company 10/10',
      period: 'Nov 2021 - Jan 2022',
      color: '#3172de',
      logo : triomics,
      tags : ['reactjs', 'redux', 'materialui'],
      width : '50%'
    },
  ]

  return (
    <Container styles={{ background: '#2a2a2a'}} nextTab='contact' prevTab='about'>
      <div className={styles.container}>
        <h1>web developer portfolio</h1>
        <h3>From Web Components and UI/UX animations to React.JS, Redux, Vue.JS, and Node.JS. Check out my latest web software development portfolio projects.</h3>
        <h2>latest work</h2>
        <Grid style={{paddingBottom : '20px'}} container direction='row' spacing={3}>
          {projects.map((project, i) => {
            return (
              <Grid item xs={6} key={i}>
                  <Project {...project}/>
              </Grid>)
          })}
        </Grid>
        <h2>experience</h2>
        <Grid container direction='row' spacing={3}>
          {companies.map((company, i) => {
            return (
              <Grid item xs={6} key={i}>
                <Company {...company} />
              </Grid>)
          })}
        </Grid>
      </div>
    </Container>
  )
}

export default Portfolio