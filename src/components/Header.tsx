import {useNavigate} from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
  const navigate = useNavigate()
  return (
    <div className={styles.header}>
      <button onClick={() => navigate('/')} className={styles.titleButton}>
        <span className={styles.title}>mehm8128のポートフォリオ</span>
      </button>
    </div>
  )
}

export default Header
