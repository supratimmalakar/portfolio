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
import create1 from "../assets/create1.png"
import create2 from "../assets/create2.png";
import create3 from "../assets/create3.png";
import create4 from "../assets/create4.png";
import create5 from "../assets/create5.png";
import createlogo from "../assets/createlogo.png"
import spotify2yt1 from '../assets/spotify2yt1.png'
import spotify2yt2 from "../assets/spotify2yt2.png";
import spotify2yt4 from "../assets/spotify2yt4.png";
import blogapp1 from "../assets/blogapp1.png";
import blogapp2 from "../assets/blogapp2.png";
import blogapp3 from "../assets/blogapp3.png";
import blogapp4 from "../assets/blogapp4.png";

export const projects = [
  {
    title: "Blogger",
    tags: [
      "NextJS",
      "NodeJS",
      "JWT",
      "Redux",
      "Markdown",
      "MongoDB",
      "Express",
      "TailwindCSS",
    ],
    mainImg: blogapp4,
    hoverImg: blogapp1,
    id: 6,
    shortDesc:
      "I've created this Markdown powered blogging social media platform when people can follow each other and stay updated on their blogs",
    description:
      "On the frontend side, I've used Next.js for server-side rendering and path based routing. On the server side, I've used Node.js, Express and MongoDB. The authentication is stateless using JWT token. \n The text editor is a rich text editor that uses Markdown letting the user customize the content and even add images to their blogs.",
    technicals: [
      "Stateless Authentication",
      "Cookies",
      "MongoDB CRUD operations",
      "Redux",
      "Markdown",
      "MongoDB",
      "Express",
    ],
    images: [blogapp4, blogapp1, blogapp2, blogapp3],
    appLink: "https://blogapp-supratimmalakar.vercel.app",
    repoLink: "https://github.com/supratimmalakar/blogapp",
  },
  {
    title: "Spotify2YT",
    tags: [
      "ReactJS",
      "NodeJS",
      "Webpack",
      "Google API",
      "Spotify API",
      "Chrome Identity",
    ],
    mainImg: spotify2yt4,
    hoverImg: spotify2yt1,
    id: 5,
    shortDesc:
      "A Chrome extension that lets users convert their Spotify playlists to Youtube playlists.",
    description:
      "Spotify2YT allows users to easily convert their Spotify playlists into YouTube playlists. Simply install the extension and log in to both your Spotify and YouTube accounts. Then, select a Spotify playlist that you want to convert and our extension will automatically search for and add the corresponding songs on YouTube to a new playlist. This is a great tool for those who prefer to use YouTube to listen to music, but still want to keep their favorite Spotify playlists. \n It is built using ReactJS and webpack for bundling on the frontend and I've used NodeJS and Express in the backend.",
    technicals: [
      "ReactJS",
      "NodeJS",
      "Webpack",
      "Google API",
      "Spotify API",
      "Chrome Identity",
    ],
    images: [spotify2yt4, spotify2yt2, spotify2yt1],
    repoLink: "https://github.com/Sickaada/spotify2yt",
  },
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
  {
    title: "Create Protocol",
    tags: ["NextJS", "Redux", "TailwindCSS", "Typescript", "Ether"],
    mainImg: create2,
    hoverImg: create1,
    id: 4,
    shortDesc:
      "Breif summary of the work done at Create Protocol as an front end development intern.",
    description:
      "Worked as Frontend Developer, created Decentralized apps based on Web3 principles that connect to the blockchain withsmart contracts.\n Built components for a NFT marketplace that connects to IPFS, called smart contracts and connected with rest APIs",
    technicals: ["NextJS", "Redux", "TailwindCSS", "Typescript", "Ether"],
    images: [create1, create4, create5, create2, create3],
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
  {
    title: "Create Protocol",
    description:
      "Worked as Frontend Developer, created Decentralized apps based on Web3 principles that connect to the blockchain withsmart contracts.",
    period: "June 2022 - Aug 2022",
    color: "#3172de",
    logo: createlogo,
    tags: ["reactjs", "redux", "materialui", "typescript"],
    width: "80%",
    id: 4,
  },
];

const skills = [
  "ReactJS",
  "Redux",
  "MaterialUI",
  "TailwindCSS",
  "HTML/CSS/JS",
  "NextJS",
  "Firebase",
  "Git",
  "Sass",
  "NodeJS",
  "Typescript",
  "MongoDB"
];

function Portfolio() {
  return (
    <Container
    currTab="portfolio"
      bgColor="#2a2a2a"
      nextTab="contact"
      prevTab="about"
    >
      <div className={styles.container}>
        <h1>web developer portfolio</h1>
        <h3>
          Check out my latest web software development portfolio projects, work
          experiences and my skillset.
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
