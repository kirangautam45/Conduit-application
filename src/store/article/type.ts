export type ArticleType = {
  title: string;
  description: string;
  body: string;
  createdAt: string;
  favoriteCount: number;
  slug: string;
  author: {
    username: string;
    bio?: string;
    image: string;
  };
  tagList: string[];
};

export type ArticleState = {
  articleList: ArticleType;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message?: string;
};
