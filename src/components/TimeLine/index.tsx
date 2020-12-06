import React from 'react';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import { Props, State } from './interface';
import { famous_remark } from '@/store/constants/archiving';
import styles from './index.module.scss';
import api from "@/api";
// import './modernizr.custom.63321.js'

export default class TimeLine extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {
      articleMap: {}
    }
  }

  componentWillMount() {
    const articleMap = {};
    api.GetArticleList()
      .then((res:any) => {
        if (res.success) {
          const { article_list } = res.data;
          article_list.map(item => {
            const date = new Date(item.create_at * 1000).format('yy / MM');
            if (articleMap[date]) {
              articleMap[date].push(item);
            } else {
              articleMap[date] = [item];
            }
          });
          this.setState({
            articleMap,
          })
        } else {
          console.log('Archiving: get article list fail');
        }
      })
      .catch((err: any) => {
        console.log('Archiving: get article list fail', err);
      })
  }

  render() {
    const { articleMap } = this.state;
    return (
      <section  className={classNames('main',styles.main)}>
          <ul className={styles.timeline}>
            {
              Object.keys(articleMap).map((item: any, idx: number) =>
                <li className={styles.event} key={idx}>
                  <input type='radio' name='tl-group' />
                  <label />
                  <div className={classNames(styles.thumb, styles['user-4'])}><span>{item}</span></div>
                  <div className={styles['content-perspective']}>
                    <div className={styles.content}>
                      <div className={styles['content-inner']}>
                        <h3>{famous_remark[item] || famous_remark['20 / 10']}</h3>
                        {
                          articleMap[item].map((li: any, index) => <p key={index}>
                            <Link to={`/detail?article_id=${li.article_id}`}>{index+1}.{li.article_title}</Link>
                            </p>)
                        }
                      </div>
                    </div>
                  </div>
                </li>
              )
            }
          </ul>
      </section>
    )
  }
}
