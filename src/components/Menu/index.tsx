import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { menu } from '@/store/constants/menu';
import history from '@/router/history';
import { updateTagList } from '@/store/actions';
import Logo from '@/assets/menu/logo.png';
import styles from './index.module.scss';
import api from "@/api";

@connect(({ tags }) => ({ tags }))
export default class Menu extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      idx: 0,
    }
  }

  componentDidMount() {
    const { location: { hash } } = history;
    this.getTag();
    let idx = 0;
    menu.map((item, index) => {
      if (('#' + item.path) === hash) {
        idx = index;
      }
    });
    this.setState({
      idx,
    });
  }

  getTag = () => {
    const { dispatch } = this.props;
    api.GetTags()
      .then((res: any) => {
        if (res.success) {
          dispatch(updateTagList(res?.data?.tag_list));
        }
      })
      .catch((err: any) => {
        console.warn('MENU: Get Tag Fail', err)
      });
  };

  onTabChange = (idx) => {
    this.setState({
      idx,
    });
  };

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    const { idx } = this.state;
    return <div className={styles.menu}>

      <div className={styles.logo}>
        <img src={Logo} />
      </div>

      <nav>
        <span className={styles.active_bar}
          style={{ transform: `translateX(${idx * 150}px)` }}
        />
        {
          menu && menu.map((item, index) => (
            <Link to={item.path} key={item.path}>
              <div className={classNames(styles.menu_item, {
                [styles.active]: index === idx,
              }
              )}
                onClick={() => this.onTabChange(index)}
                key={item.path}
              >
                <img src={index === idx ? item.activeIcon : item.icon} alt='' />
                {item.title}
              </div>
            </Link>
          ))
        }
      </nav>
    </div>;
  }

}
