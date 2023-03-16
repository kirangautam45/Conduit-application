import { apiCaller } from "../utils/api";
export const fetchArticleApi = () => apiCaller.get("/articles");

