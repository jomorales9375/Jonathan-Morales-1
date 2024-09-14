import styles from './SkillStyles.module.css'
import SkillList from '../../common/SkillList'
import { useTheme } from '../../common/ThemeContext';
import checkMarkDarkIcon from '../../assets/checkmark-dark.svg';
import checkMarkLightIcon from '../../assets/checkmark-light.svg'


function Skills() {

   const { theme } = useTheme(); 

 
   const checkMarkIcon = theme === 'light' ? checkMarkLightIcon : checkMarkDarkIcon;
   

  return (
    <section id="skills" className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill="HTML" />
           <SkillList src={checkMarkIcon} skill="CSS" />
           <SkillList src={checkMarkIcon} skill="Javascript" />
           <SkillList src={checkMarkIcon} skill="Typescript" />
           <SkillList src={checkMarkIcon} skill="Node" />

        </div>

        <hr />

        <div className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill="React" />
           <SkillList src={checkMarkIcon} skill="Angular" />
           <SkillList src={checkMarkIcon} skill="Bootstrap" />
           <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
        

        </div>

        <hr />
        <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="SQL" />
           <SkillList src={checkMarkIcon} skill="MongoDB" />
           <SkillList src={checkMarkIcon} skill="Git" />
           <SkillList src={checkMarkIcon} skill="REST API" />
           </div>


    </section>


  )
}

export default Skills
