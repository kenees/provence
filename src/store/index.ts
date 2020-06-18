/**
 * @Description: 状态管理库
 * @Author: kenevy
 * @date: 2020/5/30 0:11
 *
*/
import api from '../api';
import { observable, computed, action, configure } from 'mobx';
// 不允许在动作之外进行状态修改, 异步操作回调中不允许修改store
configure({ enforceActions: 'observed' });

class Store {
  @observable price: number = 11110;
  @observable amount: number = 11;

  @observable systemInfo: any = {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  };

  @computed get total(): number {
    return this.price * this.amount;
  };

  @action
  fetchAmount = () => {
    api.getList().then(res => {
      console.log(res);
      this.increment()
    }
      ).catch(err => {

    })
  };

  @action
  increment = () => {
    console.log('increment..');
    this.price++
  };

  @action.bound
  fetchPrice() {
    setTimeout(() => {
      this.increment()
    }, 10)
  };


  @action
  fetchSystem = (systemInfo: any) => {
    this.systemInfo = systemInfo;
  }
}
const store = new Store();

export default store;
