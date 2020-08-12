/**
 * @author kenevy
 * @date  16:27
 * @descript  ''
 */

import React from 'react';
import styles from './index.module.scss';

interface IProps {
  open: boolean,
  onHideTap: () => void,
}

interface IState {
  list: Array<any>,
  activeIndex: number,
}

export default class MusicMenu extends React.Component<IProps, IState>{
  constructor(props: IProps) {
    super(props);

    this.state = {
      list: [1,2,3,4,5, 6, 7, 8],
      activeIndex: 0,
    }
  }

  hideMenu = () => {
    const { onHideTap } = this.props;
    if (onHideTap) {
      onHideTap()
    }
  };

  render() {
    const { open = false } = this.props;
    const { list } = this.state;
    return(
      <div className={styles.list} style={{ 'height': `${open ? 500: 0 }px`}}>
        <p className={styles.title}>播放队列</p>
        <p className={styles.del} />
        <ul>
          {
            list.length && list.map(item =>
              <li>
                  <div className={styles.describe}>
                    <span> A cut in love {item}</span>
                    <span className={styles.auth}>作者</span>
                  </div>
                  <div className={styles.time}>
                    <span>03:30</span>
                  </div>
                  <div className={styles.operation}>
                    <span>x</span>
                    <span className={styles.delete} />
                  </div>
              </li>
            )
          }
        </ul>
        <footer>
          <span onClick={this.hideMenu} />
        </footer>
      </div>
    )
  }
}