import React from 'react';
import { connect } from 'react-redux';
import { setUserInfo } from '@/store/actions';
import { BlogItem, ToTop } from '@/components';
import { IProps, IState } from './interface';
import styles from './index.module.scss';

@connect(({ user }) => ({ user }))
export default class Home extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      list: [1, 2, 3, 4, 6],
    };
  }

  render() {
    const { list } = this.state;
    return (
      <div className={styles.page}>
        {/* 暂不开发 */}
        {/*<aside>*/}
            {/*个人信息*/}
        {/*</aside>*/}
        <div className={styles.main}>
          {
            list.length && list.map(item => <BlogItem key={item} />)
          }
        </div>
        <ToTop />
      </div>
    )
  }
}
