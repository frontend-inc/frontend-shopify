import React from 'react';
declare type ShopifyProviderProps = {
    enableShopify?: boolean;
    domain: string;
    storefrontAccessToken: string;
    children: React.ReactNode;
    logo?: string;
    shopUrl: string;
    apiVersion?: string;
    customerPortalUrl?: string;
};
declare const ShopifyProvider: (props: ShopifyProviderProps) => any;
export default ShopifyProvider;
