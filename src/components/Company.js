import React from 'react'
import styles from './Company.module.css'
import { useSpring, a } from 'react-spring'

function Company({ title, description, period, color, logo, tags, width }) {

    const [hover, setHover] = useSpring(() => ({
        y: -400,
    }))

    const [tagsStyle, setTags] = useSpring(() => ({
        y: 400,
    }))

    return (
        <div
            onMouseEnter={() => {
                setHover({ y: 0 })
                setTags({ y: 0 })
            }}
            onMouseLeave={() => {
                setHover({ y: -400 })
                setTags({ y: 400 })
            }}
            className={styles.container}>
            <div className={styles.header}>
                <div className={styles.dotCont}>
                    <div style={{ background: '#ff5f57' }} className={styles.dots} />
                    <div style={{ background: '#ffbd2e' }} className={styles.dots} />
                    <div style={{ background: '#28ca41' }} className={styles.dots} />
                </div>
                <p>{title}</p>
            </div>
            <div style={{ background: `${color}` }} className={styles.body}>
                <h3>{description}</h3>
                <img style={{width : width}} className={styles.logo} src={logo} />
                <a.div style={{ ...hover }} className={styles['black-screen']} />
                <a.div style={{ ...tagsStyle }} className={styles.tags}>
                    <div className={styles['tags-wrap']}>
                        {tags.map((tag, i) => <div key={i} className={styles.tag}><p>{tag} </p></div>)}
                    </div>
                </a.div>
            </div>
        </div>
    )
}

export default Company