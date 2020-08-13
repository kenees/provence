import React from 'react';
import { connect } from 'react-redux';
import { TagsContent } from '@/store/constants/tag';
import { BlogItem, ToTop, Tag } from '@/components';
import { IProps, IState } from './interface';
import styles from './index.module.scss';

@connect(({ user }) => ({ user }))
export default class Category extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      list: [1, 2, 3, 4, 5],
    };
  }

  render() {
    const { list } = this.state;
    const tag_key_arr = Object.keys(TagsContent);
    return (
      <div className={styles.page}>
        <aside>
          {
            tag_key_arr.length && tag_key_arr.map(item => <Tag id={TagsContent[item].id} key={item} />)
          }
        </aside>
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
