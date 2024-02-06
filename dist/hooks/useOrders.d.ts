import { ShopifyQueryParams } from '../types';
declare const useOrders: () => {
    loading: any;
    errors: any;
    order: any;
    orders: any;
    findCustomerOrder: (orderId: any) => Promise<any>;
    findCustomerOrders: (queryParams: ShopifyQueryParams) => Promise<any>;
};
export default useOrders;
