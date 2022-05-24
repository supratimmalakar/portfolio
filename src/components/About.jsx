import React, { useState } from "react";
import Container from "./Container";
import styles from "./About.module.css";
import Social from "./Social";
import { useTransition, useTrail, a } from "@react-spring/web";

function About() {
  const [toggle, set] = useState(1);
  const config = { mass: 5, tension: 2000, friction: 200 };
  const transitions = useTransition(toggle, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 2000,
    onRest: () => set(toggle === 3 ? 1 : toggle + 1),
  });



  const textArr = [
    "I am an front-end web developer and IITR pre-final yearite",
    `Check out mt latest projects and my work experinces in the Portfolio section`,
    "Feel free to contact me through the contact section",
    "or shoot a mail at supratim_m@me.iitr.ac.in",
  ];

  const [trail, api] = useTrail(textArr.length,()=> ({
    opacity : 1,
    y : 0,
    from : {
      y : 500,
      opacity : 0
    },
    config,
    delay : 400
  }))


  return (
    <Container
      styles={{ background: "#2f2f2f" }}
      nextTab="portfolio"
      prevTab="contact"
    >
      <div className={styles.container}>
        <div className={styles["about-me"]}>
          <div className={styles.headingDiv}>
            {transitions(({ opacity }, item) => {
              if (item === 1)
                return (
                  <a.h3
                    className={styles.heading}
                    style={{
                      position: "absolute",
                      left: "50%",
                      transform: "translate(-50%,0)",
                      opacity: opacity.to({
                        range: [0.0, 1.0],
                        output: [0, 1],
                      }),
                    }}
                  >
                    Say my name
                  </a.h3>
                );
              else if (item === 2)
                return (
                  <a.h3
                    className={styles.heading}
                    style={{
                      position: "absolute",
                      left: "50%",
                      transform: "translate(-50%,0)",
                      opacity: opacity.to({
                        range: [1.0, 0.0],
                        output: [1, 0],
                      }),
                    }}
                  >
                    Supratim Malakar
                  </a.h3>
                );
              else if (item === 3)
                return (
                  <a.h3
                    className={styles.heading}
                    style={{
                      position: "absolute",
                      left: "50%",
                      transform: "translate(-50%,0)",
                      opacity: opacity.to({
                        range: [1.0, 0.0],
                        output: [1, 0],
                      }),
                    }}
                  >
                    You're godamn right!
                  </a.h3>
                );
            })}
          </div>
          {trail.map((styles, i) => (
            <a.p style={{...styles}}>{textArr[i]}</a.p>
          ))}
        </div>
        <Social />
      </div>
    </Container>
  );
}

export default About;
