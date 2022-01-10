import {useLocation, useNavigate} from 'react-router-dom'
import styles from './SideBar.module.css'

function SideBar() {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div className={styles.sideBar}>
      <button
        onClick={() => navigate('/')}
        className={location.pathname === '/' ? styles.buttonHere : styles.buttonNotHere}>
        ホーム
      </button>
      <button
        onClick={() => navigate('/introduction')}
        className={location.pathname === '/introduction' ? styles.buttonHere : styles.buttonNotHere}>
        自己紹介
      </button>
      <button
        onClick={() => navigate('/productions')}
        className={location.pathname === '/productions' ? styles.buttonHere : styles.buttonNotHere}>
        制作物
      </button>
      <button
        onClick={() => navigate('/links')}
        className={location.pathname === '/links' ? styles.buttonHere : styles.buttonNotHere}>
        リンク
      </button>
      <button
        onClick={() => navigate('/contact')}
        className={location.pathname === '/contact' ? styles.buttonHere : styles.buttonNotHere}>
        お問い合わせ
      </button>
    </div>
  )
}

export default SideBar
