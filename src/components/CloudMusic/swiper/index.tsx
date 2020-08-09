import React from 'react';
import classNames from 'classnames';
import $ from 'jQuery';
import styles from './index.module.scss';

interface IState {
    index: number,
    arr: Array<any>
}

interface IProps {

}

export default class BannerSwipe extends React.Component<IProps, IState>{

    timer: any;
    constructor(props: IProps) {
        super(props);
        this.state = {
            index: 6,
            arr: [1,2,3,4,5,6,7],
        }
    }

    componentDidMount(): void {
        this.loop();
        this.pageVisibleListener()
    }

    componentWillUnmount(): void {
        this.timer && clearInterval(this.timer);
    }

    pageVisibleListener = () => {
        const that = this;
        document.addEventListener('visibilitychange', function () {
            if (document.hidden) {
                clearInterval(that.timer);
            } else {
                that.loop();
            }
        })
    };

    onSlideTap = (index) => {
        this.setState({
            index,
        })
    };

    loop = () => {
        const { arr } = this.state;
        const len = arr.length;
        this.timer && clearInterval(this.timer);
        this.timer = setInterval(() => {
            let { index } = this.state;
            index --;
            if (index < 0) {
                index = len - 1
            }
            this.setState({
                index,
            })
        }, 3000);
    };

    onMouseEnter = () => {
        this.timer && clearInterval(this.timer);
    };

    onMouseLeave = () => {
        this.timer && clearInterval(this.timer);
        this.loop();
    };

    render() {
        const { arr, index } = this.state;
        const len = arr.length;
        return (
             <div className={styles.container}
                  onMouseEnter={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}
             >
                 {
                     arr.map((item, idx) => <div
                         key={item}
                         className={classNames(styles.slide,
                             {
                                 [styles.prev]: (idx === index - 1 || (index ===0 && idx === len - 1)),
                                 [styles.active]: idx === index,
                                 [styles.next]: (idx === index + 1 || (index === len - 1 && idx === 0 )),
                             }
                        )}
                        onClick={() => this.onSlideTap(idx)}
                     >
                         { item }
                     </div>)
                 }
             </div>
        )
    }
}
