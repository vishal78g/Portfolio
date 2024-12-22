import linkedinDark from "../../assets/linkedin-dark.svg"
import linkedinLight from "../../assets/linkedin-light.svg"
import gmailDark from '../../assets/gmail-light.svg' //change this
import gmailLight from '../../assets/gmail-dark.svg'
import whatsrDark from "../../assets/whatsapp-dark.svg"//change this
import whatsLight from "../../assets/whatsapp-light.svg"
import { useTheme } from '../../common/ThemeContext';
import styles from './ContactStyles.module.css'

function Contact() {
    
    const {theme} = useTheme();
  const gmailIcon = theme === 'light' ? gmailLight : gmailDark ;
  const whatsIcon = theme === 'light' ? whatsLight : whatsrDark ;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark ;
  return (
    <section id='contact' className={styles.container}> 
        <p className={styles.beforeTitle}>Get in Touch</p>
        <h1 className='sectionTitle'>Contact Me</h1>
        <div className={styles.myInfo}>
            <div className={styles.info}>
                <img src={gmailIcon} alt="gmail" />
                <p><a href="mailto:v7503g@gmail.com" target="_blank">v7503g@gmail.com</a></p>
            </div>
            <div className={styles.info}>
                <img src={linkedinIcon} alt="linkedin" />
                <p><a href="https://linkedin.com/in/vishal-ghorpade-236289213" target="_blank">LinkedIn</a></p>
            </div>
            <div className={styles.info}>
                <img src={whatsIcon} alt="whatsapp" />
                <p><a href="https://wa.me/7038537533" target="_blank">WhatsApp</a></p>
            </div>
        </div>

        <form action="">
            <div className='formGroup'>
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input type="text" name='name' id='name' placeholder='Name' required/>
            </div>
            <div className='formGroup'>
                <label htmlFor="email" hidden>
                    Email
                </label>
                <input type="email" name='email' id='email' placeholder='Email' required/>
            </div>
            <div className='formGroup'>
                <label htmlFor="message" hidden>
                    Message
                </label>
                <textarea name='message' id='message' placeholder='Message' required></textarea>
            </div>
            <input className='hover btn' value='Submit' type="submit" />
        </form>
    </section>
  )
}

export default Contact