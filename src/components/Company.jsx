import React from 'react'
import styles from './Company.module.css'
import { useSpring, a } from 'react-spring'
import {Grid} from '@material-ui/core'

function Company({ title, description, period, color, logo, tags, width }) {

    return (
      <Grid container direction="row" spacing={1}>
        <Grid item xs={12} sm={8}>
          <h1 className={styles['title']}>{title}</h1>
          <p className={styles['description']}>{description}</p>
          <div className={styles["tags-wrap"]}>
            {tags.map((tag, i) => (
              <div key={i} className={styles.tag}>
                <p>{tag} </p>
              </div>
            ))}
          </div>
          <h3 className={styles['period']}>{period}</h3>
        </Grid>
        <Grid container item xs={0} sm={4} justifyContent='center' alignItems='center'>
            <img className={styles.image} style={{width : width}} alt={title} src={logo}/>
        </Grid>
      </Grid>
    );
}

export default Company