export declare const formatCurrency: (money: any, digits?: number) => string;
export declare const shopifyResizeImageType: (url: any, { height, width }: {
    height: any;
    width: any;
}) => string;
export declare const findVariantByColor: (product: any, color: any) => any;
export declare const getSellingPlanDescription: (sellingPlan: any) => string;
export declare const getSellingPlanPrice: (variant: any, sellingPlan: any) => any;
export declare const truncate: (str: any, n: any) => any;
export declare const renderMerchandiseTitle: (merchandise: any) => any;
export declare const renderLineItemPrice: (line: any) => string;
export declare const renderLineItemCompareAtPrice: (line: any) => string;
export declare function stripParams(src: any): any;
export declare const decodeBase64: (data: any) => string;
export declare const getBase64DecodedId: (id: any) => string;
export declare const getShopifyIdFromGid: (gid: any) => string;
