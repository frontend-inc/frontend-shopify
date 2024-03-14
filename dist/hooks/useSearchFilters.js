"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
// Product filtering:
// https://shopify.dev/docs/custom-storefronts/building-with-the-storefront-api/products-collections/filter-products
var useSearchFilters = function () {
    var _a = (0, react_1.useState)([]), filters = _a[0], setFilters = _a[1];
    var filterInStock = function () {
        if (filters.find(function (f) { return f.available; })) {
            removeFilter(filters.find(function (f) { return f.available; }));
        }
        else {
            addFilter({ available: true });
        }
    };
    var filterProductType = function (productType) {
        if (filters.find(function (f) { return f.productType === productType; })) {
            removeFilter(filters.find(function (f) { return f.productType === productType; }));
        }
        else {
            addFilter({ productType: productType });
        }
    };
    var filterVendor = function (productVendor) {
        if (filters.find(function (f) { return f.productVendor === productVendor; })) {
            removeFilter(filters.find(function (f) { return f.productVendor === productVendor; }));
        }
        else {
            addFilter({ productVendor: productVendor });
        }
    };
    var filterVariantOption = function (name, value) {
        if (filters.find(function (f) { var _a, _b; return ((_a = f.variantOption) === null || _a === void 0 ? void 0 : _a.name) === name && ((_b = f.variantOption) === null || _b === void 0 ? void 0 : _b.value) === value; })) {
            removeFilter(filters.find(function (f) { var _a; return ((_a = f.variantOption) === null || _a === void 0 ? void 0 : _a.name) === name; }));
        }
        else {
            addFilter({
                variantOption: {
                    name: name,
                    //@ts-ignore
                    value: value,
                },
            });
        }
    };
    var filterTag = function (tag) {
        if (filters.find(function (f) { return f.tag === tag; })) {
            removeFilter(filters.find(function (f) { return f.tag === tag; }));
        }
        else {
            addFilter({ tag: tag });
        }
    };
    var filterPrice = function (min, max) {
        if (filters.find(function (f) { return f.price; })) {
            removeFilter(filters.find(function (f) { return f.price; }));
        }
        addFilter({
            //@ts-ignore
            price: {
                min: min,
                max: max,
            },
        });
    };
    var addFilter = function (filter) {
        setFilters(__spreadArray(__spreadArray([], filters, true), [filter], false));
    };
    var removeFilter = function (filter) {
        setFilters(filters.filter(function (f) { return f !== filter; }));
    };
    var clearFilters = function () {
        setFilters([]);
    };
    return {
        filters: filters,
        setFilters: setFilters,
        addFilter: addFilter,
        removeFilter: removeFilter,
        clearFilters: clearFilters,
        filterInStock: filterInStock,
        filterProductType: filterProductType,
        filterVendor: filterVendor,
        filterVariantOption: filterVariantOption,
        filterTag: filterTag,
        filterPrice: filterPrice
    };
};
exports.default = useSearchFilters;
