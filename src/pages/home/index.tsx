import React from 'react';
import classNames from 'classnames';
import {observer} from 'mobx-react';
import history from '@/router/history';
import {Menu} from "@/const";
import {IProps, IState} from './interface';
import logo from '@/assets/images/logo.png';
import styles from './index.module.scss';

@observer
class Home extends React.Component<IProps, IState> {
    timer: any;

    constructor(props: IProps) {
        super(props);
        this.state = {
            isMobile: false,
            index: -1,
        }
    };

    componentDidMount(): void {
        const that = this;
        that.timer = setTimeout(() => {
            that.onMouseEnter(0);
            clearTimeout(that.timer);
        }, 300);
        window.onresize = function (res: any) {
            const {innerWidth} = res.target;
            const {isMobile} = that.state;
            if (isMobile !== that.isMobile(innerWidth)) {
                that.setState({
                    isMobile: that.isMobile(innerWidth),
                })
            }
        }
    };

    componentWillUnmount(): void {
        this.timer && clearTimeout(this.timer);
    }

    isMobile = (innerWidth: number) => {
        return innerWidth < 600
    };

    onMouseEnter = (index: number = 0) => {
        this.setState({
            index,
        })
    };

    navigation = (url: string) => {
        history.push(url)
    };

    onTabClick = (e: number) => {
        const { index } = this.state;
        if (e === index) {
            this.navigation(Menu[e].navigate);
        } else {
            this.onMouseEnter(e)
        }
    }

    render() {
        const {
                isMobile, index
            } = this.state,
            cls = classNames(styles.home, {
                [styles.mobile]: isMobile,
                [styles['preview-blog']]: index === 0,
                [styles['preview-example']]: index === 1,
                [styles['preview-message']]: index === 2,
                [styles['preview-music']]: index === 3,
                [styles['preview-about']]: index === 4,
            }),
            cursorStyle = {
                color: 'red',
                transform: `translateY(${index * 100}px)`
            },
            spinner = classNames(styles.spinner, styles.spinning, styles.desktop);

        return (<div className={cls}>
            <img className={styles.logo} src={logo} alt='logo'/>
            <div className={styles.title}>Mr.Wang</div>
            <ul>
                <span className={styles.cursor} style={cursorStyle}/>
                {
                    Menu.map((item, idx) => (
                        <li key={item.title} onMouseEnter={() => this.onMouseEnter(idx)} onClick={() => this.navigation(item.navigate)}>
                            <strong>{item.title}</strong>
                            <small>{item.describe}</small>
                        </li>
                    ))
                }
            </ul>
            <ol className={classNames(styles.desktop, styles.stationary)}>
                <li> blog</li>
                <li> example</li>
                <li> message</li>
                <li> music</li>
                <li> about</li>
            </ol>
            <div className={spinner}>
                <span className={styles.rings}>
                    <span className={styles.group1}>
                        <span className={classNames(styles.ring, styles.zero)}/>
                    </span>
                    <span className={styles.group0}>
                        <span className={classNames(styles.ring, styles.one)}/>
                    </span>
                    <span className={styles.group2}>
                        <span className={classNames(styles.ring, styles.two)}/>
                    </span>
                    <span className={styles.group3}>
                        <span className={classNames(styles.ring, styles.three)}/>
                        <span className={classNames(styles.ring, styles.four)}/>
                    </span>
                </span>
                <div className={styles['blog-preview']} onClick={() => this.onTabClick(0)}>
                    <div>
                        <span>ALL</span>
                        <span>BLOG</span>
                    </div>
                    <section className={styles.active}>
                         <p className={styles.piece}>
                             <span>100</span>
                             <span>Piece</span>
                         </p>
                        <p className={styles.tags}>
                            <span>20</span>
                            <span>tags</span>
                        </p>
                    </section>
                </div>
                <div className={styles['example-preview']} onClick={() => this.onTabClick(1)}>
                    <div>
                        <span>NEW</span>
                        <span>EXAMPLE</span>
                    </div>
                    <section className={styles.active}>
                        <p className={styles.piece}>
                            <span>100</span>
                            <span>Piece</span>
                        </p>
                        <p className={styles.tags}>
                            <span>2</span>
                            <span>tags</span>
                        </p>
                    </section>
                </div>
                <div className={styles['message-preview']} onClick={() => this.onTabClick(2)}>
                    <div>
                        <span>HOT</span>
                        <span>MESSAGE</span>
                    </div>
                    <section className={styles.active}>
                        <p className={styles.piece}>
                            <span>300</span>
                            <span>Message</span>
                        </p>
                    </section>
                </div>
                <div className={styles['music-preview']} onClick={() => this.onTabClick(3)}>
                    <div>
                        <span>BEAST</span>
                        <span>MUSIC</span>
                    </div>
                    <section className={styles.active}>
                        <p className={styles.piece}>
                            <span>100</span>
                            <span>PLAY</span>
                        </p>
                    </section>
                    {/*<span>music / 播放图标</span>*/}
                {/*
                    当前正在播放的音乐 / 音乐播放器
                */}
                </div>
                <div className={styles['about-preview']} onClick={() => this.onTabClick(4)}>
                    <div>
                        <span>EMAIL</span>
                        <span>GITHUB</span>
                    </div>
                    <section className={styles.active}>
                        <p className={styles.about}>
                            <span>ABOUT</span>
                        </p>
                    </section>
                    {/*
                        中间显示  项目运行时间
                                 访问人数
                     */}
                </div>
            </div>
        </div>);
    }
}

export default Home;
