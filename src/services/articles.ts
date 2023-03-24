import { apiCaller } from '../utils/api';

export const fetchArticleApi = (limit: number, offset: number) =>
  apiCaller.get(`/articles?limit=${limit}&offset=${offset}`);

export const fetchArticlesSlugApi = (slug: string) =>
  apiCaller.get(`/articles/${slug}`);
