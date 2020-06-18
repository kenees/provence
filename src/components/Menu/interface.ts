export interface IProps {
  onMenuTap: (url: IMenuUrl) => void,
  history?: any,
  route?: any,
}

export interface IState {

}

export type IMenuUrl = '/home' | '/blog';
