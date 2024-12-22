import styles from "./HeroStyles.module.css"
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import twitterLight from "../../assets/twitter-light.svg"
import twitterDark from "../../assets/twitter-dark.svg"
import githubLight from "../../assets/github-light.svg"
import githubDark from "../../assets/github-dark.svg"
import linkedinLight from "../../assets/linkedin-light.svg"
import linkedinDark from "../../assets/linkedin-dark.svg"
import cv from "../../assets/cv.pdf"
import { useTheme } from "../../common/ThemeContext"
import photo from '../../assets/photo.png'
import profilePhoto from '../../assets/profile-photo.png'

function Hero() {
  const {theme,toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon ;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark ;
  const githubIcon = theme === 'light' ? githubLight : githubDark ;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark ;

  return (<>
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img 
        className={styles.hero} 
        src={profilePhoto} 
        alt="profile image" />
        <img 
        className={styles.colorMode}
        src={themeIcon} 
        alt="theme chenge icon" 
        onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Vishal <br /> Ghorpade</h1>
        <h2>Full stack Developer</h2>
        <span>
          <a href="https://twitter.com" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/vishal78g" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>
          <a href="https://linkedin.com/in/vishal-ghorpade-236289213" target="_blank">
            <img src={linkedinIcon} alt="linkedIn icon" />
          </a>
        </span>
        <a href={cv} download>
          <button className="hover" >Resume</button>
        </a>
      </div>

    </section>
    
    
    
    </>)
}


export default Hero