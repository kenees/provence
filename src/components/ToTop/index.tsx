import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';

function ToTop() {
    let timer: any = null;
    const [isTop, setIsTop] = useState(true);
    const [showBackToTop, setBackToTop] = useState(false);

    useEffect(() => {
      window.onscroll = () => {
        if (!isTop) {
          timer && clearInterval(timer);
        }
        if (window.scrollY > 100) {
          setBackToTop(true);
        } else {
          setBackToTop(false);
        }
      }
    });

    const backToTop = () => {
        timer = setInterval(() => {
        // 获取滚动条，距离顶部的高度（适配IE浏览器，google浏览器）
        const osTop = document.documentElement.scrollTop || document.body.scrollTop;
        const iSpeed = Math.floor(-osTop / 6); // 小数点，向下舍入。
        setIsTop(true);
        document.documentElement.scrollTop = document.body.scrollTop = (osTop + iSpeed);
        if (osTop == 0) {
          clearInterval(timer);
        }
      }, 10);
    };

   return (
      <div className={styles.toTop} onClick={backToTop} hidden={!showBackToTop} />
    )
}

export default ToTop;
