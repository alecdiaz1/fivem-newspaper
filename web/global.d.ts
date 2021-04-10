declare type Article = {
  id: uuid;
  title: string;
  body: string;
}

declare type Newspaper = {
  id: string;
  articles: Article[];
}