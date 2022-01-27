import styles from './Home.module.css'
import icon from '../assets/mehm8128.png'

function Home() {
  return (
    <div className={styles.top}>
      <div className={styles.header}>
        <img src={icon} alt="icon" className={styles.iconImage} />
        <span className={styles.name}>mehm8128</span>
      </div>
      <br />
      <div className={styles.text}>
        ここはmehm8128（読み方：めふも）のポートフォリオサイトです。
        <br />
        左のサイドバーから詳細な自己紹介や制作物、リンクなどのページへ飛ぶことができます。
        <br />
        <br />
        所属：東京工業大学工学院、東京工業大学デジタル創作同好会traP（SysAd班、アルゴリズム班）
        <br />
        やってること：Web（主にフロントエンド）、競プロ（Atcoder）、CTF
        <br />
        <br />
        Web：フロントエンドはReact、Vue、TypeScriptなど、バックエンドはGolangを主に使います。
        <br />
        競プロ：主にPython。C++は勉強中。
        <br />
        CTF：これから活動予定。
        <br />
      </div>
    </div>
  )
}

export default Home
