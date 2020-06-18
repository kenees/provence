import React, { Component, SFC } from 'react';

// 定义接口
export interface IprogressProps {
  color?: string,
  background?: string,
  className?: string,
  onOk: () => void,

}

export interface IprogressState {
  name: string,
}

// 无状态组件
// const Button: React.SFC = () => {
//   return (<div>+</div>)
// }


// 传递props
// const Button: React.SFC<IprogressProps> = (props: IprogressProps) => {
//   const { color, background} = props;
//   return (<div>{color} {background}</div>)
// }


// 有状态组件
class Button extends React.Component<IprogressProps, IprogressState>{
  constructor(props: IprogressProps) {
    super(props);
    this.state = {
      name: '',
    }
  }

  setName = () => {
    this.setState({
      name: 'lucy',
    })
  };

  submit = () => {
    const { onOk } = this.props
    onOk && onOk()
  }


  render() {
    const { onOk, ...resProps} = this.props
    return (
      <div onClick={this.submit} { ...resProps }>button</div>
    )
  }
}

export default Button;
