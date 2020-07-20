import React, { useState } from 'react';
import classNames from 'classnames';
import { Tag } from '@/components';
import styles from './tags.module.scss';

function Tags(props) {
  let [show, setShow] = useState(false);

  const onMenuTap = () => {
    setShow(!show);
  };

  const onContentTap = e => {
    if (e.target.className.indexOf('Tag') <= -1) {
      e.stopPropagation()
    }
  };

  return (<div className={styles.tags} style={{ left: show ? 0 : '100%'}} onClick={onMenuTap}>
    <img src={require('@/assets/menu/tag.png')} onClick={onMenuTap} style={{ opacity: show ? 0 : 1}} alt='' />
    <div className={classNames(styles.content, {
      [styles.translate]: show,
    })} key='content' onClick={(e) => onContentTap(e)} >
      <p>Tags</p>
      <Tag id={0} />
      <Tag id={1} />
      <Tag id={2} />
      <Tag id={4} />
      <Tag id={5} />
      <Tag id={3} />
      <Tag id={6} />
      <Tag id={7} />
      <Tag id={8} />
      <Tag id={9} />
      <Tag id={10} />
      <Tag id={11} />
      <Tag id={12} />
      <Tag id={13} />
      <Tag id={14} />
    </div>
  </div>)
}

export default Tags;
