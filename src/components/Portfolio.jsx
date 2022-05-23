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
import ShortUniqueId from "short-unique-id";
import triomicsHover from '../assets/test.jpg'
import triomicsMain from "../assets/screenshot.png";
import chatMain from '../assets/chatMain.png'
import chatHover from '../assets/chatHover.png'
import triomics1 from '../assets/triomics1.jpg'
import triomics2 from "../assets/triomics2.jpg";
import triomics3 from "../assets/triomics3.jpg";


const uid = new ShortUniqueId({length : 8})

export const projects = [
  {
    title: "Triomics",
    tags: ["Firebase", "ReactJS", "MaterialUI", "nodejs", "spring", "redux"],
    mainImg: triomicsMain,
    hoverImg: triomicsHover,
    id: 1,
    shortDesc:
      "Sky Go Desktop react javascript web application build on top of the Electron framework.",
    description:
      "Project developed as a contractor with the SKY GO (UK) Desktop team. The Sky Go Desktop app is a React web application build on top of the Electron framework.\nAt this project I acted as the lead UI/UX developer specialist being the bridge between UI/UX Design, PO and the UI development team. The main challenge was to reorganize the UI structure from a react-virtualized grid into a pure CSS one. Which improved drastically the scalability and maintainability of the project.",
    technicals: ["UX Architecture", "React", "Your Mom", "Redux"],
    images: [triomicsMain, triomicsHover, triomics1, triomics2, triomics3],
  },
  {
    title: "FireChat",
    tags: ["Firebase", "ReactJS", "MaterialUI"],
    mainImg: chatMain,
    hoverImg: chatHover,
    id: 2,
    shortDesc: "Very nice project. 100%. Also there is a girl i like.",
    description: `Project developed as a contractor with the SKY GO (UK) Desktop team. The Sky Go Desktop app is a React web application build on top of the Electron framework.\n\ At this project I acted as the lead UI/UX developer specialist being the bridge between UI/UX Design, PO and the UI development team. The main challenge was to reorganize the UI structure from a react-virtualized grid into a pure CSS one. Which improved drastically the scalability and maintainability of the project.`,
    technicals: ["UX Architecture", "React", "Your Mom", "Redux"],
    appLink: "https://myfirechat.netlify.app/",
    repoLink: "https://github.com/supratimmalakar/Chat-App",
  },
  {
    title: "Torttolio",
    tags: ["Firebase", "ReactJS", "MaterialUI"],
    mainImg: image,
    hoverImg: hover,
    id: 3,
    shortDesc: "Very nice project. 100%. Also there is a girl i like.",
    description: `Project developed as a contractor with the SKY GO (UK) Desktop team. The Sky Go Desktop app is a React web application build on top of the Electron framework.\n\At this project I acted as the lead UI/UX developer specialist being the bridge between UI/UX Design, PO and the UI development team. The main challenge was to reorganize the UI structure from a react-virtualized grid into a pure CSS one. Which improved drastically the scalability and maintainability of the project.`,
    technicals: ["UX Architecture", "React", "Your Mom", "Redux"],
  },
];

export const companies = [
  {
    title: "Chisel",
    description: "Very nice company 10/10",
    period: "Nov 2020 - Mar 2020",
    color: "linear-gradient(85.69deg,#5f0a87 .86%,#a4508b 104.2%)",
    logo: chisel,
    tags: ["reactjs", "redux", "materialui"],
    width: "35%",
    id: 1,
  },
  {
    title: "Kazam EV Tech",
    description: "Very nice company 10/10",
    period: "July 2021 - Sep 2021",
    color: "black",
    logo: kazam,
    tags: ["reactjs", "redux", "materialui"],
    width: "35%",
    id: 2,
  },
  {
    title: "Triomics",
    description: "Very nice company 10/10",
    period: "Nov 2021 - Jan 2022",
    color: "#3172de",
    logo: triomics,
    tags: ["reactjs", "redux", "materialui"],
    width: "50%",
    id: 3,
  },
];

const skills = ['ReactJS', 'Redux', 'MaterialUI', 'HTML/CSS/JS', 'NextJS', 'PostgreSQL', 'Firebase', 'Git', 'Sass', 'NodeJS', 'Typescript']

function Portfolio() {


  return (
    <Container
      styles={{ background: "#2a2a2a" }}
      nextTab="contact"
      prevTab="about"
    >
      <div className={styles.container}>
        <h1>web developer portfolio</h1>
        <h3>
          From Web Components and UI/UX animations to React.JS, Redux, Vue.JS,
          and Node.JS. Check out my latest web software development portfolio
          projects.
        </h3>
        <h2>skills</h2>
        <div className={styles["tags-wrap"]}>
          {skills.map((tag, i) => (
            <div key={i} className={styles.tag}>
              <p>{tag} </p>
            </div>
          ))}
        </div>
        <h2>latest work</h2>
        <Grid
          style={{ paddingBottom: "20px" }}
          container
          direction="row"
          spacing={3}
        >
          {projects.map((project, i) => {
            return (
              <Grid item xs={6} key={i}>
                <Project {...project} />
              </Grid>
            );
          })}
        </Grid>
        <h2>experience</h2>
        <Grid container direction="row" spacing={3}>
          {companies.map((company, i) => {
            return (
              <Grid item xs={6}>
                <Company {...company} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </Container>
  );
}

export default Portfolio