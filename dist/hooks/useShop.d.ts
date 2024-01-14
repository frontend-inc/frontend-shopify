declare const useShop: () => {
    loading: any;
    errors: any;
    shop: any;
    findShop: () => Promise<any>;
};
export default useShop;
