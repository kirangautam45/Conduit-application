import { RootState } from '../index';

export const articleSlugSelector = (state: RootState) => {
  const { articleSlug, isLoading, isSuccess, isError } = state.articleSlug;
  return {
    articleSlug,
    isLoading,
    isSuccess,
    isError,
  };
};
