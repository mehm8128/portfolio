import styles from './Top.module.css'
import icon from '../assets/mehm8128.png'

function Top() {
  return (
    <div className={styles.top}>
      <div className={styles.header}>
        <img src={icon} alt="icon" className={styles.iconImage} />
        <span className={styles.name}>mehm8128</span>
      </div>
      <br />
      <div className={styles.text}>ちょっとした自己紹介</div>
    </div>
  )
}

export default Top
