export type Article = {
  title: string;
  description: string;
  body: string;
  createdAt: string;
  favoritesCount: number;
  slug: string;
  author: {
    username: string;
    bio?: string | null;
    image: string;
  };
  tagList: string[];
};

export type ArticleState = {
  articles: Article[]
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message?: string;
};
