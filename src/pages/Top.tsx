import styles from './Top.module.css'
import icon from '../assets/mehm8128.png'
import {useNavigate} from 'react-router-dom'

function Top() {
  const navigate = useNavigate()
  return (
    <div className={styles.top}>
      <div className={styles.header}>
        <img src={icon} alt="icon" className={styles.iconImage} />
        <span className={styles.name}>mehm8128</span>
      </div>
      <br />
      <div className={styles.text}>ちょっとした自己紹介</div>
      <div className={styles.buttons}>
        <button onClick={() => navigate('/introduction')} className={styles.button}>
          自己紹介
        </button>
        <button onClick={() => navigate('/production')} className={styles.button}>
          制作物
        </button>
        <button onClick={() => navigate('/links')} className={styles.button}>
          リンク
        </button>
      </div>
    </div>
  )
}

export default Top
