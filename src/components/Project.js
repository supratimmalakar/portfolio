import React from 'react'
import styles from './Project.module.css'
import {useSpring, a} from 'react-spring'

function Project({title, mainImg, hoverImg, tags}) {

  const [hover, setHover] = useSpring(()=> ({
    y : -400,
  }))

  const [tagsStyle, setTags] = useSpring(() => ({
    y: 400,
  }))

  return (
    <div 
      onMouseEnter={() => {
        setHover({ y: 0 })
        setTags({y : 0})
      }} 
      onMouseLeave={() => {
        setHover({ y: -400 })
        setTags({ y: 400 })
      }} 
      className={styles.container}>
        <div className={styles.header}>
          <div className={styles.dotCont}>
            <div style={{ background: '#ff5f57'}} className={styles.dots}/>
            <div style={{ background: '#ffbd2e'}} className={styles.dots}/>
            <div style={{ background: '#28ca41'}} className={styles.dots}/>
          </div>
          <p>{title}</p>
        </div>
        <div className={styles.body}>
            <img className={styles.mainImg} src={mainImg}/>
            <a.img style={{...hover}} className={styles.hoverImg} src={hoverImg} />
            <a.div style={{ ...tagsStyle }} className={styles.tags}>
              <div className={styles['tags-wrap']}>
                {tags.map(tag => <div className={styles.tag}><p>{tag} </p></div>)}
              </div>
            </a.div>
        </div>
    </div>
  )
}

export default Project