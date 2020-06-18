/**
 * @author kenevy
 * @date  22:49
 * @descript  ''
 */
import { IMenuUrl } from '../Menu/interface'

export interface IProps {
  route: {
    routes: any
  },
  location: any,
  history: any,
}

export interface IState {
  window_open: boolean,
}

export type MenuUrl = IMenuUrl;
