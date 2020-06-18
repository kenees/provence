import React from 'react';
import Button from '../Button'
import {IProps, IState} from './interface';
import styles from './index.module.scss';

class Menu extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        console.log(this.props)
    }

    componentDidMount(): void {
        console.log(this.props)
    }

    componentWillUnmount(): void {

    }


    render() {
        const {onMenuTap} = this.props;
        return (<div className={styles.menu}>
            <Button onClick={() => onMenuTap('/home')}/>
            <Button onClick={() => onMenuTap('/blog')}/>
            <Button onClick={() => onMenuTap('/home')}/>
            <Button onClick={() => onMenuTap('/blog')}/>
        </div>)
    }
}


export default Menu;
