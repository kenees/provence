import request from '../util/request';

export async function getList () {
  // return request.get('/api', {})
  return request.get('/api/list', {})
}

