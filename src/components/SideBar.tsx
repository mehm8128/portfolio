import {useNavigate} from 'react-router-dom'
import styles from './SideBar.module.css'

function SideBar() {
  const navigate = useNavigate()
  return (
    <div className={styles.sideBar}>
      <button onClick={() => navigate('/')} className={styles.button}>
        ホーム
      </button>
      <button onClick={() => navigate('/introduction')} className={styles.button}>
        自己紹介
      </button>
      <button onClick={() => navigate('/productions')} className={styles.button}>
        制作物
      </button>
      <button onClick={() => navigate('/links')} className={styles.button}>
        リンク
      </button>
      <button onClick={() => navigate('/contact')} className={styles.button}>
        お問い合わせ
      </button>
    </div>
  )
}

export default SideBar
