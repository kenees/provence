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

export default class MusicMenu extends React.Component<IProps, {}>{
  constructor(props: IProps) {
    super(props);

    this.state = {

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

    return(
      <div className={styles.list} style={{ 'height': `${open ? 500: 0 }px`}}>
        <p className={styles.title}>播放队列</p>
        <p className={styles.del} />
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
        </ul>
        <footer>
          <span onClick={this.hideMenu} />
        </footer>
      </div>
    )
  }
}