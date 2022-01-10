import styles from './Introduction.module.css'

function Introuction() {
  return (
    <div className={styles.introduction}>
      <div className={styles.header}>
        <span className={styles.title}>自己紹介</span>
      </div>
      <br />
      <div className={styles.text}>
        2021年
        <br />
        4月 東京工業大学工学院に入学
        <br />
        5月 東京工業大学デジタル創作同好会traPに入部、本格的にAtcoderを始める
        <br />
        6月 traPの部内ハッカソンで部内で制作された音楽をまとめて一覧化するWebアプリ「Qloud」制作のフロントエンドを担当
        <br />
        10月 Atcoderで茶色になる
        <br />
        12月 traPの部内ハッカソン（ピクシブ協賛）で場所法援助Webアプリ「Palamo」制作のフロントエンドを担当
        <br />
        2022年
        <br />
      </div>
    </div>
  )
}

export default Introuction
