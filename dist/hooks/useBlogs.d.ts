declare const useBlogs: () => {
    articles: any;
    blog: any;
    blogs: any;
    fetchBlog: (handle: any, perPage?: number) => Promise<any>;
    fetchBlogs: (perPage?: number) => Promise<any>;
    loading: any;
    errors: any;
};
export default useBlogs;
