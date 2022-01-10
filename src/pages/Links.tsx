import {useNavigate} from 'react-router-dom'
import styles from './Links.module.css'

function Links() {
  const navigate = useNavigate()
  const linkList = [
    {name: 'Twitter', link: 'https://twitter.com/mehm08128'},
    {name: 'GitHub', link: 'https://github.com/mehm8128'},
    {name: 'Qiita', link: 'https://qiita.com/mehm8128'},
    {name: 'traPブログ', link: 'https://trap.jp/author/mehm8128/'},
    {name: 'Atcoder', link: 'https://atcoder.jp/users/mehm8128'},
  ]
  const listItems1 = linkList.slice(0, Math.ceil(linkList.length / 2)).map((item, index) => (
    <li key={index} className={styles.li}>
      <span className={styles.itemContent}>
        <a href={item.link} className={styles.link}>
          {item.name}
        </a>
      </span>
    </li>
  ))
  const listItems2 = linkList.slice(Math.ceil(linkList.length / 2)).map((item, index) => (
    <li key={index} className={styles.li}>
      <span className={styles.itemContent}>
        <a href={item.link} className={styles.link}>
          {item.name}
        </a>
      </span>
    </li>
  ))
  return (
    <div className={styles.links}>
      <div className={styles.header}>
        <span className={styles.title}>リンク</span>
      </div>
      <div className={styles.itemList}>
        <ul className={styles.ul}>{listItems1}</ul>
        <ul className={styles.ul}>{listItems2}</ul>
      </div>
    </div>
  )
}

export default Links
