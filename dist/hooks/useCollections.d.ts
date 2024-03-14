declare const useCollections: () => {
    cursor: any;
    hasNextPage: any;
    setHasNextPage: any;
    collection: any;
    collections: any;
    findCollection: (handle: any, query?: any) => Promise<void>;
    findCollections: (perPage?: number) => Promise<void>;
    image: any;
    products: any;
    loading: any;
    errors: any;
};
export default useCollections;
