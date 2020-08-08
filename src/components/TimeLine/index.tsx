import React from 'react';
import classNames from 'classnames';
import { Props, State } from './interface';
import styles from './index.module.scss';
// import './modernizr.custom.63321.js'

export default class TimeLine extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  };


  render() {
    return (
      <section  className={classNames('main',styles.main)}>
          <ul className={styles.timeline}>
            <li className={styles.event}>
              <input type='radio' name='tl-group' />
              <label></label>
              <div className={classNames(styles.thumb, styles['user-4'])}><span>19 Nov</span></div>
              <div className={styles['content-perspective']}>
                <div className={styles.content}>
                  <div className={styles['content-inner']}>
                    <h3>I find you lack of faith disturbing</h3>
                    <p>Don't be too proud of this technological terror you</p>
                  </div>
                </div>
              </div>
            </li>

            <li className={styles.event}>
              <input type='radio' name='tl-group' />
              <label></label>
              <div className={classNames(styles.thumb, styles['user-4'])}><span>19 Nov</span></div>
              <div className={styles['content-perspective']}>
                <div className={styles.content}>
                  <div className={styles['content-inner']}>
                    <h3>I find you lack of faith disturbing</h3>
                    <p>Don't be too proud of this technological terror you</p>
                  </div>
                </div>
              </div>
            </li>

            <li className={styles.event}>
              <input type='radio' name='tl-group' />
              <label></label>
              <div className={classNames(styles.thumb, styles['user-4'])}><span>19 Nov</span></div>
              <div className={styles['content-perspective']}>
                <div className={styles.content}>
                  <div className={styles['content-inner']}>
                    <h3>I find you lack of faith disturbing</h3>
                    <p>Don't be too proud of this technological terror you</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
      </section>
    )
  }
}
