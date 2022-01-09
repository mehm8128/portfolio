import styles from './Links.module.css'

function Links() {
  const linkList = [
    {name: 'Twitter', image: '', link: 'https://twitter.com/mehm08128'},
    {name: 'GitHub', image: '', link: 'https://github.com/mehm8128'},
    {name: 'Qiita', image: '', link: 'https://qiita.com/mehm8128'},
    {name: 'traPブログ', image: '', link: 'https://trap.jp/author/mehm8128/'},
    {name: 'Atcoder', image: '', link: 'https://atcoder.jp/users/mehm8128'},
    {name: 'お問い合わせ', image: '', link: ''},
  ]
  const listItems1 = linkList.slice(0, Math.ceil(linkList.length / 2)).map((item, index) => (
    <li key={index} className={styles.li}>
      <a href={item.link}>
        <img src={item.image} alt={item.name} />
      </a>
      <span>{item.name}</span>
    </li>
  ))
  const listItems2 = linkList.slice(Math.ceil(linkList.length / 2)).map((item, index) => (
    <li key={index} className={styles.li}>
      <a href={item.link}>
        <img src={item.image} alt={item.name} />
      </a>
      <span>{item.name}</span>
    </li>
  ))
  return (
    <div className={styles.links}>
      <div className={styles.header}>
        <span className={styles.title}>制作物</span>
      </div>
      <div className={styles.itemList}>
        <ul className={styles.ul}>{listItems1}</ul>
        <ul className={styles.ul}>{listItems2}</ul>
      </div>
    </div>
  )
}

export default Links
