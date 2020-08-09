import React from 'react';
import Player from './player';
import BannerSwipe from './swiper';
import styles from './index.module.scss';


export default class CloudMusic extends React.Component {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <div className={styles.musicContent}>
            <BannerSwipe />
            <Player />
        </div>
    }
}
