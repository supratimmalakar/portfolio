import React, { useState, useEffect, useRef } from "react";
import Container from "./Container";
import styles from "./About.module.css";
import Social from "./Social";
import { useTransition, useTrail, a } from "@react-spring/web";
import lookMorty from '../assets/look-morty.png'
import eyesImg from '../assets/eyes.png'

function About() {
  const imgContRef = useRef(null)
  const [toggle, set] = useState(1);
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);
  const [eyesDeg, setEyesDeg] = useState(0)
  const config = { mass: 5, tension: 2000, friction: 200 };
  const transitions = useTransition(toggle, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 2000,
    onRest: () => set(toggle === 3 ? 1 : toggle + 1),
  });

  const handleMouseMove = (e) => {
    setClientX(e.clientX);
    setClientY(e.clientY)
  }

  useEffect(() => {
    const rekt = imgContRef.current.getBoundingClientRect()
    const centerX = rekt.x + rekt.width/2
    const centerY = rekt.y + rekt.height / 2;
    const dx = centerX - clientX
    const dy = centerY - clientY;
    const radian = Math.atan2(dy, dx);
    const deg = radian * 180 / Math.PI
    setEyesDeg(deg)
  }, [clientX, clientY])

useEffect(() => {
  window.addEventListener('mousemove', handleMouseMove)
  return () => {
    window.removeEventListener('mousemove', handleMouseMove)
  }
}, [])

  const textArr = [
    "I am an front-end web developer and IITR final yearite",
    `Check out my latest projects and work experiences in the Portfolio section`,
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

  const eyeRollStyles = {
    transform : `rotate(${eyesDeg + 90}deg)`,
  }


  return (
    <Container
      styles={{ background: "#2f2f2f" }}
      nextTab="portfolio"
      prevTab="contact"
    >
      <div className={styles.container}>
        <div ref={imgContRef} className={styles.mortyContainer}>
          <img
            style={{ filter: `hue-rotate(${eyesDeg}deg)` }}
            className={styles.lookMorty}
            src={lookMorty}
          />
          <img
            style={{ top: 84, right: 53, ...eyeRollStyles }}
            className={styles.eyes}
            src={eyesImg}
          />
          <img
            style={{ top: 86, right: 84, ...eyeRollStyles }}
            className={styles.eyes}
            src={eyesImg}
          />
          <img
            style={{ top: 158, right: 130, ...eyeRollStyles }}
            className={styles.eyes}
            src={eyesImg}
          />
          <img
            style={{ top: 163, right: 165, ...eyeRollStyles }}
            className={styles.eyes}
            src={eyesImg}
          />
        </div>
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
            <a.p style={{ ...styles }}>{textArr[i]}</a.p>
          ))}
        </div>
        <Social />
      </div>
    </Container>
  );
}

export default About;
