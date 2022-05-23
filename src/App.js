import './App.css';
import React from 'react'
import About from './components/About';
import Portfolio from './components/Portfolio';
import { useTransition, a } from '@react-spring/web'
import styles from './components/styles.module.css'
import Contact from './components/Contact';
import { useSelector } from 'react-redux'
import { Route, useLocation, Routes, Navigate } from "react-router";
import ProjectExpand from './components/ProjectExpand';


function App() {
  const { a_bool } = useSelector(state => state.animate)
  const location = useLocation();

  const transitions = useTransition(location, {
    from: { x: a_bool ? -600 : 1000, opacity: 1, ys: [0,0.7]},
    enter: { x : 0, opacity: 1 , ys: [0,1]},
    leave: { x: !a_bool ? -600 : 1000, opacity: 1, ys: [0,0.7]},
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const perspective = (y,s) => `rotateY(${y}deg) scale(${s})`

  return (
    <div className="App flex fill center">
      {transitions((props, item) => (
        // <a.div style={{opacity : props.opacity, transform : props.xy.to(perspective)}}>
        <a.div className={styles['app-div']} style={{ ...props, transform : props.ys.to(perspective), transformOrigin : 'center right'}}>
          <Routes location={item}>
            <Route exact path="/" element={<Navigate to='/about'/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/portfolio" element={<Portfolio/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/portfolio/:projectId" element={<ProjectExpand/>}/>
          </Routes>
        </a.div>))}
    </div>
  );
}

export default App;
