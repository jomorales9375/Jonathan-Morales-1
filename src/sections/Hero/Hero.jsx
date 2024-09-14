import React, { useState } from 'react'
import styles from './HeroStyles.module.css'
import heroImg from '../../assets/Untitled design.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedIn-light.svg'
import linkedinDark from '../../assets/linkedIn-dark.svg'
import CV from '../../assets/Resume (5).pdf'
import { useTheme } from '../../common/ThemeContext'


function Hero() {
    const { theme, toggleTheme } =  useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
   
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedInIcon = theme === 'light' ? linkedinLight : linkedinDark;


  return <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img className={styles.hero} 
                src={heroImg} 
                alt="Profile picture" 
        />
        <img className={styles.colorMode} 
            src={themeIcon} 
            alt='Color Mode Icon'
            onClick={toggleTheme}>
        </img>
    </div>
    <div className={styles.info}>
        <h1>Jonathan <br/> Morales</h1>
        <h2>Full Stack Web Developer</h2>
        <span>
            
            <a href="https://github.com/jomorales9375" target='_blank'>
            <img src={githubIcon} alt="github Icon" /> 
            </a>
            <a href="https://www.linkedin.com/in/jonathan-morales-867440294" target='_blank'>
            <img src={linkedInIcon} alt="linkedIn Icon" />
             </a>
        </span>
        <p className={styles.description}>Full stack web developer specializing in building seamless, user-centric applications with modern technologies for both front-end and back-end solutions.</p>
        <a href={CV} download>
            <button className="hover" download>Resume</button>
        </a>
    </div>
     
  </section>

 
}

export default Hero
