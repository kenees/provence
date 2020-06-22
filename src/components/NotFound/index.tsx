import React from 'react';
import NotFoundAnimate from './404';
import { IState, IProps } from './interface';
import styles from './index.module.scss'

class NotFound extends React.Component<IProps, IState> {
    letter = [
        'k', 'v', 'n', 'z', 'i', 'x', 'm', 'e', 
        't', 'a', 'x', 'l', '4', '0', '4', 'y', 
        'y', 'w', 'v', 'b', 'o', 'q', 'd', 'y',
        'p', 'a', 'p', 'a', 'g', 'e', 'v', 'j',
        'a', 'n', 'o', 't', 's', 'c', 'e', 'w',
        'v', 'x', 'e', 'p', 'c', 'f', 'h', 'q',
        'e', 'f', 'o', 'u', 'n', 'd', 's', 'w',
        'q', 'v', 'o', 's', 'm', 'v', 'f', 'u',
    ]
    template: Array<number> = [12, 13, 14, 26, 27, 28, 29, 33, 34, 35, 49, 50, 51, 52, 53]
    timer: any

    constructor(props) {
        super(props)
        this.state = {
            arr: []
        }
    }

    componentDidMount() {
        let { template } = this;
        this.timer = setInterval(() => {
            let { arr } = this.state;
            let val = template.shift();
            if (val) {
                arr.push(val)
                this.setState({
                    arr,
                })
            } else {
                clearInterval(this.timer);
            }
        }, 700)
    }

    componentWillUnmount() {
        this.timer && clearInterval(this.timer);
    }

    render() {
        const { letter, state } = this;
        let { arr } = state;
        return <div className={styles.page}>
                <div className={styles.wrap}>
                    <div className={styles.wordsearch}>
                    <ul>
                    {
                        letter.map((item, index) => <li key={index} className={arr.includes(index) ? styles.selected : ''}>{item}</li>)
                    }
                    </ul>
                    </div>
                    <div className={styles['main-content']}>
                        <NotFoundAnimate />
                        <p>很遗憾，找不到您要查找的页面</p>
                        <p>请检查您输入的URL是否有任何错误，然后重试. 或者看看我们网站的其他部分</p>
                        {/* <div className={styles.search}>
                            <form>
                            <input type="text" placeholder="Search" />
                            </form>
                        </div> */}
                        <div className={styles.navigations}>
                            <a className={styles.navigation} href="/">Home</a>
                            <a className={styles.navigation} href="/blog/0">Blog</a>
                            <a className={styles.navigation} href="/example">Example</a>
                            <a className={styles.navigation} href="/message">Message</a>
                            <a className={styles.navigation} href="/music">Music</a>
                            <a className={styles.navigation} href="/about">About</a>
                        </div>
                    </div>
                </div>
            </div>;
    }
}

export default NotFound;
