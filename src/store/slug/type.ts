export type ArticleSlug = {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  favorited: boolean;
  author: {
    username: string;
    bio?: string | null;
    image: string;
  };
  following: boolean;
  favoritesCount: number;
};

export type ArticleSlugState = {
  articleSlug: ArticleSlug;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
};
