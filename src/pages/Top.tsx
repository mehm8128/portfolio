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
      <div className={styles.text}>
        ここはmehm8128のポートフォリオサイトです
        <br />
        左のサイドバーから詳細な自己紹介や制作物、リンクなどのページへ飛ぶことができます
        <br />
        <br />
        所属：東京工業大学工学院情報通信系、東京工業大学デジタル創作同好会traP
        <br />
        やってること：Web（主にフロントエンド）、競プロ（Atcoder）、CTF
        <br />
        <br />
        Web：フロントエンドはReact、Vue、TypeScriptなど、バックエンドはGolang
        <br />
        競プロ：主にPython。C++は勉強中
        <br />
        CTF：
        <br />
      </div>
    </div>
  )
}

export default Top
