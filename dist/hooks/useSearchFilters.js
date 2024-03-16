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
    var handleFilter = function (filter) {
        var name = filter.name;
        if (filters === null || filters === void 0 ? void 0 : filters.find(function (f) { return f.name == name; })) {
            var newFilters = filters.filter(function (f) { return f.name != name; });
            setFilters(__spreadArray(__spreadArray([], newFilters, true), [filter], false));
        }
        else {
            setFilters(__spreadArray(__spreadArray([], filters, true), [filter], false));
        }
    };
    var handleFilterArray = function (filter) {
        var name = filter.name, value = filter.value;
        if (filters === null || filters === void 0 ? void 0 : filters.find(function (f) { return f.name == name && f.value == value; })) {
            setFilters(filters.filter(function (f) { return !(f.name == name && f.value == value); }));
        }
        else {
            setFilters(__spreadArray(__spreadArray([], filters, true), [filter], false));
        }
    };
    function formatProductFilters(filters) {
        var query = [];
        filters.forEach(function (filter) {
            var queryFilter = {};
            switch (filter.name) {
                case 'tag':
                    queryFilter['tag'] = filter.value;
                    break;
                case 'product_type':
                    queryFilter['productType'] = filter.value;
                    break;
                case 'vendor':
                    queryFilter['vendor'] = filter.value;
                    break;
                case 'available':
                    queryFilter['vendor'] = filter.value === 'true';
                    break;
                case 'price':
                    queryFilter['price'] = {
                        min: parseFloat(filter.value.min || 0),
                        max: parseFloat(filter.value.max || 0)
                    };
                    break;
                default:
                    queryFilter = {
                        variantOption: {
                            name: filter.name,
                            value: filter.value
                        }
                    };
            }
            query.push(queryFilter);
        });
        return query;
    }
    var formatQueryFilters = function (filters) {
        // Group filters by name
        var groupedFilters = filters.reduce(function (groups, filter) {
            if (!groups[filter.name]) {
                groups[filter.name] = [];
            }
            groups[filter.name].push(filter.value);
            return groups;
        }, {});
        // Build query for each group and join with AND
        var queryParts = Object.keys(groupedFilters).map(function (name) {
            var values = groupedFilters[name];
            var queryPart = '';
            if (name == 'price') {
                queryPart = values.map(function (value) { return "price:>" + value.min + " AND price:<" + value.max; }).join(' OR ');
            }
            else {
                queryPart = values.map(function (value) { return name + ":" + value; }).join(' OR ');
            }
            return "(" + queryPart + ")";
        });
        return queryParts.join(' AND ');
    };
    return {
        filters: filters,
        setFilters: setFilters,
        handleFilter: handleFilter,
        handleFilterArray: handleFilterArray,
        formatProductFilters: formatProductFilters,
        formatQueryFilters: formatQueryFilters
    };
};
exports.default = useSearchFilters;
