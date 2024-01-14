declare const useArticles: () => {
    article: any;
    articles: any;
    fetchArticle: (blogHandle: any, articleHandle: any, perPage?: number) => Promise<any>;
    fetchArticles: (perPage?: number) => Promise<any>;
    loading: any;
    errors: any;
};
export default useArticles;
