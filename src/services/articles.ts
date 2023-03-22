import { apiCaller } from '../utils/api';
export const fetchArticleApi = () => apiCaller.get('/articles');

export const fetchArticlesSlugApi = (slug: string) =>
  apiCaller.get(`/articles/${slug}`);
