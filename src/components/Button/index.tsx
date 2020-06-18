import React from 'react';
import classname from 'classnames';
import styles from './index.module.scss'

class Button extends React.Component<any, any> {
    timer: any;

    constructor(props: any) {
        super(props);
        this.state = {
            mouse: '',
        }
    }

    mouseOver = (e: any) => {
        e.preventDefault();
        this.setState({mouse: ''}, () => {
            this.setState({
                mouse: 1
            })
        })
    };

    mouseOut = (e: any) => {
        e.preventDefault();
        this.setState({mouse: ''}, () => {
            this.setState({
                mouse: 2
            })
        })
    };

    render() {
        const {mouse} = this.state;
        const {onClick} = this.props;
        let cls = classname('', mouse === 1 ? styles.animation1 : '');
        cls = classname(cls, mouse === 2 ? styles.animation2 : cls);
        return <div className={styles.button}
                    onMouseEnter={this.mouseOver}
                    onMouseLeave={this.mouseOut}
                    onClick={onClick}
        >
            <ul className={cls}>
                <li>PORTFOLIO</li>
                <li>PORTFOLIO</li>
            </ul>
        </div>
    }
}

export default Button;
