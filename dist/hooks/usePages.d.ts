declare const usePages: () => {
    loading: any;
    errors: any;
    page: any;
    fetchPage: (handle: any) => Promise<any>;
};
export default usePages;
