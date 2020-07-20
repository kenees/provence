import React from 'react';
import { connect } from 'react-redux';
import { setUserInfo } from '@/store/actions';

@connect(({ user }) => ({ user }))
export default class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
    };
  }

  add = () => {
    const { dispatch, user } = this.props;
    dispatch(setUserInfo(user.age + 1))
  };

  render() {
    const { user } = this.props;
    return (
      <div>
        { user.age }

        <button onClick={this.add}>+</button>
      </div>
    )
  }
}
