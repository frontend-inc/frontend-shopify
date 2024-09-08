"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findVariantFilters = exports.findTagFilters = exports.findStyleFilters = exports.findMaterialFilters = exports.findSizeFilters = exports.findColorFilters = exports.findVendorFilters = exports.findShopifyProductTypeFilters = exports.findAvailableFilter = exports.findPriceFilter = void 0;
var findPriceFilter = function (filters) {
    return filters
        .filter(function (filter) { return filter === null || filter === void 0 ? void 0 : filter.priceRange; })
        .map(function (filter) { return filter === null || filter === void 0 ? void 0 : filter.priceRange; });
};
exports.findPriceFilter = findPriceFilter;
var findAvailableFilter = function (filters) {
    var _a;
    return (_a = filters.find(function (filter) { return (filter === null || filter === void 0 ? void 0 : filter.available) === true || (filter === null || filter === void 0 ? void 0 : filter.available) === false; })) === null || _a === void 0 ? void 0 : _a.available;
};
exports.findAvailableFilter = findAvailableFilter;
var findShopifyProductTypeFilters = function (filters) {
    return filters
        .filter(function (filter) { return filter === null || filter === void 0 ? void 0 : filter.productType; })
        .map(function (filter) { return filter === null || filter === void 0 ? void 0 : filter.productType; });
};
exports.findShopifyProductTypeFilters = findShopifyProductTypeFilters;
var findVendorFilters = function (filters) {
    return filters
        .filter(function (filter) { return filter === null || filter === void 0 ? void 0 : filter.productVendor; })
        .map(function (filter) { return filter === null || filter === void 0 ? void 0 : filter.productVendor; });
};
exports.findVendorFilters = findVendorFilters;
var findColorFilters = function (filters) {
    return (0, exports.findVariantFilters)('color', filters);
};
exports.findColorFilters = findColorFilters;
var findSizeFilters = function (filters) {
    return (0, exports.findVariantFilters)('size', filters);
};
exports.findSizeFilters = findSizeFilters;
var findMaterialFilters = function (filters) {
    return (0, exports.findVariantFilters)('material', filters);
};
exports.findMaterialFilters = findMaterialFilters;
var findStyleFilters = function (filters) {
    return (0, exports.findVariantFilters)('style', filters);
};
exports.findStyleFilters = findStyleFilters;
var findTagFilters = function (filters) {
    return filters.filter(function (filter) { return filter === null || filter === void 0 ? void 0 : filter.tag; }).map(function (filter) { return filter === null || filter === void 0 ? void 0 : filter.tag; });
};
exports.findTagFilters = findTagFilters;
var findVariantFilters = function (name, filters) {
    return filters
        .filter(function (filter) { var _a; return ((_a = filter === null || filter === void 0 ? void 0 : filter.variantOption) === null || _a === void 0 ? void 0 : _a.name) === name; })
        .map(function (filter) { var _a; return (_a = filter === null || filter === void 0 ? void 0 : filter.variantOption) === null || _a === void 0 ? void 0 : _a.value; });
};
exports.findVariantFilters = findVariantFilters;
