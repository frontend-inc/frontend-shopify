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
var useProductVariants = function (props) {
    var product = props.product;
    var _a = (0, react_1.useState)(null), variant = _a[0], setVariant = _a[1];
    var _b = (0, react_1.useState)(), images = _b[0], setImages = _b[1];
    var _c = (0, react_1.useState)(null), image = _c[0], setImage = _c[1];
    var _d = (0, react_1.useState)({}), selectedOptions = _d[0], setSelectedOptions = _d[1];
    var _e = (0, react_1.useState)(null), sellingPlans = _e[0], setSellingPlans = _e[1];
    var _f = (0, react_1.useState)(), price = _f[0], setPrice = _f[1];
    var _g = (0, react_1.useState)(), compareAtPrice = _g[0], setCompareAtPrice = _g[1];
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        if (product === null || product === void 0 ? void 0 : product.handle) {
            setSelectedOptions({});
            //@ts-ignore      
            setImage((_b = (_a = product === null || product === void 0 ? void 0 : product.images) === null || _a === void 0 ? void 0 : _a.edges[0]) === null || _b === void 0 ? void 0 : _b.node);
            //@ts-ignore      
            setImages((_c = product === null || product === void 0 ? void 0 : product.images) === null || _c === void 0 ? void 0 : _c.edges.map(function (e) { return e.node; }));
            setPrice((_e = (_d = product === null || product === void 0 ? void 0 : product.priceRange) === null || _d === void 0 ? void 0 : _d.minVariantPrice) === null || _e === void 0 ? void 0 : _e.amount);
            setCompareAtPrice(null);
            setSellingPlans((_j = (_h = (_g = (_f = product === null || product === void 0 ? void 0 : product.sellingPlanGroups) === null || _f === void 0 ? void 0 : _f.edges[0]) === null || _g === void 0 ? void 0 : _g.node) === null || _h === void 0 ? void 0 : _h.sellingPlans) === null || _j === void 0 ? void 0 : _j.edges.map(function (_a) {
                var node = _a.node;
                return node;
            }));
            //@ts-ignore      
            if (((_l = (_k = product === null || product === void 0 ? void 0 : product.variants) === null || _k === void 0 ? void 0 : _k.edges) === null || _l === void 0 ? void 0 : _l.length) == 1) {
                selectVariant(product, {});
            }
        }
        else {
            setVariant(null);
            setImages(null);
            setImage(null);
            setPrice(null);
            setCompareAtPrice(null);
            setSelectedOptions({});
        }
    }, [product === null || product === void 0 ? void 0 : product.handle]);
    (0, react_1.useEffect)(function () {
        var _a, _b;
        if (variant) {
            setImage(variant === null || variant === void 0 ? void 0 : variant.image);
            setPrice((_a = variant === null || variant === void 0 ? void 0 : variant.price) === null || _a === void 0 ? void 0 : _a.amount);
            setCompareAtPrice((_b = variant === null || variant === void 0 ? void 0 : variant.compareAtPrice) === null || _b === void 0 ? void 0 : _b.amount);
        }
    }, [variant]);
    return {
        image: image,
        images: images,
        price: price,
        compareAtPrice: compareAtPrice,
        sellingPlans: sellingPlans,
        handleImageClick: handleImageClick,
        selectedOptions: selectedOptions,
        handleOptionChange: handleOptionChange,
        product: product,
        variant: variant,
        selectVariant: selectVariant,
    };
};
exports.default = useProductVariants;
