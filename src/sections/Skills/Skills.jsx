import styles from './SkillsStyles.module.css'
import checkMarkDark from '../../assets/checkmark-dark.svg'
import checkMarkLight from '../../assets/checkmark-light.svg'
import SkillList from '../../common/SkillList'
import { useTheme } from '../../common/ThemeContext'


function Skills() {

  const {theme} = useTheme();

  const checkMark = theme === 'light' ? checkMarkLight : checkMarkDark;

  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMark} skill='HTML' />
            <SkillList src={checkMark} skill='CSS' />
            <SkillList src={checkMark} skill='JavaScript' />
            <SkillList src={checkMark} skill='React' />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMark} skill='Java' />
            <SkillList src={checkMark} skill='Python' />
            <SkillList src={checkMark} skill='Spring Boot' />
            <SkillList src={checkMark} skill='MySql' />
            <SkillList src={checkMark} skill='Git' />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMark} skill='MATLAB' />
            <SkillList src={checkMark} skill='KiCad' />
            <SkillList src={checkMark} skill='AutoCad' />
            <SkillList src={checkMark} skill='Microcontroller Programming' />
        </div>

    </section>
  )
}

export default Skills