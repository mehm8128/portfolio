import styles from './Productions.module.css'

function Production() {
  const productionList = [
    {
      name: 'Palamo',
      description:
        'traPの2021冬ハッカソン(ピクシブ協賛)で作った場所法援助アプリ。クライアントを担当した。クライアントはReact+TypeScript、サーバーはgolangで作られている。',
      link: 'https://frontend-opal-delta-19.vercel.app/',
    },
    {
      name: 'SNS for engineers',
      description: 'Qiitaのこの記事を見てクライアントを作った。Reactで作った。',
      link: 'https://sns-for-engineers.vercel.app/',
    },
    {
      name: 'クリスマスツリー飾りつけアプリ',
      description: 'クリスマス前に作ったクリスマスツリー飾りつけWebアプリ。Reactで作った。',
      link: 'https://event-app-ecru.vercel.app/',
    },
  ]
  const listItems = productionList.map((item, index) => (
    <li key={index} className={styles.li}>
      <h1>{item.name}</h1>
      <div className={styles.itemContent}>
        <div className={styles.description}>{item.description}</div>
        <a href={item.link}>{item.link}</a>
      </div>
    </li>
  ))

  return (
    <div className={styles.production}>
      <div className={styles.header}>
        <span className={styles.title}>制作物</span>
      </div>
      <ul className={styles.ul}>{listItems}</ul>
    </div>
  )
}

export default Production
