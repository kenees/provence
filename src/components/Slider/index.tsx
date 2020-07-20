import React from 'react';
import { Header } from '@/components'
import styles from './index.module.scss';

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

  }

  render() {
    const { children } = this.props;
    return (
      <div className={styles.slider}>
        {
          children
        }
      </div>
    )
  }
}

export default Slider;
