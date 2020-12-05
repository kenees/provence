/**
 * @author kenevy
 * @date  16:27
 * @describe  ''
 */

import React from 'react';
import styles from './index.module.scss';

interface IProps {
  open: boolean,
}

interface IState {

}

export default class LyricsView extends React.Component<IProps, IState>{

  constructor(props) {
    super(props);
    this.state = {
      height: 0,
    }
  }

  componentDidMount() {
    let height = window.innerHeight;
    window.onresize = () => {
      let height = window.innerHeight;
      this.setState({
        height,
      })
    }
  }

  render() {
    const { open = false } = this.props;
    const { height } = this.state;
    return(
      <div className={styles.lyrices} style={{height: `${open ? height : 0}px`}}>
        2334
        </div>
    )
  }
}