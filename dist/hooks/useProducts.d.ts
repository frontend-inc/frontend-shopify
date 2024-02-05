declare const useProducts: () => {
    product: any;
    products: any;
    setProduct: any;
    setProducts: any;
    fetchProduct: (handle: string) => Promise<void>;
    fetchProducts: (productsQuery: any) => Promise<any>;
    fetchProductById: (id: any) => Promise<void>;
    fetchProductRecommendations: (productId: any) => Promise<void>;
    searchProducts: (searchParams: any) => Promise<any>;
    hasNextPage: any;
    cursor: any;
    setCursor: any;
    loading: any;
    errors: any;
};
export default useProducts;
