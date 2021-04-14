import React from 'react';
import {connect} from 'react-redux';
import MDEditor from '@uiw/react-md-editor';
import {IProps, IState} from './interface';
import {Link} from 'react-router-dom';
import history from '@/router/history';
import api from '@/api';
import { getQueryVariable } from '@/util/util';
import GoBackSvg from '@/assets/public/go-back.svg';
import styles from './index.module.scss';

@connect(({user}) => ({user}))
export default class Detail extends React.Component<any, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      info: {}
    }
  }

  componentWillMount() {
    const article_id = getQueryVariable('article_id');
    console.log(article_id);
    api.GetArticleInfo(Number(article_id))
      .then(res => {
        console.log('res', res)
        const list = res?.data?.article_list ?? [];
        this.setState({
          info: list[0],
        })
      })
      .catch(err => {
        console.log('err', err)
      })
  }

  onBack= () => {
    history.goBack();
  };

  render() {
    const { info } = this.state;
    const html =  info.article_content || '';
    return (
      <div className={styles.page}>
        <div className={styles.header}>
          <img className={styles.back} src={GoBackSvg} onClick={this.onBack} />
          <ul className={styles.nav}>
            <li><Link to='/'>首页</Link></li>
            <li>详情</li>
          </ul>
        </div>
        <h1 className={styles.title}>{info.article_title}</h1>
        <div className={styles.statistics}>
          <li><i className={styles.user}/>{info.edit_user}</li>
          <li><i className={styles.time}/>{new Date(info.update_at*1000).format('yyyy-MM-dd hh:mm:ss')}</li>
          <li><i className={styles.see}/>{info.reading_number || 0}</li>
          <li><i className={styles.comment}/>{info.comment_number || 0}</li>
        </div>
        <p className={styles.describe}>{info.article_describe}</p>
        <div className={styles.body}>
            <MDEditor.Markdown 
              source={html}
            />
        </div>
      </div>
    )
  }
}
