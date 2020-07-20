import React from 'react';
import styles from './wall.module.scss'

class Wall extends React.Component{
    render() {
        return <div className={styles.wall}>
            <div className={styles['rotate-box']}>
                sdsds
            </div>
            <div className={styles['center-rotate']}>
                dfd
            </div>

        </div>
    }
}

export default Wall;
