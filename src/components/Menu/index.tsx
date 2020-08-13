import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import {menu} from '@/store/constants/menu';
import history from '@/router/history';
import Logo from '@/assets/menu/logo.png';
import styles from './index.module.scss';

export default class Menu extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      idx: 0,
    }
  }

  componentDidMount() {
    const {location: {pathname}} = history;
    let idx = 0;
      menu.map((item, index) => {
     if (item.path === pathname) {
       idx = index;
     }
    });
    this.setState({
      idx,
    })
  }

  onTabChange = (item, idx) => {
    this.setState({
      idx,
    });
  };

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    const {idx} = this.state;
    return <div className={styles.menu}>

      <div className={styles.logo}>
        <img src={Logo}/>
      </div>

      <nav>
        <span className={styles.active_bar}
              style={{transform: `translateX(${idx * 150}px)`}}
        />
        {
          menu && menu.map((item, index) => (
            <Link to={item.path} key={item.path}>
              <div className={classNames(styles.menu_item, {
                  [styles.active]: index === idx,
                }
              )}
                   onClick={() => this.onTabChange(item, index)}
                   key={item.path}
              >
                <img src={index === idx ? item.activeIcon : item.icon} alt=''/>
                {item.title}
              </div>
            </Link>
          ))
        }
      </nav>
    </div>;
  }

}
