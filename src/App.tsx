import styles from './App.module.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
import Introuction from './pages/Introduction'
import Productions from './pages/Productions'
import Links from './pages/Links'
import Contact from './pages/Contact'

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/introduction" element={<Introuction />} />
            <Route path="/productions" element={<Productions />} />
            <Route path="/links" element={<Links />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
