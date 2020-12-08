/**
 * 回复模块头像，昵称，时间等
 */
import React from 'react';
import styles from './index.module.scss';


function User() {
  return (
    <div className={styles.user}>
        <div className={styles.avatar}>
          {/*<img src={''} />*/}
          xx
        </div>
        <div className={styles.info}>
          <p>艾伦</p>
          <span>2017年9月4日 22:01</span>
        </div>
    </div>
  )
}

export default User;