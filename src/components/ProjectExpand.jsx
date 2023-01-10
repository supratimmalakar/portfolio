import React from "react";
import { useParams } from "react-router-dom";
import Container from "./Container";
import { projects } from "./Portfolio";
import styles from "./ProjectExpand.module.css";
import LaunchIcon from "@material-ui/icons/Launch";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GitHubIcon from "@material-ui/icons/GitHub";

function ProjectExpand() {
  let { projectId } = useParams();
  projectId = parseInt(projectId);
  let index = projects.map((project) => project.id).indexOf(projectId);
  let n = projects.length;
  const project = projects[index];
  const images = project.images
    ? [...project.images]
    : [project.mainImg, project.hoverImg];

  return (
    <Container
      bgColor="#2a2a2a"
      prevTab={index === 0 ? null : projects[index - 1]?.id}
      nextTab={index === n - 1 ? null : projects[index + 1]?.id}
      currTab="project"
      projectBool={true}
      indexKey={index}
    >
      <div className={styles.container}>
        <h1>{project.title}</h1>
        <h3>{project.shortDesc}</h3>
        <div className={styles["link-div"]}>
          {project.appLink && (
            <a style={{textDecoration : 'none'}} target='_blank' rel="noreferrer"  href={project.appLink}>
              <div
                style={{ background: "rgb(0, 177, 156)", color: "#fff" }}
                className={styles["link-btns"]}
              >
                <LaunchIcon style={{ color: "#fff" }} />
                <p>Visit the App</p>
              </div>
            </a>
          )}
          {project.repoLink && (
            <a style={{textDecoration : 'none'}} target='_blank' rel="noreferrer"  href={project.repoLink}>
              <div className={styles["link-btns"]}>
                <GitHubIcon style={{ color: "#999" }} />
                <p>Repo link</p>
              </div>
            </a>
          )}
        </div>
        <div className={styles["image-container"]}>
          <div className={styles.header}>
            <div className={styles.dotCont}>
              <div style={{ background: "#ff5f57" }} className={styles.dots} />
              <div style={{ background: "#ffbd2e" }} className={styles.dots} />
              <div style={{ background: "#28ca41" }} className={styles.dots} />
            </div>
          </div>
          <div className={styles.display}>
            <Carousel infiniteLoop showThumbs={false}>
              {images.map((image) => (
                <div className={styles["imgDiv"]}>
                  <img
                    alt={project.title}
                    style={{ width: "100%" }}
                    src={image}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <h2>About this project</h2>
        {project.description.split("\n").map((para) => (
          <h3>{para}</h3>
        ))}
        <h2>Technical Sheet</h2>
        <ul>
          {project.technicals.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default ProjectExpand;
