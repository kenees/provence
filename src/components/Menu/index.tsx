import React from 'react';
import classNames from 'classnames';
import { menu } from '@/store/constants/menu';
import history from '@/router/history';
import styles from './index.module.scss';

export default class Menu extends React.Component<any, any>{
    constructor(props) {
        super(props);
        this.state = {
            idx: 0,
        }
    }

    componentDidMount(){
      const { location: { pathname }} = history;
      const activeMenu = menu.filter(item => item.path === pathname)[0] || { id: 0 };
      this.setState({
        idx: activeMenu.id,
      })
    }

    onTabChange = (item, idx) => {
        this.setState({
            idx,
        });
        history.push(item.path);
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const { idx } = this.state;
        return <div className={styles.menu}>
            <div className={styles.logo}>
                ChengZi
            </div>
            <nav>
                <span className={styles.active_bar}
                    style={{transform: `translateX(${idx * 122}px)` }}
                />
                {
                    menu && menu.map((item, index) => (<div className={classNames(styles.menu_item, {
                                                                            [styles.active]: index === idx,
                                                                        }
                                                            )}
                                                          onClick={() => this.onTabChange(item, index)}
                                                          key={item.path}
                    >
                        <img src={index === idx ? item.activeIcon : item.icon} alt='' />
                        { item.title }
                    </div>))
                }
            </nav>
        </div>;
    }

}
