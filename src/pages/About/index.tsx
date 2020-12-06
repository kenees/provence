import React from 'react';
import styles from './index.module.scss';

export default class About extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className={styles.page}>
              <ul>
                <li>
                  <span className={styles.title}>个人信息</span>
                  <p>一名90后web前端开发，也会些服务端的活 </p>
                  <p>主要做些管理系统，小程序，H5之类的</p>
                  <p>现在在魔都上海工作，有选择困难症^_^</p>
                  <p>喜欢看动漫，小说，玩游戏，当然也喜欢旅游</p>
                </li>

                <li>
                  <span className={styles.title}>关于博客</span>
                  <p>目前只有一个静态页面，后面打算做个管理系统，小程序，完善下内容。</p>
                  <p>平时比较喜欢记一些笔记，但是经常找不到地方...所以做个网站整理下, hahaha</p>
                  <p>因为不想用一些三方库，所以决定从零开始，用的webpack+react+react-router-dom+redux</p>
                  <p>后台打算用python+flask</p>
                  <p>主要就是技术文档，另外加了个标签分类</p>
                  <p>996的生活已经开始麻木了，利用仅有的空闲时间做点自己想做的了</p>
                </li>

                <li>
                  <span className={styles.title}>更新日志</span>
                  <div>
                    <p>2020/05 - 2020/08</p>
                    <ol>
                      <li>完成博客静态页面和内容构思</li>
                      <li>开始准备做管理系统</li>
                    </ol>
                  </div>
                  <div>
                    <p>2020/09 - 2020/012</p>
                    <ol>
                      <li>完成管理系統</li>
                    </ol>
                  </div>
                </li>
              </ul>
            </div>
        )
    }
}
