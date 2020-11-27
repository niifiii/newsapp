
//Schema of tables
export interface  ApiKey {
    id: number;
    apiKey: string;
}

export interface CountryList {
    id: number;
    country: string;
}

export interface NewsArticle {
    id: number;
    sourceId: string;
    sourceName: string;
    author: string;
    title: string;
    description:string;
    url: string;
    publishedAt: string;
    content: string;
}
