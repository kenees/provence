import React from 'react';
import Send from './Send';
import styles from './index.module.scss';

export default class Message extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
          <div className={styles.page}>
            <Send />
            <div className={styles.main}>
              <h4>106 条评论</h4>

              <div className={styles.reply}>

              </div>
            </div>
          </div>
        )
    }
}
