import styles from './Production.module.css'

function Production() {
  const productionList = [{name: '', image: '', description: ''}]
  const listItems = productionList.map((item, index) => (
    <li key={index} className={styles.li}>
      <h1>{item.name}</h1>
      <img src={item.image} alt={item.name} />
      <div>{item.description}</div>
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
