import React from 'react';
import classNames from 'classnames';
import Menu from '../menu';
import LyricsView from '../lyricsView';
import UpIcon from '@/assets/cloudmusic/up.svg';
import DownIcon from '@/assets/cloudmusic/down.svg';
import styles from './index.module.scss';

interface IProps {

}

interface IState {
  play: boolean,
  openMusicLyrics: boolean,
  openMusicMenu: boolean,
}

export default class Player extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      play: false,
      openMusicLyrics: false,
      openMusicMenu: false,
    }
  }

  onPlayOrPauseTap = () => {
    const { play } = this.state;
    this.setState({
      play: !play,
    })
  };

  onOpenFilterTap = () => {
    const { openMusicLyrics } = this.state;
    this.setState({
      openMusicLyrics: !openMusicLyrics,
    })
  };

  onOpenMenuTap = () => {
    console.log('xxx')
    const { openMusicMenu } = this.state;
    this.setState({
      openMusicMenu: !openMusicMenu,
    })
  };

  render() {
    const { play, openMusicLyrics, openMusicMenu } = this.state;

    return (
      <div className={styles.player}>
        <div className={styles.ctrl}>
          <span className={styles.line} style={{ width: `${10}%`}} />
          <div className={styles.left}>
            <div className={styles.icon}>
              <img className={styles.pic} src={'https://img.tupianzj.com/uploads/allimg/202007/9999/rn815784ca39.jpg'} />
              {/* <div className={styles.filter} onClick={this.onOpenFilterTap}>
                <img src={openMusicLyrics ?  DownIcon : UpIcon} />
              </div> */}
            </div>
            <div className={styles.name}>
              Will - Monogem
            </div>
          </div>
          <div className={styles.center}>
            <span className={styles.prev}/>
            <span className={classNames({
                    [styles.play]: play,
                    [styles.pause]: !play,
                  })}
                  onClick={this.onPlayOrPauseTap}
            />
            <span className={styles.next}/>
          </div>
          <div className={styles.right}>
            <span className={styles.time}>00:39/03:40</span>
            <span className={styles.menu} onClick={this.onOpenMenuTap}>15</span>
          </div>
        </div>

        <Menu open={openMusicMenu} onHideTap={this.onOpenMenuTap} />
        {/* 暂时不做 */}
        {/* <LyricsView open={openMusicLyrics} /> */}
      </div>
    )
  }
}
