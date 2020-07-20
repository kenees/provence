import React from 'react';
import { atvImg } from '@/library/card/index';
import './index.scss';

const layerImg = [
    require('@/assets/images/card/visa-bg.jpg'),
    require('@/assets/images/card/visa-bg-2.jpg'),
    require('@/assets/images/card/visa-bg-3.jpg'),
    require('@/assets/images/card/visa-bg-4.jpg'),
];

interface IState {
    list: Array<any>,
}

interface IProps {

}

class CardList extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {
            list: [0,1,2,3,4,5,6]
        }
    }
    componentDidMount(): void {
        atvImg()
    }

    render() {
        const { list } = this.state;
        return <div className='container'>
            {
                list.length && list.map(item => <div className="cover atvImg" key={item}>
                    <div className="atvImg-layer" data-img={layerImg[parseInt(`${Math.random()*4}`, 10)]} />
                    <div className="atvImg-layer">
                        <div className='card-content'>
                            <h1>粒子雪花特效</h1>
                            <p>描述，巴巴爸爸吧不不不不不不不不不不不不不不不不</p>
                            <div>
                                <nav>123</nav>
                                <i>2020-06-23</i>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    }
}

export default CardList;
