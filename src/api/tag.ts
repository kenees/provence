/**
 * @author kenevy
 * @date  22:22
 * @describe  ''
 */

import request from '@/util/request';

/**
 * 获取标签列表
 */
export const GetTags = () => request.get('/api/v1/tags',{});
