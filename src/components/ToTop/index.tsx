import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';

interface IProps {

}

interface IState {
  isTop: boolean,
  showBackToTop: boolean,
}

class ToTop extends React.Component<IProps, IState>{
    timer: any = null;
    constructor(props) {
      super(props);
      this.state = {
        isTop: true,
        showBackToTop: false,
      }
    }

    componentDidMount() {
      const { timer } = this;
      const { isTop } = this.state;
      window.onscroll = () => {
        if (!isTop) {
          timer && clearInterval(timer);
        }
        if (window.scrollY > 100) {
          this.setState({
            showBackToTop: true,
          })
        } else {
          this.setState({
            showBackToTop: false,
          })
        }
      }
    }

    componentWillUnmount() {
      this.timer && clearInterval(this.timer);
      window.onscroll = null;
    }



    backToTop = () => {
        let { timer } = this;
        timer = setInterval(() => {
        // 获取滚动条，距离顶部的高度（适配IE浏览器，google浏览器）
        const osTop = document.documentElement.scrollTop || document.body.scrollTop;
        const iSpeed = Math.floor(-osTop / 6); // 小数点，向下舍入。
        this.setState({
          isTop: true,
        });
        document.documentElement.scrollTop = document.body.scrollTop = (osTop + iSpeed);
        if (osTop == 0) {
          clearInterval(timer);
        }
      }, 10);
    };

    render() {
      const { showBackToTop } = this.state;
      return (
        <div className={styles.toTop} onClick={this.backToTop} hidden={!showBackToTop} />
      )
    }
}

export default ToTop;
