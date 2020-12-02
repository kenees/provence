import React from 'react';
import { PAY_LIST } from '@/store/constants/music';
import { fNumber } from '@/util/util';
import api from '@/api';
import MusicIcon from '@/assets/cloudmusic/music.svg';
import styles from './index.module.scss';


interface IProps {

}

interface IState {
  sheetList: Array<any>,
}

export default class SongSheet extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      sheetList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    }
  }

  componentDidMount() {
    console.log(PAY_LIST);
    this.setState({
      sheetList: PAY_LIST || [],
    })
  }

  playSongList = (id) => {
    // get list
    api.getPayList(id)
      .then(res => {
        console.log('res', res);
      })
      .catch(err => {
        console.error('get pay list err', err)
      })
  };

  render() {
    const { sheetList } = this.state;
    return (
      <div className={styles.sheet}>
        <p className={styles.title}>推荐歌单</p>
        <ul>
          {
            sheetList.length > 0 && sheetList.map(item =>
              <li key={item.id}
                onClick={() => this.playSongList(item.id)}
              >
                <img
                  src={item.url}
                  alt=''/>
                <span className={styles.tag}>
                  <img src={MusicIcon}/>
                  {fNumber(item.number || 0)}
                </span>
                <div className={styles.mask}>
                  <span/>
                </div>
                <p className={styles.name}>{item.name}</p>
              </li>
            )
          }

        </ul>
      </div>
    )
  }
}