export type DefaultTags = {
  tags: string;
};

export type DefaultTagsState = {
  tags: DefaultTags[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
};
