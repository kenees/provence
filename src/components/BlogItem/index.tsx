import React from 'react';
import {Link} from 'react-router-dom';
import styles from './index.module.scss'
import Tag from "@/components/Tag";

function BlogItem(props) {
  const { info } = props;
  const { article_tag } = info || '';
  return <Link className={styles.item} to={`/detail?article_id=${info.article_id}`}>
    <h2>
      <span>{info.article_title}</span>
    </h2>
    <p>{info.article_describe}</p>

    <div className={styles.tags}>
      {
        article_tag.split(',').map(item => <Tag id={Number(item)} tags={item} key={item} />)
      }
    </div>

    <ul>
      <li><i className={styles.user}/>{info.edit_user}</li>
      <li><i className={styles.time}/>{new Date(info.update_at*1000).format('yyyy-MM-dd hh:mm:ss')}</li>
      <li><i className={styles.see}/>{info.reading_number || 0}</li>
      <li><i className={styles.comment}/>{info.comment_number || 0}</li>
    </ul>
  </Link>
}

export default BlogItem;