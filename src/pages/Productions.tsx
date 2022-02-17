import styles from './Productions.module.css'

function Production() {
  return (
    <div className={styles.production}>
      <div className={styles.header}>
        <span className={styles.title}>制作物</span>
      </div>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <h1>
            <a href="https://frontend-opal-delta-19.vercel.app/" className={styles.link}>
              Palamo
            </a>
          </h1>
          <div className={styles.itemContent}>
            <div className={styles.description}>
              <span className={styles.content}>
                traPの2021冬ハッカソン(ピクシブ様協賛)で作った場所法援助アプリ。クライアントを担当した。クライアントはReact+TypeScript、サーバーはgolangで作られている。自分が担当したのは宮殿一覧、テンプレート一覧やクイズ機能、通信周りなど
              </span>
            </div>
          </div>
        </li>
        <li className={styles.li}>
          <h1>
            <a href="https://github.com/traPtitech/Jomon-UI" className={styles.link}>
              Jomon
            </a>
          </h1>
          <div className={styles.itemContent}>
            <div className={styles.description}>
              traPの会計支援サービス。Vueで作られていて、状態管理にpinia、CSSにWindi CSSが使われている。まだ開発中。
            </div>
          </div>
        </li>
        <li className={styles.li}>
          <h1>
            <a href="https://concise-sns.vercel.app/" className={styles.link}>
              簡易SNS
            </a>
          </h1>
          <div className={styles.itemContent}>
            <div className={styles.description}>
              <span className={styles.content}>
                golangで書いたサーバーをherokuでデプロイし、Reactで適当にクライアントを作って名前と本文を投稿できるようにした。RDBMSにはPostgreSQLを使っている。CSSはstyled-componentsを使っている。
              </span>
            </div>
          </div>
        </li>
        <li className={styles.li}>
          <h1>
            <a href="https://github.com/mehm8128/TwitterBot" className={styles.link}>
              TwitterBot
            </a>
          </h1>
          <div className={styles.itemContent}>
            <div className={styles.description}>
              node.jsを使ってTwitterBotを作った。ライブラリは
              <a href="https://github.com/PLhery/node-twitter-api-v2">node-twitter-api-v2</a>
              を使った。現在は自動返信機能のみ。デプロイはherokuを使っている。
            </div>
          </div>
        </li>
        <li className={styles.li}>
          <h1>
            <a href="https://github.com/mehm8128/traq-mehm8128-bot" className={styles.link}>
              traQBot
            </a>
          </h1>
          <div className={styles.itemContent}>
            <div className={styles.description}>
              node.jsを使ってtraQBotを作った(traQとはtraP内SNS)。ライブラリは
              <a href="https://github.com/sapphi-red/hubot-traq">hubot-traq</a>
              を使った。デプロイはtraP内サービスのshowcaseを使っている。
            </div>
          </div>
        </li>
        <li className={styles.li}>
          <h1>
            <a href="https://event-app-ecru.vercel.app/" className={styles.link}>
              クリスマスツリー飾りつけアプリ
            </a>
          </h1>
          <div className={styles.itemContent}>
            <div className={styles.description}>
              クリスマス前に作ったクリスマスツリー飾りつけWebアプリ。Reactで作った。
            </div>
          </div>
        </li>
        <li className={styles.li}>
          <h1>
            <a href="https://vue-practice-vert.vercel.app/" className={styles.link}>
              TODOリスト
            </a>
          </h1>
          <div className={styles.itemContent}>
            <div className={styles.description}>
              <span className={styles.content}>
                Jomonを開発する前に練習として作ったToDoリスト(とカウンター)。状態管理にpiniaを使い、CSSにはWindi
                CSSを使っている。また、データをローカルストレージに保存できるようにした。
              </span>
            </div>
          </div>
        </li>
        <li className={styles.li}>
          <h1>
            <a href="https://sns-for-engineers.vercel.app/" className={styles.link}>
              SNS for engineers
            </a>
          </h1>
          <div className={styles.itemContent}>
            <div className={styles.description}>
              <span className={styles.content}>
                Qiitaの
                <a href="https://qiita.com/HawkClaws/items/599d7666f55e79ef7f56" className={styles.link}>
                  この記事
                </a>
                を見てクライアントを作った。Reactで作った。
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
/*
<li className={styles.li}>
  <h1>
    <a href={productionList[数字].link} className={styles.link}>
      {productionList[数字].name}
    </a>
  </h1>
  <div className={styles.itemContent}>
    <div className={styles.description}>
      説明
    </div>
  </div>
</li>
*/
export default Production
