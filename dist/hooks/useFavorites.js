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
var useFavorites = function (props) {
    var product = (props || {}).product;
    var domain = (0, react_1.useContext)(context_1.ShopifyContext).domain;
    var cookie = domain + "-favorites";
    var _a = (0, react_1.useState)([]), favorites = _a[0], setFavorites = _a[1];
    var _b = (0, react_1.useState)(false), isFavorite = _b[0], setIsFavorite = _b[1];
    var toggleFavorite = function () {
        isFavorite ? unfavorite() : favorite();
    };
    var favorite = function () {
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
        var newFavorites = __spreadArray([newProduct], favorites, true);
        setIsFavorite(true);
        // @ts-ignore
        (0, cookies_next_1.setCookie)(cookie, JSON.stringify(newFavorites));
    };
    var unfavorite = function () {
        var newFavorites = favorites === null || favorites === void 0 ? void 0 : favorites.filter(function (favorite) { return (favorite === null || favorite === void 0 ? void 0 : favorite.handle) !== (product === null || product === void 0 ? void 0 : product.handle); });
        setIsFavorite(false);
        // @ts-ignore
        (0, cookies_next_1.setCookie)(cookie, JSON.stringify(newFavorites));
    };
    (0, react_1.useEffect)(function () {
        if (product && favorites) {
            // @ts-ignore
            if (favorites === null || favorites === void 0 ? void 0 : favorites.find(function (favorite) { return (favorite === null || favorite === void 0 ? void 0 : favorite.handle) === (product === null || product === void 0 ? void 0 : product.handle); })) {
                setIsFavorite(true);
            }
            else {
                setIsFavorite(false);
            }
        }
        else {
            setIsFavorite(false);
        }
    }, [product, favorites]);
    (0, react_1.useEffect)(function () {
        var localCookie = (0, cookies_next_1.getCookie)(cookie);
        if (localCookie) {
            // @ts-ignore
            var favs = JSON.parse(localCookie) || [];
            setFavorites(favs);
        }
    }, []);
    return {
        favorites: favorites,
        isFavorite: isFavorite,
        toggleFavorite: toggleFavorite,
    };
};
exports.default = useFavorites;
