import { RootState } from '../index';

export const articleSelector = (state: RootState) => {
  const { articles, limit, offset, articlesCount, isLoading, isSuccess } =
    state.article;
  return {
    articles,
    limit,
    offset,
    articlesCount,
    isLoading,
    isSuccess,
  };
};
