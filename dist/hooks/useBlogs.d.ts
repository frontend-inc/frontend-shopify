declare const useBlogs: () => {
    articles: any;
    blog: any;
    blogs: any;
    findBlog: (handle: any, perPage?: number) => Promise<any>;
    findBlogs: (perPage?: number) => Promise<any>;
    loading: any;
    errors: any;
};
export default useBlogs;
