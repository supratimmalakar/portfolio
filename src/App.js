import './App.css';
import React, { useContext } from 'react'
import About from './components/About';
import Portfolio from './components/Portfolio';
import { useSpring, useTransition, a } from '@react-spring/web'
import styles from './components/styles.module.css'
import Contact from './components/Contact';
import { useSelector } from 'react-redux'
import { Route, useLocation, Routes, Navigate } from "react-router";


function App() {
  const { a_bool } = useSelector(state => state.animate)
  const location = useLocation();

  // const transitions = useTransition(location, {
  //   from: { xy : [100, !a_bool ? -90 : 90], opacity : 0 },
  //   enter: { xy: [0, 0], opacity : 1 },
  //   leave: { xy: [-100, a_bool ? -90 : 90], opacity : 0 },
  //   config: { mass: 5, tension: 500, friction: 80 },
  // });

  const transitions = useTransition(location, {
    from: { x: !a_bool ? -1000 : 1000, opacity: 0, ry: a_bool ? -45 : 45},
    enter: { x : 0, opacity: 1 , ry: 0},
    leave: { x: a_bool ? -1000 : 1000, opacity: 0, ry: !a_bool ? -45 : 45},
    config: { mass: 5, tension: 500, friction: 80 },
  });

  // const { transform, opacity, zIndex } = useSpring({
  //   opacity: flipped ? 1 : 0,
  //   zIndex: flipped ? 1 : 0,
  //   transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
  //   config: { mass: 5, tension: 500, friction: 80 },
  // })
  const perspective = (y) => `rotateY(${y}deg)`

  return (
    <div className="App flex fill center">
      {transitions((props, item) => (
        // <a.div style={{opacity : props.opacity, transform : props.xy.to(perspective)}}>
        <a.div className={styles['app-div']} style={{ ...props, transform : props.ry.to(perspective), transformOrigin : 'center right'}}>
          <Routes location={item}>
            <Route exact path="/" element={<Navigate to='/about'/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/portfolio" element={<Portfolio/>} />
            <Route exact path="/contact" element={<Contact/>} />
          </Routes>
        </a.div>))}
    </div>
  );
}

export default App;
