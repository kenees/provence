import React from 'react';
import {connect} from 'react-redux';
import {IProps, IState} from './interface';
import {Link} from 'react-router-dom';
import history from '@/router/history';
import api from '@/api';
import GoBackSvg from '@/assets/public/go-back.svg';
import styles from './index.module.scss';

@connect(({user}) => ({user}))
export default class Detail extends React.Component<IProps, IState> {

  componentWillMount() {
    const xx = this.props;
    console.log(xx);
    // api.GetArticleInfo()
    //   .then(res => {
    //
    //   })
    //   .catch(err => {
    //
    //   })
  }

  onBack= () => {
    history.goBack();
  };

  render() {
    const html =  "<p>xxxxx</p>";
    return (
      <div className={styles.page}>
        <div className={styles.header}>
          <img className={styles.back} src={GoBackSvg} onClick={this.onBack} />
          <ul className={styles.nav}>
            <li><Link to='/'>首页</Link></li>
            <li>详情</li>
          </ul>
        </div>
        <h1>这是标题</h1>
        <div className={styles.body} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    )
  }
}
