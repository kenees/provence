import React from 'react';
import { Slider } from '@/components';
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
      console.log(this.props)
      const { match } = this.props;
      const { params: { type } } = match;
      console.log(type)
      const hasTag = TagsContent[type] || false;
      if (!hasTag) {
        history.push('/404')
      }

        return <div className={styles.blog}>
            <Slider>
              <Tags  />
            </Slider>

            <div className={styles.contain}>
              boke: {
                type
              }
            </div>
        </div>
    }
}



export default Blog;
