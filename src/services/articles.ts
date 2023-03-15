import apiCaller from "../api";
export const fetchArticleApi = () =>
  //   apiCaller.get("articles?limit=10&offset=0");
  apiCaller.get("/articles?limit=10&offset=0");
