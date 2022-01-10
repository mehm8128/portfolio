import {useState} from 'react'
import styles from './Contact.module.css'

function Contact() {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [message, setMessage] = useState('')
  return (
    <div className={styles.contact}>
      <div className={styles.header}>
        <span className={styles.title}>お問い合わせ</span>
      </div>
      <div>説明</div>
      <div className={styles.form}>
        <form>
          <input
            type="text"
            value={name}
            placeholder="名前"
            onChange={(e) => setName(e.target.value)}
            className={styles.input1}
          />
          <input
            type="text"
            value={mail}
            placeholder="メールアドレス"
            onChange={(e) => setMail(e.target.value)}
            className={styles.input1}
          />
          <textarea
            value={message}
            placeholder="本文"
            onChange={(e) => setMessage(e.target.value)}
            className={styles.input2}
          />
          <input type="submit" value="送信" className={styles.submitButton} />
        </form>
      </div>
    </div>
  )
}

export default Contact
