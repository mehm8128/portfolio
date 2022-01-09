import styles from './Introduction.module.css'

function Introuction() {
  return (
    <div className={styles.introduction}>
      <div className={styles.header}>
        <span className={styles.title}>自己紹介</span>
      </div>
      <br />
      <div className={styles.text}>しっかりした自己紹介</div>
    </div>
  )
}

export default Introuction
