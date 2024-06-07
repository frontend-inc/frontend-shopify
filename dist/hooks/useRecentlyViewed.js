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
var cookies_next_1 = require("cookies-next");
var context_1 = require("../context");
var useRecentlyViewed = function () {
    var domain = (0, react_1.useContext)(context_1.ShopifyContext).domain;
    var cookie = domain + "-recently-viewed";
    var _a = (0, react_1.useState)([]), products = _a[0], setProducts = _a[1];
    var viewProduct = function (product) {
        var _a, _b, _c, _d;
        var newProduct = {
            id: product === null || product === void 0 ? void 0 : product.id,
            handle: product === null || product === void 0 ? void 0 : product.handle,
            images: product === null || product === void 0 ? void 0 : product.images,
            title: product === null || product === void 0 ? void 0 : product.title,
            priceRange: {
                minVariantPrice: {
                    amount: (_b = (_a = product === null || product === void 0 ? void 0 : product.priceRange) === null || _a === void 0 ? void 0 : _a.minVariantPrice) === null || _b === void 0 ? void 0 : _b.amount,
                },
                maxVariantPrice: {
                    amount: (_d = (_c = product === null || product === void 0 ? void 0 : product.priceRange) === null || _c === void 0 ? void 0 : _c.maxVariantPrice) === null || _d === void 0 ? void 0 : _d.amount,
                }
            }
        };
        var recentlyViewed = __spreadArray([], products, true);
        var index = products === null || products === void 0 ? void 0 : products.findIndex(function (p) { return (p === null || p === void 0 ? void 0 : p.handle) === (product === null || product === void 0 ? void 0 : product.handle); });
        if (index > -1) {
            recentlyViewed = products === null || products === void 0 ? void 0 : products.splice(index, 1);
            recentlyViewed.unshift(newProduct);
        }
        else {
            recentlyViewed.unshift(newProduct);
        }
        // @ts-ignore
        (0, cookies_next_1.setCookie)(cookie, JSON.stringify(recentlyViewed));
    };
    var removeProduct = function (product) {
        var recentlyViewed = products === null || products === void 0 ? void 0 : products.filter(function (p) { return (p === null || p === void 0 ? void 0 : p.handle) !== (product === null || product === void 0 ? void 0 : product.handle); });
        // @ts-ignore
        (0, cookies_next_1.setCookie)(cookie, JSON.stringify(recentlyViewed));
    };
    (0, react_1.useEffect)(function () {
        var localCookie = (0, cookies_next_1.getCookie)(cookie);
        if (localCookie) {
            // @ts-ignore
            var recentlyViewed = JSON.parse(localCookie) || [];
            setProducts(recentlyViewed);
        }
    }, []);
    return {
        products: products,
        viewProduct: viewProduct,
        removeProduct: removeProduct,
    };
};
exports.default = useRecentlyViewed;
