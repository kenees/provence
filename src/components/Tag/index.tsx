import React from 'react';
import { TagsContent } from '@/const';
import history from '@/router/history';
import styles from './index.module.scss';

interface Iprops {
  id: number,
}

class Tag extends React.Component<Iprops, {}> {

  onClick = id => {
    history.push(`/blog/${id}`);
  }

  render() {
    const { id } = this.props;
    let tag =Object.assign({}, TagsContent[0], TagsContent[id]);
    if (tag.id === 0) {
      return '';
    }
    return (<div className={styles.tag} style={{background: tag.color || TagsContent[0].color}} onClick={() => this.onClick(tag.id)}>
        <i style={{'borderRightColor': tag.color || TagsContent[0].color}}></i>
        {
          tag.title
        }
    </div>)
  }
}

export default Tag;