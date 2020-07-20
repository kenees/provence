import React from 'react';
import {Slider, Loading, BlnControl, Header} from '@/components';
import CardList from './CardList';
import { TagsContent } from '@/const/tag';
import Tags from './tags';
import history from '@/router/history';
import styles from './index.module.scss';



class Blog extends React.Component<any, any>{

    componentWillMount(): void {
      // console.log(this.props)
      console.log(11)
    }

    render() {
      const { match } = this.props;
      const { params: { type } } = match;
      const hasTag = TagsContent[type] || false;
      if (!hasTag) {
        history.push('/404')
      }

        return <div className={styles.blog}>
            <div className={styles.section}>
                <Slider>
                    <Header title={'博客'} />
                    <Tags  />
                </Slider>

                <div className={styles.contain}>
                    <CardList  />
                </div>
            </div>

        </div>
    }
}



export default Blog;
