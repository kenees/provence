import React from 'react';
import { connect } from 'react-redux';
import { DEFAULT_TAG } from '@/store/constants/tag';
import history from '@/router/history';
import styles from './index.module.scss';

interface IProps {
  id: number,
  tags?: any,
  onTap?: () => void
}

@connect(({ tags }) => ({ tags }))
class Tag extends React.Component<IProps, {}> {

  onClick = id => {
    const { onTap } = this.props;
    // history.push(`/blog/${id}`);
    onTap && onTap()
  };

  render() {
    const { id, tags } = this.props;
    let tag = tags.tag_list.filter(item => item.tag_id === id)[0];
        tag = Object.assign({}, DEFAULT_TAG, tag);
    if (tag.tag_id === 0) {
      return '';
    }
    return (<div className={styles.tag}
                 style={{background: tag.default_color}}
                 onClick={() => this.onClick(tag.tag_id)}>
              <i style={{'borderRightColor': tag.default_color}} />
                {
                  tag.tag_name
                }
          </div>
    )
  }
}

export default Tag;
