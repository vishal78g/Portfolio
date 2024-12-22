import React from 'react'
import styles from './ProjectsStyles.module.css'
import keeper from '../../assets/keeper.png'
import ProjectCard from '../../common/ProjectCard'
import rd from '../../assets/RD.webp'



function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <p className={styles.beforeTitle}>Browse my recent</p>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={rd} link="https://github.com/vishal78g/POST-RD-Agent-Account-Manager" h3='RD Service' p='Account Manager App'/>
            <ProjectCard src={keeper} link="https://github.com/vishal78g/Keeper" h3='Keeper' p='Notes App'/>
        </div>
    
    
    
    </section>
  )
}

export default Projects