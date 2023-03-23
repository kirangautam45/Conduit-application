export type Article = {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: {
    username: string;
    bio?: string | null;
    image: string;
  };
  following: boolean;
};

export type ArticleState = {
  articles: Article[];
  articlesCount: number;
  limit: number;
  offset: number;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message?: string;
};
