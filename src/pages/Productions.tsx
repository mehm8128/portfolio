import styles from './Productions.module.css'

function Production() {
  const productionList = [
    {
      name: 'Palamo',
      link: 'https://frontend-opal-delta-19.vercel.app/',
    },
    {
      name: 'SNS for engineers',
      link: 'https://sns-for-engineers.vercel.app/',
    },
    {
      name: 'クリスマスツリー飾りつけアプリ',
      link: 'https://event-app-ecru.vercel.app/',
    },
  ]

  return (
    <div className={styles.production}>
      <div className={styles.header}>
        <span className={styles.title}>制作物</span>
      </div>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <h1>
            <a href={productionList[0].link} className={styles.link}>
              {productionList[0].name}
            </a>
          </h1>
          <div className={styles.itemContent}>
            <div className={styles.description}>
              traPの2021冬ハッカソン(ピクシブ協賛)で作った場所法援助アプリ。クライアントを担当した。クライアントはReact+TypeScript、サーバーはgolangで作られている。
            </div>
          </div>
        </li>
        <li className={styles.li}>
          <h1>
            <a href={productionList[1].link} className={styles.link}>
              {productionList[1].name}
            </a>
          </h1>
          <div className={styles.itemContent}>
            <div className={styles.description}>
              Qiitaの
              <a href="https://qiita.com/HawkClaws/items/599d7666f55e79ef7f56" className={styles.link}>
                この記事
              </a>
              を見てクライアントを作った。Reactで作った。
            </div>
          </div>
        </li>
        <li className={styles.li}>
          <h1>
            <a href={productionList[2].link} className={styles.link}>
              {productionList[2].name}
            </a>
          </h1>
          <div className={styles.itemContent}>
            <div className={styles.description}>
              クリスマス前に作ったクリスマスツリー飾りつけWebアプリ。Reactで作った。
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Production
