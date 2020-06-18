/**
 * @Description:
 * @Author: kenevy
 * @date: 2020/5/30 0:14
 *
*/
import React from 'react';
import classnames from 'classnames';
import {observer} from 'mobx-react';
import { renderRoutes } from 'react-router-config';
import Menu from '../Menu';
import { IProps, IState, MenuUrl } from './interface';
import styles from './index.module.scss';


@observer
class Layout extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
        window_open: true
    };
  }

  componentWillMount() {
      // api.login({
      //   phone: '123456',
      //   password: 'qweasd',
      // }).then(res => {
      //   console.log(res)
      // }, err => {
      //   console.log(err)
      // })
    const { routes } = this.props.route;
    const { pathname } = this.props.location;
    if (pathname === '/') {
      this.props.history.push('/home');
      return;
    }
    if (!routes.some((item: any) => item.path === pathname)) {
      this.props.history.push('/404')
    }
  }

  componentDidMount(): void {

  }

  componentWillUnmount(): void {

  }

  // 开关window窗口
  onWindowTypeChange = (window_open: boolean) => {
    this.setState({
      window_open,
    })
  };

  onMenuTap = (url: MenuUrl) => {
    console.log(url);
    this.props.history.push(url);
    this.onWindowTypeChange(true)
  };

  render() {
    const { routes } = this.props.route;
    const { window_open } = this.state;
    const cls = classnames(styles.content,
                            window_open ? styles['view-active-show']
                                        : styles['view-active-hide']);
    return <div className={styles.layout}>
      <div className={cls}>
          <span className={styles.close} onClick={
              () => this.onWindowTypeChange(false)
          }>CLOSE WINDOW [X]</span>
          {/*//渲染子路由*/}
          {renderRoutes(routes)}
      </div>
      <Menu onMenuTap={this.onMenuTap}/>
    </div>
  }
}



export default Layout;
