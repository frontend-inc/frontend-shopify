'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var ShopifyProductContext_1 = __importDefault(require("./ShopifyProductContext"));
var ShopifyProductProvider = function (props) {
    var children = props.children;
    var _a = (0, react_1.useState)(null), product = _a[0], setProduct = _a[1];
    var _b = (0, react_1.useState)(null), variant = _b[0], setVariant = _b[1];
    var _c = (0, react_1.useState)(null), collection = _c[0], setCollection = _c[1];
    var _d = (0, react_1.useState)({}), selectedOptions = _d[0], setSelectedOptions = _d[1];
    var _e = (0, react_1.useState)(true), availableForSale = _e[0], setAvailableForSale = _e[1];
    (0, react_1.useEffect)(function () {
        if (product) {
            setAvailableForSale(product.availableForSale);
        }
    }, [product]);
    var value = {
        availableForSale: availableForSale,
        setAvailableForSale: setAvailableForSale,
        product: product,
        setProduct: setProduct,
        variant: variant,
        setVariant: setVariant,
        collection: collection,
        setCollection: setCollection,
        selectedOptions: selectedOptions,
        setSelectedOptions: setSelectedOptions,
    };
    return (react_1.default.createElement(ShopifyProductContext_1.default.Provider, { value: value }, children));
};
exports.default = ShopifyProductProvider;
