export declare const formatCurrency: (money: any, digits?: number) => string;
export declare const shopifyResizeImage: (url: any, { height, width }: {
    height: any;
    width: any;
}) => string;
export declare const findVariantByColor: (product: any, color: any) => any;
export declare const findPriceFilter: (filters: any) => any;
export declare const findAvailableFilter: (filters: any) => any;
export declare const findProductTypeFilters: (filters: any) => any;
export declare const findVendorFilters: (filters: any) => any;
export declare const findColorFilters: (filters: any) => any;
export declare const findSizeFilters: (filters: any) => any;
export declare const findMaterialFilters: (filters: any) => any;
export declare const findStyleFilters: (filters: any) => any;
export declare const findTagFilters: (filters: any) => any;
export declare const findVariantFilters: (name: any, filters: any) => any;
export declare const getSellingPlanDescription: (sellingPlan: any) => string;
export declare const getSellingPlanPrice: (variant: any, sellingPlan: any) => any;
export declare const getField: (object: any, key: any) => any;
export declare const getValue: (object: any, key: any) => any;
export declare const getMetafield: (metaobject: any, key: any) => any;
export declare const getMetaValue: (metaobject: any, key: any) => any;
export declare const getMetaImage: (metaobject: any, key: any) => any;
export declare const getMetaReference: (metaobject: any, key: any) => any;
export declare const getMetaReferences: (metaobject: any, key: any) => any;
export declare const getArrayFromString: (stringArray: any) => any;
export declare const truncate: (str: any, n: any) => any;
export declare const renderMerchandiseTitle: (merchandise: any) => any;
export declare const renderLineItemPrice: (line: any) => string;
export declare const renderLineItemCompareAtPrice: (line: any) => string;
export declare const decodeBase64: (data: any) => string;
export declare const getBase64DecodedId: (id: any) => string;
export declare function stripParams(src: any): any;
export declare const getShopifyIdFromGid: (gid: any) => string;
