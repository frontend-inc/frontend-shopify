import { MetafieldIdentifier } from '../types';
declare const useProducts: () => {
    product: any;
    products: any;
    setProduct: any;
    setProducts: any;
    findProduct: (handle: string, metafields?: MetafieldIdentifier[]) => Promise<void>;
    findProducts: (productsQuery: any) => Promise<any>;
    findProductById: (id: any) => Promise<void>;
    findProductRecommendations: (productId: any) => Promise<void>;
    searchProducts: (searchParams: any) => Promise<any>;
    hasNextPage: any;
    cursor: any;
    setCursor: any;
    loading: any;
    errors: any;
};
export default useProducts;
