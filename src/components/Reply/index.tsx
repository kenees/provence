/**
 * 回复模块
 */
import React, { useState } from 'react';
import classNames from 'classnames';
import User from '../User';
import Send from '../Send';
import ArrowSvg from '@/assets/public/arrow.svg';
import styles from './index.module.scss';

function Reply(props: any) {
  const [show, setShow] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const list = props.list || null;
  const info = props.info || null;
  console.log('list', list);
  return (
    <div className={styles.box}>
      <User />
      <div className={styles.content}>
        男人的疲惫，她怎能懂 男人也会累 也需要理解支持，我们可以为你们撑起一片天 可也需要你们的包容 家庭，老婆 孩子 双方父母 那个不是男人在支撑 有时候要句你们支持的话语怎么了 夫妻本是同林鸟，可苦难来了你在哪 为什么只能同甘不能共苦 不是全概括 只是我们没有碰到共苦的人
      </div>
      <p className={styles.answer} onClick={() => setShow(!show)}>回复</p>

      {
        show &&
        <div className={styles.send}>
          <Send />
        </div>
      }
      {
        list.length > 0 &&
          <p className={styles.answer} onClick={() => setShowAnswer(!showAnswer)}>
            查看回复
            <img src={ArrowSvg} className={classNames({[styles.rotate]: showAnswer})} />
          </p>
      }
      {
        (showAnswer && list.length > 0) ?
          <div className={styles.replay_list}>
            {
              list.map((item,idx) => <Reply info={item.info} list={item.list}  key={idx} />)
            }
          </div> : null
      }
    </div>
  )
}

export default Reply;