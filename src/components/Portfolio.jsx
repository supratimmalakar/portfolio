import Container from "./Container";
import React from "react";
import styles from "./Portfolio.module.css";
import Project from "./Project";
import { Grid } from "@material-ui/core";
import triomics from "../assets/triomics.png";
import kazam from "../assets/kazam.png";
import chisel from "../assets/chisel.webp";
import Company from "./Company";
import triomicsHover from "../assets/test.jpg";
import triomicsMain from "../assets/screenshot.png";
import portfolioHover from "../assets/portfolioHover.png";
import portfolioMain from "../assets/portfolioMain.png";
import chatMain from "../assets/chatMain.png";
import chatHover from "../assets/chatHover.png";
import triomics1 from "../assets/triomics1.jpg";
import triomics2 from "../assets/triomics2.jpg";
import triomics3 from "../assets/triomics3.jpg";

export const projects = [
  {
    title: "Triomics",
    tags: ["ReactJS", "Redux", "MaterialUI", "Typescript"],
    mainImg: triomicsMain,
    hoverImg: triomicsHover,
    id: 1,
    shortDesc:
      "Breif summary of the work done at Triomics as an front end development intern.",
    description:
      "Worked as Frontend Developer, created responsive frontend components from wireframes, integrated Restful APIs. MaterialUI was used in the entireity of the project.\n Worked on their local component library called 'freyja', ",
    technicals: ["ReactJS", "Redux", "MaterialUI", "Typescript"],
    images: [triomicsMain, triomicsHover, triomics1, triomics2, triomics3],
  },
  {
    title: "FireChat",
    tags: ["Firebase", "ReactJS", "MaterialUI"],
    mainImg: chatMain,
    hoverImg: chatHover,
    id: 2,
    shortDesc: "A basic chat application built with React and Firebase.",
    description: `Built a chat app using React in the frontend and firebase at the backend. This one has basic functionalities like login (with google), logout, sending friend request to an existing user and accepting requests and of course, the chat functionality. \n Did not focus at making the thing look prettybecause wanted to learn firebase from this project.`,
    technicals: ["Firebase", "ReactJS", "MaterialUI"],
    appLink: "https://myfirechat.netlify.app/",
    repoLink: "https://github.com/supratimmalakar/Chat-App",
  },
  {
    title: "Portfolio",
    tags: ["ReactJS", "Redux", "react-spring", "MaterialUI"],
    mainImg: portfolioMain,
    hoverImg: portfolioHover,
    id: 3,
    shortDesc:
      "My personal portfolio with smooth animations built using ReactJS.",
    description: `The idea behind this project was to create a showcase of everything I've worked on in the past few months. I tried to keep the UI as simple as possible coupled with the web technologies that I believe make most sense \n The smooth animations were achieved by using react-spring. And the state management was done using Redux. I used MUI Grids for structuring everything. `,
    technicals: [
      "CSS animations",
      "React",
      "Redux",
      "react-spring",
      "Material UI",
    ],
    appLink: "https://portfolio-suprex.netlify.app/",
    repoLink: "https://github.com/supratimmalakar/portfolio",
  },
];

export const companies = [
  {
    title: "Chisel",
    description:
      "My main contributions to this product were in form of improvements to the overall UI(using React-Redux and Semantic UI) and troubleshootingand debugging the code to ensure compatibility across a range of devices.",
    period: "Nov 2020 - Mar 2020",
    color: "linear-gradient(85.69deg,#5f0a87 .86%,#a4508b 104.2%)",
    logo: chisel,
    tags: ["reactjs", "redux", "Saga", "SemanticUI"],
    width: "55%",
    id: 1,
  },
  {
    title: "Kazam EV Tech",
    description:
      "My main responsibilities as a member of the web team of Kazam was to build most of the frontend of their website usingtechnologies like NextJS, Bootstrap etc and then integrate the frontend with the backend.",
    period: "July 2021 - Sep 2021",
    color: "black",
    logo: kazam,
    tags: ["reactjs", "Web sockets", "sass"],
    width: "55%",
    id: 2,
  },
  {
    title: "Triomics",
    description:
      "Worked as Frontend Developer, created responsive frontend components from wireframes, integrated Restful APIs.Worked on their local component library called 'freyja', ",
    period: "Nov 2021 - Jan 2022",
    color: "#3172de",
    logo: triomics,
    tags: ["reactjs", "redux", "materialui", "typescript"],
    width: "80%",
    id: 3,
  },
];

const skills = [
  "ReactJS",
  "Redux",
  "MaterialUI",
  "HTML/CSS/JS",
  "NextJS",
  "PostgreSQL",
  "Firebase",
  "Git",
  "Sass",
  "NodeJS",
  "Typescript",
];

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
          Check out my latest web software development portfolio
          projects, work experiences and my skillset.
        </h3>
        <h2>Skills</h2>
        <div className={styles["tags-wrap"]}>
          {skills.map((tag, i) => (
            <div key={i} className={styles.tag}>
              <p>{tag} </p>
            </div>
          ))}
        </div>
        <h2>Latest work</h2>
        <Grid
          style={{ paddingBottom: "20px" }}
          container
          direction="row"
          spacing={3}
        >
          {projects.map((project, i) => {
            return (
              <Grid item xs={12} sm={6} key={i}>
                <Project {...project} />
              </Grid>
            );
          })}
        </Grid>
        <h2>Experience</h2>
        <Grid container direction="row" spacing={6}>
          {companies.map((company, i) => {
            return (
              <Grid item xs={12} key={i}>
                <Company {...company} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </Container>
  );
}

export default Portfolio;
