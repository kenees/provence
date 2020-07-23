import React from 'react';
import classname from 'classnames';
import styles from './index.module.scss'
import Tag from "@/components/Tag";

class BlogItem extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
    }
  }



  render() {
    return <div className={styles.item}>
      <h2>
          <span>Redis常见使用场景Redis是一个开源的使用ANSI C语言编写、支持网络、可基于内存亦可持久化的日志型、Key-Value数据库，并提供多种语言的API。本篇文章，主要介绍利用PHP使用Redis，主要的应用场景。</span>
      </h2>
      <p>Redis是一个开源的使用ANSI C语言编写、支持网络、可基于内存亦可持久化的日志型、Key-Value数据库，并提供多种语言的API。本篇文章，主要介绍利用PHP使用Redis，主要的应用场景。</p>

      <div className={styles.tags}>
        <Tag id={2} />
        <Tag id={3} />
      </div>

      <ul>
        <li><i className={styles.user} />Kenevy</li>
        <li><i className={styles.time} />2020-06-17 16:09:01</li>
        <li><i className={styles.see} />222</li>
        <li><i className={styles.comment} />4</li>
      </ul>
    </div>
  }
}

export default BlogItem;
