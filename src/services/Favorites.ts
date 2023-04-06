import { apiCaller } from '../utils/api';

export const postFavoritesArticles = (slug: string) =>
  apiCaller.post(`/articles/${slug}/favorite`);
