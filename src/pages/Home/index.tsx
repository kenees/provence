import React from 'react';
import { connect } from 'react-redux';
import { setUserInfo } from '@/store/actions';
import { BlogItem, ToTop } from '@/components';
import { IProps, IState } from './interface';
import api from '@/api';
import styles from './index.module.scss';

@connect(({ user }) => ({ user }))
export default class Home extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    api.GetArticleList()
      .then((res: any) => {
        console.log('HOME: get article list success', res);
        if (res.success) {
          this.setState({
            list: res?.data?.article_list ?? [],
          })
        }
      })
      .catch((e: any) => {
        console.warn('HOME: get article list fail', e);
      })
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
            list.length && list.map(item => <BlogItem info={item}  key={item.article_id} />)
          }
        </div>
        <ToTop />
      </div>
    )
  }
}
