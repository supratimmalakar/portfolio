import React, { useState } from "react";
import Container from "./Container";
import styles from "./About.module.css";
import Social from "./Social";
import { useTransition, useSpring, a } from "@react-spring/web";
import TypeWriterEffect from "react-typewriter-effect";

function About() {
  const [toggle, set] = useState(1);
  const transitions = useTransition(toggle, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 2000,
    onRest: () => set(toggle === 3 ? 1 : toggle + 1),
  });

  const fontStyle = {
    color: "#8a8a8a",
    fontSize: "1.05em",
    lineHeight: "1.95em",
    fontWeight: "400",
    fontFamily: "Roboto",
    textAlign: "center",
    margin: "0 auto",
  };

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
          {/* <p  className={styles.desc}>I am an front-end web developer and IITR pre-final yearite</p>
          <p className={styles.desc}>Check out mt latest projects and my work experinces in the portfolio section</p>
          <p className={styles.desc}>Feel free to contact me through the contact section</p>
          <p className={styles.desc}>or shoot a mail at supratim_m@me.iitr.ac.in</p> */}
          <div style={{ height: "7.8em" }}>
            <TypeWriterEffect
              textStyle={{ ...fontStyle }}
              startDelay={500}
              cursorColor="#8a8a8a"
              text="I am an front-end web developer and IITR pre-final yearite."
              typeSpeed={30}
              hideCursorAfterText={true}
            />
            <TypeWriterEffect
              textStyle={{ ...fontStyle }}
              startDelay={2270}
              cursorColor="#8a8a8a"
              text="Check out mt latest projects and my work experinces in the portfolio section."
              typeSpeed={30}
              hideCursorAfterText={true}
            />
            <TypeWriterEffect
              textStyle={{ ...fontStyle }}
              startDelay={4580}
              cursorColor="#8a8a8a"
              text="Feel free to contact me through the contact section"
              typeSpeed={30}
              hideCursorAfterText={true}
            />
            <TypeWriterEffect
              textStyle={{ ...fontStyle }}
              startDelay={6110}
              cursorColor="#8a8a8a"
              text="or shoot a mail at supratim_m@me.iitr.ac.in"
              typeSpeed={30}
            />
          </div>
        </div>
        <Social />
      </div>
    </Container>
  );
}

export default About;
