import { ShopifyQueryParams } from '../types';
declare const useOrders: () => {
    loading: any;
    errors: any;
    order: any;
    orders: any;
    fetchCustomerOrder: (orderId: any) => Promise<any>;
    fetchCustomerOrders: (queryParams: ShopifyQueryParams) => Promise<any>;
};
export default useOrders;
