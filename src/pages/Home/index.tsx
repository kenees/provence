import React from 'react';
import { connect } from 'react-redux';
import { setUserInfo } from '@/store/actions';
import { BlogItem } from '@/components';
import { IProps, IState } from './interface';
import styles from './index.module.scss';

@connect(({ user }) => ({ user }))
export default class Home extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      list: [1, 2, 3, 4, 4],
    };
  }

  render() {
    const { list } = this.state;
    return (
      <div className={styles.page}>
        <aside>
            个人信息
        </aside>
        <div className={styles.main}>
          {
            list.length && list.map(item => <BlogItem/>)
          }
        </div>
        </div>
    )
  }
}
