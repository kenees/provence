import React from 'react';
import classNames from 'classnames';
import { menu } from '@/store/constants/menu';
import styles from './index.module.scss';

export default class Menu extends React.Component<any, any>{
    constructor(props) {
        super(props);
        this.state = {
            idx: 0,
        }
    }

    onTabChange = (item, idx) => {
        this.setState({
            idx,
        })
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
                        { item.title}
                    </div>))
                }
            </nav>
        </div>;
    }

}
