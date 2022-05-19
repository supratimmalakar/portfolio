import React from 'react'
import styles from './Social.module.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';


function Social() {
  return (
    <div className={styles.container}>
        <div className={`${styles.box} ${styles.github}`}>
            <GitHubIcon fontSize='large' style={{color:'#fff', position : 'absolute', top: 10, right: 10}}/>
        </div>
        <div className={`${styles.box} ${styles.linkedin}`}>
            <LinkedInIcon fontSize='large' style={{color:'#fff', position : 'absolute', top: 10, right: 10}}/>
        </div>
        <div className={`${styles.box} ${styles.facebook}`}>
            <FacebookIcon fontSize='large' style={{color:'#fff', position : 'absolute', top: 10, right: 10}}/>
        </div>
        <div className={`${styles.box} ${styles.instagram}`}>
            <InstagramIcon fontSize='large' style={{color:'white', position : 'absolute', top: 10, right: 10}}/>
        </div>
    </div>
  )
}

export default Social