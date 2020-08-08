import React from 'react';
import { connect } from 'react-redux';
import { TagsContent } from '@/store/constants/tag';
import { TimeLine, ToTop, Tag } from '@/components';
import { IProps, IState } from './interface';
import styles from './index.module.scss';

@connect(({ user }) => ({ user }))
export default class Archiving extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      list: [1, 2, 3, 4, 4, 1,1,1,1,1,1],
    };
  }

  render() {
    const { list } = this.state;
    const tag_key_arr = Object.keys(TagsContent);
    return (
      <div className={styles.page}>
        <div className={styles.main}>
            <TimeLine />
        </div>
        <ToTop />
      </div>
    )
  }
}
