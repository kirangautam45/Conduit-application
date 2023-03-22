import { apiCaller } from '../utils/api';
export const fetchArticleApi = () => apiCaller.get('/articles');

export const fetchArticlesSlungApi = (slug: string) =>
  apiCaller.get(`/articles/${slug}`);
