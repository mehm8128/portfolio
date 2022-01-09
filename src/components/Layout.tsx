import styles from './Layout.module.css'
import {Outlet} from 'react-router'
import Header from './Header'
import SideBar from './SideBar'

function Layout() {
  return (
    <div>
      <Header />
      <div className={styles.layout}>
        <SideBar />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
