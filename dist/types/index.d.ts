export declare type SearchFilterVariantType = 'tag' | 'product_type' | 'vendor' | 'variant_option' | 'price' | 'available';
export declare type PriceOptionType = {
    min: number;
    max: number | null;
};
export declare type SearchFilterType = {
    name: SearchFilterVariantType;
    value: string | number | PriceOptionType;
};
export declare type SearchFilterOptionType = {
    name: SearchFilterVariantType;
    value: string[];
};
export declare type SearchPriceOptionType = {
    name: SearchFilterVariantType;
    value: PriceOptionType;
};
export declare type ProductSortKeyType = 'BEST_SELLING' | 'COLLECTION_DEFAULT' | 'CREATED' | 'ID' | 'MANUAL' | 'PRICE' | 'RELEVANCE' | 'TITLE';
export declare type QueryParamsType = {
    query?: string;
    first?: number;
    sortKey?: ProductSortKeyType;
    reverse?: boolean;
    after?: string;
    filters?: SearchFilterType[];
};
export declare type QueryResponseType = {
    meta?: {
        hasNextPage: boolean;
        endCursor: string;
    };
    data: any;
    error?: any;
};
export declare type MoneyV2Type = {
    amount: string;
    currencyCode: string;
};
export declare type ShopifyImageType = {
    id: string;
    altText: string;
    url: string;
};
export declare type ProductOptionType = {
    id: string;
    name: string;
    values: string[];
};
export declare type PriceRangeType = {
    minVariantPrice: MoneyV2Type;
    maxVariantPrice: MoneyV2Type;
};
export declare type SelectedOptionType = {
    name: string;
    value: string;
};
export declare type VariantType = {
    availableForSale: boolean;
    compareAtPrice?: MoneyV2Type;
    id: string;
    image?: ShopifyImageType;
    price: MoneyV2Type;
    requiresShipping: boolean;
    selectedOptions: SelectedOptionType[];
    sku: string;
    title: string;
    weight?: number;
    weightUnit: string;
};
export declare type SellingPlanPriceAdjustmentType = {
    adjustmentValue: {
        adjustmentAmount?: MoneyV2Type;
        adjustmentPercentage?: number;
        price?: MoneyV2Type;
    };
};
export declare type SellingPlanType = {
    id: string;
    name: string;
    description: string;
    priceAdjustments: SellingPlanPriceAdjustmentType[];
};
export declare type SellingPlanGroupType = {
    name: string;
    sellingPlans: SellingPlanType[];
};
export declare type MetafieldReferenceVariantType = {
    id: string;
    title: string;
    sku: string;
    availableForSale: boolean;
};
export declare type MetafieldReferenceShopifyImageType = {
    image: ShopifyImageType;
};
export declare type MetafieldReferenceType = {
    id: string;
    handle: string;
    type: string;
    updatedAt: string;
    fields: {
        key: string;
        type: string;
        value: string;
        reference?: {
            id: string;
            handle: string;
            title: string;
            variants?: VariantType[];
        };
    }[];
};
export declare type MetafieldIdentifierType = {
    label?: string;
    namespace: string;
    key: string;
};
export declare type ShopifyMetafieldType = {
    label?: string;
    name: string;
    variant: string;
    namespace?: string;
    key?: string;
};
export declare type MetafieldType = {
    id: string;
    key: string;
    value: string;
    namespace: string;
    description: string;
    reference?: MetafieldReferenceVariantType | MetafieldReferenceShopifyImageType;
    references: MetafieldReferenceType[];
};
export declare type ShopifyProductType = {
    availableForSale: boolean;
    createdAt: string;
    updatedAt: string;
    description: string;
    descriptionHtml: string;
    handle: string;
    id: string;
    images: ShopifyImageType[];
    metafields: MetafieldType[];
    onlineStoreUrl: string;
    options: ProductOptionType[];
    priceRange: PriceRangeType;
    sellingPlanGroups: SellingPlanGroupType[];
    productType: string;
    publishedAt: string;
    tags: string[];
    title: string;
    variants: VariantType[];
    vendor: string;
    seo: SEO;
};
export declare type ProductVariantType = {
    id: string;
    title: string;
    price: MoneyV2Type;
    image?: ShopifyImageType;
    compareAtPriceV2?: MoneyV2Type;
    availableForSale: boolean;
    sku?: string;
    selectedOptions: SelectedOptionType[];
    requiresShipping: boolean;
    taxable: boolean;
    weight?: number;
    weightUnit?: string;
    presentmentPrices?: MoneyV2Type[];
    product?: ShopifyProductType;
};
export declare type SEO = {
    title?: string;
    description?: string;
};
export declare type ShopifyCollectionType = {
    id: string;
    title: string;
    description: string;
    descriptionHtml: string;
    updatedAt: string;
    handle: string;
    image?: ShopifyImageType;
    seo: SEO;
    products: ShopifyProductType[];
};
export declare type CartLineType = {
    id?: string;
    merchandiseId: string;
    quantity: number;
    sellingPlanId?: string;
    attributes?: Record<string, any>;
    discountAllocations?: {
        allocatedAmount: MoneyV2Type;
        discountApplication: {
            targetSelection: string;
            targetType: string;
            value: {
                percentage: number;
            };
        };
    }[];
    sellingPlanAllocation?: {
        priceAdjustments: {
            price: MoneyV2Type;
            perDeliveryPrice: MoneyV2Type;
            compareAtPrice: MoneyV2Type;
            unitPrice: MoneyV2Type;
        }[];
        sellingPlan: SellingPlanType;
    };
    merchandise?: ProductVariantType;
};
export declare type ShopifyCartType = {
    id: string;
    attribute: {
        key: string;
        value: string;
    };
    attributes: {
        key: string;
        value: string;
    }[];
    lineItems: CartLineType[];
    lineItemsSubtotalPrice: MoneyV2Type;
    checkoutUrl: string;
    discountCodes: {
        code: string;
        applicable: boolean;
    }[];
    discountAllocations: {
        discountedAmount: MoneyV2Type;
    }[];
    cost: {
        checkoutChargeAmount: MoneyV2Type;
        totalTaxAmount: MoneyV2Type;
        totalTaxAmountEstimated: MoneyV2Type;
        totalAmount: MoneyV2Type;
        totalAmountEstimated: MoneyV2Type;
        totalDutyAmount: MoneyV2Type;
        totalDutyAmountEstimated: MoneyV2Type;
        subtotalAmount: MoneyV2Type;
        subtotalAmountEstimated: MoneyV2Type;
    };
    webUrl: string;
};
export declare type CheckoutLineItemType = {
    title: string;
    variantId: string;
    quantity: number;
    variant: {
        title: string;
        price: MoneyV2Type;
        product: {
            title: string;
        };
    };
};
export declare type ShippingRateType = {
    handle: string;
    title: string;
    price: MoneyV2Type;
};
export declare type ShopifyCheckoutType = {
    id: string;
    webUrl: string;
    totalPriceV2: MoneyV2Type;
    subtotalPriceV2: MoneyV2Type;
    totalTaxV2: MoneyV2Type;
    completedAt: string | null;
    createdAt: string;
    updatedAt: string;
    email: string | null;
    note: string | null;
    shippingAddress: ShopifyAddressType | null;
    shippingLine: ShippingRateType | null;
    lineItems: CheckoutLineItemType[];
};
export declare type ShopifyAddressType = {
    id?: string;
    phone?: string;
    firstName: string;
    lastName: string;
    address1: string;
    address2: string;
    city: string;
    province: string;
    country: string;
    zip: string;
};
export declare type DefaultShopifyAddressType = ShopifyAddressType & {
    name: string;
};
export declare type ShopifyCustomerType = {
    id: string;
    displayName: string;
    email: string;
    firstName: string;
    lastName: string;
    phone?: string;
    createdAt: string;
    updatedAt: string;
    acceptsMarketing: boolean;
    addresses: ShopifyAddressType[];
    defaultAddress?: DefaultShopifyAddressType;
    lastIncompleteCheckout?: {
        id: string;
        createdAt: string;
        updatedAt: string;
        webUrl: string;
    };
    password?: string;
    passwordConfirmation?: string;
};
export declare type MailingShopifyAddressType = {
    address1: string;
    address2?: string;
    city: string;
    company?: string;
    country: string;
    firstName: string;
    lastName: string;
    phone: string;
    province: string;
    zip: string;
};
export declare type OrderLineItemType = {
    title: string;
    variantTitle?: string;
    quantity: number;
    price?: MoneyV2Type;
    variant?: VariantType;
};
export declare type ShopifyShippingAddressType = {
    firstName: string;
    lastName: string;
    address1: string;
    address2?: string;
    city: string;
    province?: string;
    country: string;
    zip: string;
    phone?: string;
    company?: string;
};
export declare type ShopifyOrderType = {
    id: string;
    name: string;
    statusUrl: string;
    orderNumber: number;
    processedAt: string;
    currencyCode: string;
    totalPrice: MoneyV2Type;
    totalRefunded: MoneyV2Type;
    totalShippingPrice: MoneyV2Type;
    lineItems: OrderLineItemType[];
    shippingAddress?: ShopifyShippingAddressType;
};
