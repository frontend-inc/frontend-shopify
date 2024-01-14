"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var context_1 = require("../context");
var useProductContext = function () {
    var _a = (0, react_1.useState)(null), image = _a[0], setImage = _a[1];
    var _b = (0, react_1.useState)(null), images = _b[0], setImages = _b[1];
    var _c = (0, react_1.useState)(null), sellingPlans = _c[0], setSellingPlans = _c[1];
    var _d = (0, react_1.useState)(), price = _d[0], setPrice = _d[1];
    var _e = (0, react_1.useState)(), compareAtPrice = _e[0], setCompareAtPrice = _e[1];
    var _f = (0, react_1.useContext)(context_1.ProductContext), product = _f.product, setProduct = _f.setProduct, variant = _f.variant, setVariant = _f.setVariant, collection = _f.collection, setCollection = _f.setCollection, selectedOptions = _f.selectedOptions, setSelectedOptions = _f.setSelectedOptions;
    var handleImageClick = function (image) {
        setImage(image);
    };
    var handleOptionChange = function (name, value) {
        var _a;
        var selected = __assign(__assign({}, selectedOptions), (_a = {}, _a[name] = value, _a));
        setSelectedOptions(selected);
        selectVariant(product, selected);
    };
    var selectVariant = function (product, selectedOptions) {
        var _a, _b;
        if (selectedOptions === void 0) { selectedOptions = {}; }
        if (((_b = (_a = product === null || product === void 0 ? void 0 : product.variants) === null || _a === void 0 ? void 0 : _a.edges) === null || _b === void 0 ? void 0 : _b.length) == 1) {
            setVariant(product.variants.edges[0].node);
        }
        else {
            var selectedVariant = product.variants.edges.find(function (_a) {
                var variant = _a.node;
                return variant.selectedOptions.every(function (option) {
                    return selectedOptions[option.name] == option.value;
                });
            });
            setVariant(selectedVariant === null || selectedVariant === void 0 ? void 0 : selectedVariant.node);
        }
    };
    (0, react_1.useEffect)(function () {
        var _a, _b, _c, _d, _e;
        if (product) {
            setSelectedOptions({});
            setImages((_a = product === null || product === void 0 ? void 0 : product.images) === null || _a === void 0 ? void 0 : _a.edges.map(function (e) { return e.node; }));
            setImage((_c = (_b = product === null || product === void 0 ? void 0 : product.images) === null || _b === void 0 ? void 0 : _b.edges[0]) === null || _c === void 0 ? void 0 : _c.node);
        }
        if (((_e = (_d = product === null || product === void 0 ? void 0 : product.variants) === null || _d === void 0 ? void 0 : _d.edges) === null || _e === void 0 ? void 0 : _e.length) == 1) {
            selectVariant(product, {});
        }
    }, [product]);
    (0, react_1.useEffect)(function () {
        var _a, _b, _c, _d, _e, _f;
        if (variant) {
            setImage(variant === null || variant === void 0 ? void 0 : variant.image);
            setPrice((_a = variant === null || variant === void 0 ? void 0 : variant.price) === null || _a === void 0 ? void 0 : _a.amount);
            setCompareAtPrice((_b = variant === null || variant === void 0 ? void 0 : variant.compareAtPrice) === null || _b === void 0 ? void 0 : _b.amount);
        }
        else if (product) {
            setImage((_d = (_c = product === null || product === void 0 ? void 0 : product.images) === null || _c === void 0 ? void 0 : _c.edges[0]) === null || _d === void 0 ? void 0 : _d.node);
            setPrice((_f = (_e = product === null || product === void 0 ? void 0 : product.priceRange) === null || _e === void 0 ? void 0 : _e.minVariantPrice) === null || _f === void 0 ? void 0 : _f.amount);
            setCompareAtPrice(null);
        }
    }, [variant, product]);
    (0, react_1.useEffect)(function () {
        var _a, _b, _c, _d;
        if (product) {
            setSellingPlans((_d = (_c = (_b = (_a = product === null || product === void 0 ? void 0 : product.sellingPlanGroups) === null || _a === void 0 ? void 0 : _a.edges[0]) === null || _b === void 0 ? void 0 : _b.node) === null || _c === void 0 ? void 0 : _c.sellingPlans) === null || _d === void 0 ? void 0 : _d.edges.map(function (_a) {
                var node = _a.node;
                return node;
            }));
        }
    }, [product]);
    return {
        price: price,
        setPrice: setPrice,
        compareAtPrice: compareAtPrice,
        setCompareAtPrice: setCompareAtPrice,
        image: image,
        setImage: setImage,
        images: images,
        setImages: setImages,
        handleImageClick: handleImageClick,
        product: product,
        setProduct: setProduct,
        variant: variant,
        setVariant: setVariant,
        sellingPlans: sellingPlans,
        selectedOptions: selectedOptions,
        setSelectedOptions: setSelectedOptions,
        handleOptionChange: handleOptionChange,
        collection: collection,
        setCollection: setCollection,
    };
};
exports.default = useProductContext;
