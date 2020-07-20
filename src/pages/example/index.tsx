import React from 'react';
import CardList from './CardList';
import styles from './index.module.scss';
import {Header, Slider} from "@/components";
import Tags from "@/pages/bolg/tags";

class Example extends React.Component {
    render() {
        return <div className={styles.example}>
            <div className={styles.section}>
                <Slider>
                    <Header title={'example'} />
                </Slider>
                <div className={styles.contain}>
                    <CardList  />
                </div>
            </div>
        </div>
    }
}

export default Example;
