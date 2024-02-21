export declare const getMetafield: (metaobject: any, key: any) => any;
export declare const getMetafieldType: (metaobject: any, key: any) => any;
export declare const getMetafieldValue: (metaobject: any, key: any) => any;
export declare const getMetafieldImage: (metaobject: any, key: any) => any;
export declare const getMetafieldReference: (metaobject: any, key: any) => any;
export declare const getMetafieldReferences: (metaobject: any, key: any) => any;
export declare const getArrayFromString: (stringArray: any) => any;
export declare const truncate: (str: any, n: any) => any;
export declare const shopifyResizeImage: (url: any, { height, width }: {
    height: any;
    width: any;
}) => string;
export declare const formatCurrency: (money: any, digits?: number) => string;
export declare const renderMerchandiseTitle: (merchandise: any) => any;
export declare const renderLineItemPrice: (line: any) => string;
export declare const renderLineItemCompareAtPrice: (line: any) => string;
export declare const getBase64DecodedId: (id: any) => string;
export declare function stripParams(src: any): any;
export declare const getShopifyIdFromGid: (gid: any) => string;
