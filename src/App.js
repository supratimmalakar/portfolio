import './App.css';
import React, { useState } from 'react'
import About from './components/About';
import Portfolio from './components/Portfolio';
import { useSpring, a } from '@react-spring/web'
import styles from './components/styles.module.css'
import Contact from './components/Contact';

function App() {
  const tabs = ['about', 'portfolio', 'contact']
  const [backTab, setBackTab] = useState(tabs[1])
  const [frontTab, setFrontTab] = useState(tabs[0])
  const [flipped, set] = useState(false)
  const { transform, opacity, zIndex } = useSpring({
    opacity: flipped ? 1 : 0,
    zIndex: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  const getTab = (tab) => {
    switch (tab) {
      case tabs[0]:
        return <About set={set} flipped={flipped} setBackTab={setBackTab} setFrontTab={setFrontTab} />

      case tabs[1]:
        return <Portfolio set={set} flipped={flipped} setBackTab={setBackTab} setFrontTab={setFrontTab} />

      case tabs[2]:
        return <Contact set={set} flipped={flipped} setBackTab={setBackTab} setFrontTab={setFrontTab} />

      default:
        return <About set={set} flipped={flipped} setBackTab={setBackTab} setFrontTab={setFrontTab} />
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
        {getTab(frontTab)}
      </a.div>
      <a.div
        className={styles.c}
        style={{
          opacity,
          transform,
          rotateY: '180deg',
          zIndex
        }}>
        {getTab(backTab)}
      </a.div>
    </div>
  );
}

export default App;
