import React from 'react';
import { connect } from 'react-redux';
import { TimeLine, ToTop, Tag } from '@/components';
import { IProps, IState } from './interface';
import styles from './index.module.scss';

@connect(({ user }) => ({ user }))
export default class Archiving extends React.Component<IProps, IState> {

  render() {
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
