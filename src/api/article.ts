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
 * @param article_id
 * @constructor
 */
export const GetArticleInfo = (article_id: number) => request.get('/api/v1/article', { article_id });

export const GetArticleByTag = (tag_id: string | null) => request.get('/api/v1/categories', { tag_id });
