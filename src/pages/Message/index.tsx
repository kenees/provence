import React from 'react';
import { Reply, Send } from '@/components';
import { IProps, IState } from './interface';
import styles from './index.module.scss';

export default class Message extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
          reply_list: [
            {
              info: {},
              list: [
                {
                  info: {},
                  list: [
                    {
                      info: {},
                      list: []
                    },
                    {
                      info: {},
                      list: []
                    }
                  ]
                }
              ]
            },
            {
              info: {},
              list: [
                {
                  info: {},
                  list: []
                }
              ]
            },
            {
              info: {},
              list: [
                {
                  info: {},
                  list: []
                }
              ]
            }
          ]
        };
    }

    render() {
      const { reply_list } = this.state;
        return (
          <div className={styles.page}>
            <Send />
            <div className={styles.main}>
              <h4>106 条评论</h4>

              <div className={styles.reply}>
                {
                  reply_list.length &&
                    reply_list.map((item, idx) => <Reply info={item.info} list={item.list} key={idx} />)
                }
              </div>
            </div>
          </div>
        )
    }
}
