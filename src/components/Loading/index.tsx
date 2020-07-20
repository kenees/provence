/**
 *  雷达扫描 Loading
*/

import React from 'react';
import styles from './index.module.scss';

class Loading extends React.Component {
  render(){
    return <div>
      <div className={styles.radar} />
    </div>
  }
}

export default Loading;
