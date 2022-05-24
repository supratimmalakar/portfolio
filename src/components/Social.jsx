import React from "react";
import styles from "./Social.module.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";

function Social() {
  return (
    <div className={styles.container}>
      <div className={`${styles.box} ${styles.github}`}>
        <a
          style={{ width: "100%", height: "100%" }}
          href="https://github.com/supratimmalakar"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon
            fontSize="large"
            style={{ color: "#fff", position: "absolute", top: 10, right: 10 }}
          />
        </a>
      </div>
      <div className={`${styles.box} ${styles.linkedin}`}>
        <a
          style={{ width: "100%", height: "100%" }}
          href="https://www.linkedin.com/in/supratim-malakar-023222190/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon
            fontSize="large"
            style={{ color: "#fff", position: "absolute", top: 10, right: 10 }}
          />
        </a>
      </div>
      <div className={`${styles.box} ${styles.facebook}`}>
        <a
          style={{ width: "100%", height: "100%" }}
          href="https://www.facebook.com/supratim.malakar.54/"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon
            fontSize="large"
            style={{ color: "#fff", position: "absolute", top: 10, right: 10 }}
          />
        </a>
      </div>
      <div className={`${styles.box} ${styles.instagram}`}>
        <a
          style={{ width: "100%", height: "100%" }}
          href="https://www.instagram.com/supthefuhrer/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon
            fontSize="large"
            style={{ color: "white", position: "absolute", top: 10, right: 10 }}
          />
        </a>
      </div>
    </div>
  );
}

export default Social;
