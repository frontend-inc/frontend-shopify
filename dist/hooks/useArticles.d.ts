declare const useArticles: () => {
    article: any;
    articles: any;
    findArticle: (blogHandle: any, articleHandle: any, perPage?: number) => Promise<any>;
    findArticles: (perPage?: number) => Promise<any>;
    loading: any;
    errors: any;
};
export default useArticles;
