import React, { useState } from "react";
import styles from "./Menu.module.css";
import { useSpring, a } from "react-spring";
import { useSelector, useDispatch } from "react-redux";
import { menuToggle } from "../redux/menuSlice";
import { useNavigate, useLocation } from "react-router-dom";

function Menu() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { show } = useSelector((state) => state.menu);
  const navigate = useNavigate();
  const [active, set] = useState(location.pathname.split("/")[1]);

  const onSelect = (route) => {
    dispatch(menuToggle());
    setTimeout(() => navigate(`/${route}`), 400);
    set(route)
  };
  console.log(active === "contact");
  return (
    <div
      style={{ transform: `translate(0,${show ? "0" : "-100%"})` }}
      className={styles.container}
    >
      <div className={styles.back} onClick={() => dispatch(menuToggle())}>
        <div className={`${styles.bar} ${styles.barOne}`} />
        <div className={`${styles.bar} ${styles.barTwo}`} />
      </div>
      <div className={styles.menu}>
        <div onClick={() => onSelect("about")} className={styles.options}>
          <p style={{ color: active === "about" && "#9f9f9f" }}>about</p>
          <div className={styles["hover-1"]} />
          <div className={styles["hover-2"]} />
        </div>
        <div onClick={() => onSelect("portfolio")} className={styles.options}>
          <p style={{ color: active === "portfolio" && "#9f9f9f" }}>
            portfolio
          </p>
          <div className={styles["hover-1"]} />
          <div className={styles["hover-2"]} />
        </div>
        <div onClick={() => onSelect("contact")} className={styles.options}>
          <p style={{ color: active === "contact" && "#9f9f9f" }}>contact</p>
          <div className={styles["hover-1"]} />
          <div className={styles["hover-2"]} />
        </div>
      </div>
    </div>
  );
}

export default Menu;
