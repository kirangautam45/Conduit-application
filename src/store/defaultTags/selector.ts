import { RootState } from '../index';

export const defaultTagsSelector = (state: RootState) => {
  // state.defaultTags.tags;

  const { tags, isLoading, isSuccess } = state.defaultTags;
  return { tags, isLoading, isSuccess };
};
