export interface Article {
  source:      Source;
  author:      string;
  title:       string;
  description: string;
  url:         string;
  urlToImage:  string;
  publishedAt: string;
  content:     string;
}

export interface Source {
  id:   string;
  name: string;
}

export interface APIResponse<T> {
  status:       string;
  totalResults: number;
  articles:     Array<T>;
}
