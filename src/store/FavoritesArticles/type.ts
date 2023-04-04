export type AuthorInfo = {
  username: string;
  bio: string | null;
  image: string;
  Following: string;
};
export type FavoritedBy = {
  id: number;
  email: string;
  username: string;
  password: string;
  image: string;
  bio: string | null;
  demo: boolean;
};

export type FavoritesArticles = {
  article: {
    id: number;
    slug: string;
    title: string;
    description: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    authorId: number;
    tagList: string[];
    author: AuthorInfo;
    favoritedBy: FavoritedBy[];
    favorited: boolean;
    favoritesCount: number;
  };
};
