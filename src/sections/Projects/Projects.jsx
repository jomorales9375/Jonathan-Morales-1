
import styles from './ProjectStyles.module.css'
import Viberr from '../../assets/viberr.png'
import ProjectCard from '../../common/ProjectCard'
import tweetFeed from '../../assets/Black and White Circle Business Logo.png'
import petAdoptt from '../../assets/Pet Adopt.png'
import guessingGame from '../../assets/guessing game.png'


function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
           <ProjectCard src={tweetFeed} link={'https://github.com/jomorales9375/Tweet-Feed-App'}
           h3='Tweet Feed' p="Tweet Feed App"/>
           <ProjectCard src={petAdoptt} link={'https://github.com/jomorales9375/Pet-Shop'}
           h3='Pet Adopt' p="Pet Adoption App"/>
           <ProjectCard src={guessingGame} link={'https://github.com/jomorales9375/guessing-game-app'}
           h3='Guessing Game' p="Guess the right number"/>
                   
        </div>
    </section>
  )
}

export default Projects
