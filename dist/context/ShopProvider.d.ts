import React from 'react';
declare type ShopProviderProps = {
    domain: string;
    storefrontAccessToken: string;
    children: React.ReactNode;
    logo?: string;
    shopUrl: string;
    authCookie: string;
    apiVersion?: string;
};
declare const ShopProvider: (props: ShopProviderProps) => any;
export default ShopProvider;
