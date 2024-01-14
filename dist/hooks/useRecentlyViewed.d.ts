declare const useRecentlyViewed: () => {
    products: any;
    viewProduct: (product: any) => void;
    removeProduct: (product: any) => void;
};
export default useRecentlyViewed;
