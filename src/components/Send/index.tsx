import React, {useState} from 'react';
import styles from './index.module.scss'

function Send(props) {

  const [content, setContent] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const onChange = (e) => {
    const { value } = e.target;
    setContent(value);
  };

  const onSend = () => {
    if (!content.length || !name || !email){
      return
    }

    console.log('SEND:', content, name, email);
  };

  return (
    <div className={styles.send}>
      <textarea placeholder='期待你的神评论' maxLength={150} onChange={(e) => onChange(e)} />
      <span className={styles.cont}>{content.length}/150</span>
      <ul className={styles.user}>
        <li>
          <span>昵称:</span>
          <input placeholder='请输入昵称' onChange={(e) => setName(e.target.value)} />
        </li>
        <li>
          <span>邮箱:</span>
          <input placeholder='请输入邮箱' onChange={(e) => setEmail(e.target.value)} />
        </li>
      </ul>
      <div className={styles.btn} onClick={onSend}>发布</div>
    </div>
  )
}

export default Send;