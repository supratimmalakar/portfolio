import './App.css';
import React from 'react'
import About from './components/About';
import Portfolio from './components/Portfolio';
import { useSpring, a } from '@react-spring/web'
import styles from './components/styles.module.css'
import Contact from './components/Contact';
import { useSelector } from 'react-redux'

function App() {
  const tabs = ['about', 'portfolio', 'contact']
  const {backCard, frontCard, flipped} = useSelector((state) => state.card)

  const { transform, opacity, zIndex } = useSpring({
    opacity: flipped ? 1 : 0,
    zIndex: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  const getTab = (tab) => {
    switch (tab) {
      case tabs[0]:
        return <About/>

      case tabs[1]:
        return <Portfolio/>

      case tabs[2]:
        return <Contact/>

      default:
        return <About/>
    }
  }

  return (
      <div className="App flex fill center">
        <a.div
          className={styles.c}
          style={{
            opacity: opacity.to(o => 1 - o),
            transform,
            zIndex: zIndex.to(o => 1 - o)
          }}>
          {getTab(frontCard)}
        </a.div>
        <a.div
          className={styles.c}
          style={{
            opacity,
            transform,
            rotateY: '180deg',
            zIndex
          }}>
          {getTab(backCard)}
        </a.div>
      </div>
  );
}

export default App;
