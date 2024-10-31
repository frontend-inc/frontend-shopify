import React from 'react';
import { ShopifyProductType } from '../types';
declare type ShopifyProductProviderProps = {
    children: React.ReactNode;
    product?: ShopifyProductType;
};
declare const ShopifyProductProvider: (props: ShopifyProductProviderProps) => any;
export default ShopifyProductProvider;
