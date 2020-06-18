import request from '../util/request';

interface ILogin {
  phone: string,
  password: any
}

export async function login (data: ILogin) {
  return request.post('/api/login', data)
}