import React from 'react';
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

  render() {
    const { sheetList } = this.state;
    return (
      <div className={styles.sheet}>
        <p>推荐歌单</p>
        <ul>
          {
            sheetList.length > 0 && sheetList.map(item =>
              <li key={item}>
                <img
                  src='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1316481062,4224934627&fm=26&gp=0.jpg'
                  alt=''/>
                <span className={styles.tag}>
                  <img src={MusicIcon}/>
                  111111
                </span>
                <div className={styles.mask}>
                  <span/>
                </div>
              </li>
            )
          }

        </ul>
      </div>
    )
  }
}