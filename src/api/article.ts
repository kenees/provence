/**
 * @author kenevy
 * @date  21:02
 * @describe  '博客模块的api'
 */

import request from '@/util/request';

/**
 * 获取博客列表
 */
export const GetArticleList = () => request.get('/api/v1/article', {});
/**
 * 获取博客详情
 */
export const GetArticleInfo = (article_id: number)=> request.get('/api/v1/article', { article_id });
