import React from 'react';
import { CloudMusic } from '@/components';
import styles from './index.module.scss';

export default class Music extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className={styles.page}>
                <div className={styles.main}>
                    <CloudMusic />
                </div>
            </div>
        )
    }
}
