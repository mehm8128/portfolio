import {useState} from 'react'
import styles from './Contact.module.css'
import {init} from 'emailjs-com'
import emailjs from 'emailjs-com'

function Contact() {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [message, setMessage] = useState('')

  function onClickSendMail(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    if (name !== '' && message !== '') {
      init(process.env.REACT_APP_USER_ID!)

      const emailjsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID
      const emailjsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID

      const templateParams = {
        name: name,
        mail: mail,
        message: message,
      }

      emailjs.send(emailjsServiceId!, emailjsTemplateId!, templateParams).then(() => {
        setName('')
        setMail('')
        setMessage('')
        alert('送信されました')
      })
    } else {
      alert('名前と本文は必須です')
    }
  }
  return (
    <div className={styles.contact}>
      <div className={styles.header}>
        <span className={styles.title}>お問い合わせ</span>
      </div>
      <div className={styles.text}>
        何かありましたらご連絡ください。名前と本文のみ必須ですが、メールアドレスが記入されていない場合返信できません。
      </div>
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
          <button className={styles.submitButton} onClick={(e) => onClickSendMail(e)}>
            送信
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
