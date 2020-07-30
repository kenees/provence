import React from 'react';
import classNames from 'classnames';
import { Props, State } from './interface';
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
    return (
        <section className={styles.main}>
          <ul className={styles.timeline}>
            <li className={styles.event}>
              <input type="radio" name="tl-group" />
              <label></label>
              <div className={classNames(styles.thumb, styles['user-4'])}>
                <span>19 Nov</span>
              </div>
              <div className={styles['content-perspective']}>
                <div className={styles.content}>
                  <div className={styles['content-inner']}>
                    <h3>I find your lack of faith disturbing</h3>
                    <p>Don't be too proud of this technological terror you've constructed. The ability to destroy a planet is insignificant next to the power of the Force. The plans you refer to will soon be back in our hands. A tremor in the Force. The last time I felt it was in the presence of my old master. Escape is not his plan. I must face him. Alone.</p>
                  </div>
                </div>
              </div>
            </li>

            <li className={styles.event}>
              <input type="radio" name="tl-group" />
              <label></label>
              <div className={classNames(styles.thumb, styles['user-4'])}>
                <span>19 Nov</span>
              </div>
              <div className={styles['content-perspective']}>
                <div className={styles.content}>
                  <div className={styles['content-inner']}>
                    <h3>I find your lack of faith disturbing</h3>
                    <p>Don't be too proud of this technological terror you've constructed. The ability to destroy a planet is insignificant next to the power of the Force. The plans you refer to will soon be back in our hands. A tremor in the Force. The last time I felt it was in the presence of my old master. Escape is not his plan. I must face him. Alone.</p>
                  </div>
                </div>
              </div>
            </li>

            <li className={styles.event}>
              <input type="radio" name="tl-group" />
              <label></label>
              <div className={classNames(styles.thumb, styles['user-4'])}>
                <span>19 Nov</span>
              </div>
              <div className={styles['content-perspective']}>
                <div className={styles.content}>
                  <div className={styles['content-inner']}>
                    <h3>I find your lack of faith disturbing</h3>
                    <p>Don't be too proud of this technological terror you've constructed. The ability to destroy a planet is insignificant next to the power of the Force. The plans you refer to will soon be back in our hands. A tremor in the Force. The last time I felt it was in the presence of my old master. Escape is not his plan. I must face him. Alone.</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>
    )
  }
}
