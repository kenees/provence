import React from 'react';
import { connect } from 'react-redux';
import { TagsContent } from '@/store/constants/tag';
import { BlogItem, ToTop, Tag } from '@/components';
import { IProps, IState } from './interface';
import api from '@/api';
import styles from './index.module.scss';

@connect(({ user, tags }) => ({ user, tags }))
export default class Category extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentWillMount() {

    this.getArticle(null);
  }

  getArticle = (tag_id: string | null) => {
    api.GetArticleByTag(tag_id)
      .then((res: any) => {
        if (res.success) {
          this.setState({
            list: res.data.article_list,
          })
        } else {
          this.setState({
            list: []
          })
        }
      })
      .catch((err:any) => {
        console.warn('CATEGORY: get article list fail', err)
      })
  };

  render() {
    const { list } = this.state;
    const { tags } = this.props;
    console.log('tags', tags)
    const tag_key_arr = tags.tag_list || [];
    return (
      <div className={styles.page}>
        <aside>
          {
            tag_key_arr.length && tag_key_arr.map(item =>
              <Tag id={item.tag_id}
                   key={item.tag_id}
                   onTap={() => this.getArticle(item.tag_id)}
              />)
          }
        </aside>
        <div className={styles.main}>
          {
            list.length && list.map(item => <BlogItem info={item} key={item.article_id} />)
          }
        </div>
        <ToTop />
      </div>
    )
  }
}
