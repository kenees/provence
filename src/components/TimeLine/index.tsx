import React from 'react';
import jQuery from 'jquery';
import { Props, State } from './interface';
import LeafSvg from '@/assets/timeline/leaf.svg';
import styles from './index.module.scss';


export default class TimeLine extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {
      height: 0,
    }
  }

  componentDidMount() {

  };


  render() {
    const { height } = this.state;
    return (
      <ul id='time-line' className={styles.line}>
        <div className={styles.taber} />
        <li>
          <i className={styles.circle} />
          <a>
            <img src={LeafSvg} />
          </a>
          <h6>2020</h6>

          <div className={styles.history}>
            <div className={styles.item}>
              <i className={styles.circle} />
              <p>你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊</p>
            </div>
            <div className={styles.item}>
              <i className={styles.circle} />
              <p>你好啊</p>
            </div>
            <div className={styles.item}>
              <i className={styles.circle} />
              <p>你好啊</p>
            </div>
            <div className={styles.item}>
              <i className={styles.circle} />
              <p>你好啊</p>
            </div>
          </div>

          <span />
        </li>
        <li>
          <a />
          <span />
          <i className={styles.circle} />
          <h6>2019</h6>
        </li>
        <li>
          <a />
          <span />
          <i className={styles.circle} />
          <h6>2018</h6>
        </li>
        <li>
        <a />
        <span />
        <i className={styles.circle} />
        <h6>2017</h6>
      </li>
        <li>
          <a />
          <span />
          <i className={styles.circle} />
          <h6>2018</h6>
        </li>

      </ul>
    )
  }
}