import React, {useState} from 'react';
import styles from './index.module.scss'

function Send(props) {

  const [content, setContent] = useState('');

  const onChange = (e) => {
    const { value } = e.target;
    setContent(value);
  };

  const onSend = () => {
    if (!content.length){
      return
    }
    console.log('SEND:', content);
  };

  return (
    <div className={styles.send}>
      <textarea placeholder='期待你的神评论' maxLength={150} onChange={(e) => onChange(e)} />
      <div className={styles.btn} onClick={onSend}>发布</div>
      <span className={styles.cont}>{content.length}/150</span>
    </div>
  )
}

export default Send;