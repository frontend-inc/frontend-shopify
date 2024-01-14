import { Address, Customer, QueryResponse, ShopifyQueryParams, ProductCollectionFilter, ProductCollectionSortKey } from './types';
export declare class ShopifyClient {
    private _first?;
    private _filters?;
    private _sortKey?;
    private _reverse?;
    private _after?;
    private _query?;
    private _accessToken?;
    private _fetchAccessToken?;
    private apollo;
    constructor(domain: string, storefrontAccessToken: string, fetchAccessToken?: () => string, apiVersion?: string);
    init(): ShopifyClient;
    first(first: number): ShopifyClient;
    after(after: string): ShopifyClient;
    sort(sortKey: ProductCollectionSortKey): ShopifyClient;
    accessToken(token: string): ShopifyClient;
    reverse(reverse: boolean): ShopifyClient;
    filters(filters: ProductCollectionFilter): ShopifyClient;
    filterInStock(): ShopifyClient;
    filterOutOfStock(): ShopifyClient;
    filterProductType(productType: string): ShopifyClient;
    filterVendor(productVendor: string): ShopifyClient;
    filterVariantOption(name: string, value: string): ShopifyClient;
    filterMetafield(namespace: string, key: string, value: string): ShopifyClient;
    query(query: string): ShopifyClient;
    findArticle(handle: string): Promise<QueryResponse>;
    findArticles(params: any): Promise<QueryResponse>;
    findBlog(handle: string): Promise<QueryResponse>;
    findBlogs(params: any): Promise<QueryResponse>;
    findCart(id: string): Promise<QueryResponse>;
    cartCreate(): Promise<QueryResponse>;
    cartDiscountCodesUpdate(cartId: string, discountCodes: string[]): Promise<QueryResponse>;
    cartLineAdd(cartId: string, line: any): Promise<QueryResponse>;
    cartLinesAdd(cartId: string, lines: any): Promise<QueryResponse>;
    cartLineRemove(cartId: string, lineId: string): Promise<QueryResponse>;
    cartLinesRemove(cartId: string, lineIds: string[]): Promise<QueryResponse>;
    cartLinesUpdate(cartId: string, lines: any): Promise<QueryResponse>;
    cartBuyerIdentityUpdate(cartId: string, buyerIdentity: any): Promise<QueryResponse>;
    findCheckout(id: string): Promise<QueryResponse>;
    checkoutCreate(): Promise<QueryResponse>;
    addCheckoutLineItem(checkoutId: string, lineItem: any): Promise<QueryResponse>;
    addCheckoutLineItems(checkoutId: string, lineItems: any): Promise<QueryResponse>;
    updateCheckoutLineItems(checkoutId: string, lineItems: any): Promise<QueryResponse>;
    removeCheckoutLineItem(checkoutId: string, lineItemId: string): Promise<QueryResponse>;
    removeCheckoutLineItems(checkoutId: string, lineItemIds: string[]): Promise<QueryResponse>;
    applyCheckoutDiscountCode(checkoutId: string, discountCode: string): Promise<QueryResponse>;
    removeCheckoutDiscountCode(checkoutId: string): Promise<QueryResponse>;
    findProduct(handle: string): Promise<QueryResponse>;
    findProductbyId(id: string): Promise<QueryResponse>;
    findProducts(params: ShopifyQueryParams): Promise<QueryResponse>;
    searchProducts(params: ShopifyQueryParams): Promise<QueryResponse>;
    findProductRecommendations(productId: string): Promise<QueryResponse>;
    findCollection(handle: string, query: any): Promise<QueryResponse>;
    findCollections(first?: number): Promise<QueryResponse>;
    login(email: string, password: string): Promise<QueryResponse>;
    signup(customer: Customer): Promise<QueryResponse>;
    forgotPassword(email: string): Promise<QueryResponse>;
    resetPassword(resetToken: string, password: string): Promise<QueryResponse>;
    refreshCustomerAccessToken(): Promise<QueryResponse>;
    logout(): Promise<QueryResponse>;
    findCustomer(): Promise<QueryResponse>;
    updateCustomer(customer: Customer): Promise<QueryResponse>;
    updateCustomerPassword({ password }: {
        password: any;
    }): Promise<QueryResponse>;
    findCustomerAddresses(first?: number, cursor?: string): Promise<QueryResponse>;
    updateCustomerAddress(address: Address): Promise<QueryResponse>;
    createCustomerAddress(address: any): Promise<QueryResponse>;
    deleteCustomerAddress(id: string): Promise<QueryResponse>;
    findCustomerOrders(orderParams: any): Promise<QueryResponse>;
    findMenu(handle: string): Promise<QueryResponse>;
    findPage(handle: string): Promise<QueryResponse>;
    findPages(params: any): Promise<QueryResponse>;
    findShop(): Promise<QueryResponse>;
    findMetaobject(handle: string): Promise<QueryResponse>;
    findMetaobjects(params: any): Promise<QueryResponse>;
    decodeBase64(data: any): string;
    getBase64DecodedId(id: string): string;
    executeQuery(query: any, variables: any): Promise<QueryResponse>;
    executeMutation(mutation: any, variables: any): Promise<QueryResponse>;
}
export declare const createClient: (domain: string, storefrontAccessToken: string, fetchAccessToken: () => string, apiVersion?: string) => ShopifyClient;
