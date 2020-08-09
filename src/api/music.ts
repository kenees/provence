import request from '../util/request';

/**
 * 获取网易云歌单
 * @param id
 */
export async function getPayList (id: number) {
    return request.get(`/music/?type=playlist&id=${id}`, {})
}


