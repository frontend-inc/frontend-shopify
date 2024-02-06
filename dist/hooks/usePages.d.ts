declare const usePages: () => {
    loading: any;
    errors: any;
    page: any;
    findPage: (handle: any) => Promise<any>;
};
export default usePages;
