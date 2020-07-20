/**
 *  pc端 和 mobile 端兼容
*/
import React from 'react';
import styles from './index.module.scss';
import { HomeIcon } from '@/assets/menu'
import history from '@/router/history';


class Header extends React.Component<any, any> {
  constructor(props) {
    super(props)

    this.state = {}
  }

  goHome = () => {
    history.push('/home');
  }

  render() {
    const { title } = this.props;
    return (
      <div className={styles.header}>
        <div className={styles.home} onClick={this.goHome}>
          <img src={HomeIcon} alt='Home' />
          <span>首页</span>
        </div>
        <span className={styles.title}>{title}</span>
      </div>
    )
  }
}

export default Header;
