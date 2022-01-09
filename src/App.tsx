import styles from './App.module.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Top from './pages/Top'
import Layout from './components/Layout'
import Introuction from './pages/Introduction'
import Production from './pages/Production'
import Links from './pages/Links'

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Top />} />
            <Route path="/introduction" element={<Introuction />} />
            <Route path="/production" element={<Production />} />
            <Route path="/links" element={<Links />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
