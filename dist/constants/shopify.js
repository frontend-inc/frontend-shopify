"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLLECTION_SORT_OPTIONS = exports.PRODUCT_SORT_OPTIONS = void 0;
// See all sort keys:
// https://shopify.dev/docs/api/storefront/2023-04/enums/ProductSortKeys
exports.PRODUCT_SORT_OPTIONS = [
    { label: 'Title A-Z', value: 'TITLE', reverse: false },
    { label: 'Title Z-A', value: 'TITLE', reverse: true },
    { label: 'Recommended', value: 'RELEVANCE', reverse: false },
    { label: 'Price - High to Low', value: 'PRICE', reverse: true },
    { label: 'Price - Low to High', value: 'PRICE', reverse: false },
    { label: 'Popular', value: 'BEST_SELLING', reverse: false },
];
exports.COLLECTION_SORT_OPTIONS = [
    { label: 'Collection', value: 'COLLECTION_DEFAULT', reverse: false },
    { label: 'Title A-Z', value: 'TITLE', reverse: false },
    { label: 'Title Z-A', value: 'TITLE', reverse: true },
    { label: 'Price - High to Low', value: 'PRICE', reverse: true },
    { label: 'Price - Low to High', value: 'PRICE', reverse: false },
];
