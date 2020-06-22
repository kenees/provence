import React from 'react';
import { Tag } from '@/components'
import styles from './tags.module.scss';

function Tags(props) {
  return (<div className={styles.tags}>
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
  </div>)
}

export default Tags;